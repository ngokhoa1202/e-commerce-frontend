'use client';

import AuthApi from '@/api/auth';
import { useRouter } from 'next/navigation';
import { FormEvent, useState, SyntheticEvent, Dispatch, SetStateAction } from 'react';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { ROLES, UserRole } from '@/constants';

export default function RegistrationPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [userRole, setUserRole]: [UserRole | null, Dispatch<SetStateAction<UserRole | null>>] = useState<UserRole | null>(null);

  const router = useRouter();

  async function register(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await AuthApi.register({ username, email, password, role: userRole });
    router.replace('/login');
  }

  const changeUserRole = (e: SyntheticEvent<HTMLButtonElement>) => {
    if (ROLES.includes(e.currentTarget.value)) {
      setUserRole(e.currentTarget.value as UserRole);
    }
  };

  return (
    <section className="mx-auto mt-20 bg-[url('/registration/background/classroom.webp')] py-8">

      <form className="max-w-xl mx-auto px-16 py-10 border border-blue-400 rounded-2xl shadow-md shadow-blue-600 bg-blue-50 relative" onSubmit={register}>
        <h1 className="text-3xl text-blue-800 text-center">Register</h1>

        <div className="mb-8 mt-12 grid grid-cols-2 gap-x-8">
          <div>
            <label htmlFor="username" className="block mb-2 text-normal font-medium text-gray-900">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="bg-gray-50 border border-blue-500 text-gray-900 text-normal rounded-lg focus:ring-blue-500 focus:border-blue-700 block w-full p-2.5"
              required
              placeholder="example"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="role" className="block mb-2 text-normal font-medium text-gray-900">
              Your role
            </label>

            <Menu as="div" className="relative inline-block text-left w-full">
              <div>
                <MenuButton
                  className="inline-flex w-full border justify-center items-center rounded-md p-2.5 bg-gray-50
                  border-blue-500 text-normal text-gray-900
                  ring-blue-300 hover:bg-blue-50 active:text-gray-50 active:bg-blue-500"
                >
                  {
                    (userRole === null) ? (
                      <div className="flex flex-row">
                        Choose a role &nbsp;
                        <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400" />
                      </div>
                    ) : (
                      <div className="flex flex-row">
                        {userRole}
                        &nbsp;
                        <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400" />
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
                      ROLES.map((role, _) => (
                        <button
                          type="button"
                          className="block w-full px-4 py-2 text-normal hover:bg-blue-500 hover:text-gray-100"
                          value={role}
                          key={`Button ${role}`}
                          onClick={(e) => changeUserRole(e)}
                        >
                          {role}
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
          <label htmlFor="email" className="block mb-2 text-normal font-medium text-gray-900">
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-blue-500 text-gray-900 text-normal rounded-lg focus:ring-blue-500 focus:border-blue-700 block w-full p-2.5"
            required
            placeholder="example@abc.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

        </div>
        <div className="mb-8">
          <label htmlFor="password" className="block mb-2 text-normal font-medium text-gray-900">
            Your password
          </label>
          <input
            type="password"
            id="password"
            className="bg-gray-50 border border-blue-500 text-gray-900 text-normal rounded-lg focus:ring-blue-700 focus:border-blue-700 block w-full p-2.5"
            required
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="mb-12">
          <label htmlFor="confirmPassword" className="block mb-2 text-normal font-medium text-gray-900">
            Confirm your password
          </label>
          <input
            type="password"
            id="confirmPassword"
            className="bg-gray-50 border border-blue-500 text-gray-900 text-normal rounded-lg focus:ring-blue-700 focus:border-blue-700 block w-full p-2.5"
            required
            placeholder="********"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-3">

          <div>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800
              focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-8 py-3 text-center"
            >
              Register
            </button>
          </div>

          <div>
            <button
              type="submit"
              className="text-gray-800 bg-slate-300 hover:bg-slate-400
              focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-8 py-3 text-center"
            >
              Reset
            </button>
          </div>

        </div>

        <a
          href="/login"
          className="absolute font-normal text-normal text-blue-600
          hover:text-blue-700 active:text-blue-800 hover:underline hover:underline-offset-4
          active:underline active:underline-offset-2 top-4 left-8 flex justify-center items-center"
        >
          &larr; Back to login
        </a>
      </form>
    </section>
  );
}
