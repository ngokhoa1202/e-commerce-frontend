'use client';

import { authStore } from '@/stores';
import { ReactElement, useState, useEffect, CSSProperties, SyntheticEvent } from 'react';
import { useRouter } from 'next/navigation';
import { PlusIcon } from '@heroicons/react/24/outline';

import CourseApi from '@/api/course';
import UserApi from '@/api/user';

import { CourseFullDto } from '@/dto/course';
import { TIMEOUT } from '@/constants';
import { HashLoader } from 'react-spinners';
import MyClassList from '../_components/classes/MyClassList';
import { UserPlainDto } from '@/dto/user';
import ErrorModal from '../_components/ErrorModal';

export default function MyClassesPage(): ReactElement {

  const { accessToken } = authStore.getState();
  const router = useRouter();

  const [myCourses, setMyCourses] = useState<CourseFullDto[]>(() => []);

  const [isFetching, setIsFetching] = useState(false);
  const loaderCSSProperties: CSSProperties = {
    display: 'block',
    margin: '4rem auto'
  }

  useEffect(() => {
    setIsFetching(true);
    setTimeout(() => {
      setIsFetching(false);
    }, TIMEOUT);

    async function fetchData() {
      if (!accessToken) {
        router.replace('/');
      }
      const fetchedCourses = await CourseApi.getByAccessToken(accessToken);
      setMyCourses(fetchedCourses);
    }
    fetchData();
  }, [accessToken]);

  const onClickCreateNewClass = async (e: SyntheticEvent<HTMLButtonElement>) => {
    const user: UserPlainDto = await UserApi.getCurrentUserByAccessToken(accessToken);
    if (user.role === 'TUTOR') {
      router.push('my-classes/new');
    } else {
      alert('You are not a tutor to create a new class');
    }
  }


  return (
    <section className="container px-8">
      <h1 className="font-bold text-4xl text-center mt-12">Your classes</h1>

      {
        (isFetching) ? (
          <HashLoader
            color="#1D4ED8"
            size={64}
            cssOverride={loaderCSSProperties}
            aria-label="Loading Spinner"
            loading={isFetching}
          />
        ) : (
          <div className="container grid grid-cols-12 gap-x-0 mt-10">
            <div className="col-span-2">
              Filter
            </div>

            <div className="col-span-10">
              <ul className="flex flex-row gap-4">
                <li>
                  <button
                    type="button"
                    onClick={(e) => onClickCreateNewClass(e)}
                    className="block text-normal font-semibold px-3 py-2 rounded-lg bg-blue-600 text-white hover:shadow-lg hover:bg-blue-700"
                  >
                    <div className="flex flex-row items-center gap-2">
                      <PlusIcon width={24} height={24} className="inline-block" />
                      <span className="inline-block mr-3">Add classes</span>
                    </div>
                  </button>
                </li>
              </ul>
              <MyClassList courses={[...myCourses]} />
            </div>

          </div>
        )
      }
    </section>
  );
}
