'use client';

import { useState, FormEvent } from 'react';
import { authStore } from '@/stores/auth';
import AuthApi from '@/api/auth';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();

  const { setAccessToken, setRefreshToken } = authStore.getState();

  async function login(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const { accessToken, refreshToken } = await AuthApi.login({ email, password });
    setAccessToken(accessToken);
    setRefreshToken(refreshToken);
    router.refresh();
    setTimeout(() => router.back(), 200);
  }
  return (
    <section className="mx-auto mt-20 bg-[url('https://wp-demco-s3-bucket.s3.amazonaws.com/ideas/2019/08/2750-Demco-Green-Bay-6-13-19.jpg')]
      py-24"
      
    >
      {/* <h2>{accessToken}</h2> */}

      <form className="max-w-xl mx-auto px-16 py-10 border border-blue-400 rounded-2xl shadow-md shadow-blue-600 bg-white" onSubmit={login}>
        <h1 className="text-3xl text-blue-800 text-center">Login</h1>
        <div className="mb-8 mt-12">
          <label htmlFor="email" className="block mb-2 text-normal font-medium text-gray-900">Your email</label>
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
          <label htmlFor="password" className="block mb-2 text-normal font-medium text-gray-900">Your password</label>
          <input
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-500 text-gray-900 text-normal rounded-lg focus:ring-blue-700
            focus:border-blue-700 block w-full p-2.5"
            required
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-3 gap-x-4">
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none
            focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Submit
          </button>

          <a className="text-blue-500 hover:text-blue-700 block self-center" href="/registration">
            or register here &rarr;
          </a>
        </div>
      </form>
    </section>
  );
}
