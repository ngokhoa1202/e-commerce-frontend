'use client';

import { COURSE_DESCRIPTION, TIMEOUT } from '@/constants';
import { CourseCreationDto } from '@/dto/course';
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import {useRouter} from 'next/navigation';
import { CSSProperties, ReactElement, SyntheticEvent, useEffect, useState } from 'react';

import Link from 'next/link';
import { LocationPlainDto } from '@/dto/location';
import { authStore } from '@/stores';
import LocationApi from '@/api/location';
import CourseApi from '@/api/course';
import { HashLoader } from 'react-spinners';

const INITIAL_COURSE: CourseCreationDto = {
  name: '',
  subject: '',
  duration: '',
  startDate: new Date(),
  endDate: new Date(),
  description: '',
  locationId: 'aa5c646e-18a3-4b7f-bc35-aa585f48a5dd'
}

const INITIAL_LOCATIONS: LocationPlainDto[] = [];

export default function CreateNewClassPage(): ReactElement {

  const [course, setCourse] = useState(() => INITIAL_COURSE);
  const [locations, setLocations] = useState(() => INITIAL_LOCATIONS);
  const [location, setLocation] = useState<LocationPlainDto | null>(() => null);

  const { accessToken } = authStore.getState();

  const router = useRouter();

  const onChangeCourseName = (e: SyntheticEvent<HTMLInputElement>) => {
    setCourse({
      ...course,
      name: e.currentTarget.value
    });
  };

  const onChangeSubject = (e: SyntheticEvent<HTMLInputElement>) => {
    setCourse({
      ...course,
      subject: e.currentTarget.value
    })
  };

  const onChangeDuration = (e: SyntheticEvent<HTMLInputElement>) => {
    setCourse({
      ...course,
      duration: e.currentTarget.value
    })
  };

  const onChangeCourseDescription = (e: SyntheticEvent<HTMLTextAreaElement>) => {
    setCourse({
      ...course,
      description: e.currentTarget.value
    })
  };

  const onChangeStartDate = (e: SyntheticEvent<HTMLInputElement>) => {
    setCourse({
      ...course,
      startDate: new Date(e.currentTarget.value)
    })
  };

  const onChangeEndDate = (e: SyntheticEvent<HTMLInputElement>) => {
    setCourse({
      ...course,
      endDate: new Date(e.currentTarget.value)
    })
  };

  const onChangeLocation = (e: SyntheticEvent<HTMLButtonElement>, index: number) => {
    setLocation(locations[index]);
    setCourse({
      ...course,
      locationId: locations[index].id
    });
  }

  const onSubmitCourseCreationForm = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (course.name !== '' && course.subject !== '' && course.duration !== '') {
      
      CourseApi.create(course, accessToken).then((newCourse) => {
        if (newCourse) {
          router.back();
        } else {
          alert('Cannot create new course. Please check your form data');
        }
      })
    }
    
  }

  const [isFetching, setIsFetching] = useState(false);
  const loaderCSSProperties: CSSProperties = {
    display: 'block',
    margin: '4rem auto'
  };

  useEffect(() => {
    setIsFetching(true);
    setTimeout(() => {
      setIsFetching(false);
    }, TIMEOUT);

    async function fetchData() {
      if (!accessToken) {
        router.replace('/');
      }
      const fetchedLocations = await LocationApi.get(accessToken);
      setLocations(fetchedLocations);
      if (fetchedLocations.length !== 0) {
        setLocation(fetchedLocations[0]);
      }
    }

    fetchData();
  }, [accessToken]);

  return (
    <section className="mt-20 bg-[url('/registration/background/classroom.webp')] py-8">

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
          <form
            className="w-1/2 mx-auto px-10 py-10 border border-blue-400 rounded-2xl shadow-md shadow-blue-600 bg-blue-50 relative"
            onSubmit={(e) => onSubmitCourseCreationForm(e)}>
            <h1 className="text-3xl text-blue-800 text-center">Create new class</h1>

            <div className="mb-8 mt-12 grid grid-cols-2 gap-x-8">
              <div>
                <label htmlFor="course-name" className="block mb-2 text-normal font-medium text-gray-900">
                  Course name
                </label>
                <input
                  type="text"
                  id="course-name"
                  className="bg-gray-50 border border-blue-500 text-gray-900 text-normal rounded-lg focus:ring-blue-500 focus:border-blue-700 block
                    w-full p-2.5"
                  required
                  placeholder="Introduction to Programming"
                  value={course.name}
                  onChange={(e) => onChangeCourseName(e)}
                />
              </div>

              <div>
                <label htmlFor="role" className="block mb-2 text-normal font-medium text-gray-900">
                  Location
                </label>

                <Menu as="div" className="relative inline-block text-left w-full">
                  <div>
                    <MenuButton
                      className="inline-flex w-full border justify-center items-center rounded-md p-2.5 bg-gray-50
                  border-blue-500 text-normal text-gray-900
                  ring-blue-300 hover:bg-blue-50 active:text-gray-50 active:bg-blue-500"
                    >
                      {
                        (location === null) ? (
                          <div className="flex flex-row">
                            Choose a location &nbsp;
                            <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400"/>
                          </div>
                        ) : (
                          <div className="flex flex-row">
                            {`${location.addressLine1} ${location.addressLine2}`}
                            &nbsp;
                            <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400"/>
                          </div>
                        )
                      }
                    </MenuButton>
                  </div>

                  <MenuItems
                    transition
                    className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition
                  focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100
                  data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                  >

                    <div className="py-1">
                      <MenuItem as="div">
                        {
                          locations.map((loc, index) => (
                            <button
                              type="button"
                              className="block w-full px-4 py-2 text-normal hover:bg-blue-500 hover:text-gray-100"
                              value={loc.id}
                              key={`Button ${loc.id}`}
                              onClick={(e) => onChangeLocation(e, index)}
                            >
                              {`${loc.addressLine1} ${loc.addressLine2}`}
                            </button>
                          ))
                        }
                      </MenuItem>
                    </div>
                  </MenuItems>
                </Menu>
              </div>
            </div>

            <div className="mb-8 mt-12">
              <label htmlFor="subject" className="block mb-2 text-normal font-medium text-gray-900">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="bg-gray-50 border border-blue-500 text-gray-900 text-normal rounded-lg focus:ring-blue-500 focus:border-blue-700 block w-full p-2.5"
                required
                placeholder="example@abc.com"
                value={course.subject}
                onChange={(e) => onChangeSubject(e)}
              />

            </div>

            <div className="mb-8 mt-8 grid grid-cols-3 gap-x-8">
              <div>
                <label htmlFor="duration" className="block mb-2 text-normal font-medium text-gray-900">
                  Duration
                </label>
                <input
                  type="text"
                  id="duration"
                  className="bg-gray-50 border border-blue-500 text-gray-900 text-normal rounded-lg focus:ring-blue-700 focus:border-blue-700
                    block w-full p-2.5"
                  required
                  placeholder="10 weeks"
                  value={course.duration}
                  onChange={(e) => onChangeDuration(e)}
                />
              </div>
              <div>
                <label htmlFor="start-date" className="block mb-2 text-normal font-medium text-gray-900">
                  Start date
                </label>
                <input
                  type="date"
                  id="start-date"
                  className="bg-gray-50 border border-blue-500 text-gray-900 text-normal rounded-lg focus:ring-blue-700 focus:border-blue-700
                    block w-full p-2.5"
                  required
                  placeholder="2025-01-01"
                  value={course.startDate.toISOString().split('T')[0]}
                  onChange={(e) => onChangeStartDate(e)}
                />
              </div>

              <div>
                <label htmlFor="end-date" className="block mb-2 text-normal font-medium text-gray-900">
                  End date
                </label>
                <input
                  type="date"
                  id="end-date"
                  className="bg-gray-50 border border-blue-500 text-gray-900 text-normal rounded-lg focus:ring-blue-700 focus:border-blue-700
                    block w-full p-2.5"
                  required
                  placeholder="2025-01-01"
                  value={course.endDate.toISOString().split('T')[0]}
                  onChange={(e) => onChangeEndDate(e)}
                />
              </div>
            </div>


            <div className="mb-12">
              <label htmlFor="description" className="block mb-2 text-normal font-medium text-gray-900">
                Description
              </label>
              <textarea
                id="description"
                rows={10}
                className="bg-gray-50 border border-blue-500 text-gray-900 text-normal rounded-lg focus:ring-blue-700 focus:border-blue-700 block w-full p-2.5"
                placeholder={COURSE_DESCRIPTION}
                value={course.description}
                onChange={(e) => onChangeCourseDescription(e)}
              />
            </div>

            <div className="grid grid-cols-4">

              <div>
                <button
                  type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800
              focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-8 py-3 text-center"
                >
                  Submit
                </button>
              </div>

              <div>
                <button
                  type="reset"
                  className="text-gray-800 bg-slate-300 hover:bg-slate-400
              focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-8 py-3 text-center"
                >
                  Reset
                </button>
              </div>

            </div>

            <Link
              href="/my-classes"
              className="absolute font-normal text-normal text-blue-600
          hover:text-blue-700 active:text-blue-800 hover:underline hover:underline-offset-4
          active:underline active:underline-offset-2 top-4 left-8 flex justify-center items-center"
            >
              &larr; Back
            </Link>
          </form>
        )
      }
    </section>
  );
}
