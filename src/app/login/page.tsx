"use client";
import { useState, FormEvent } from "react";
import { useAuthStore } from '@/stores/auth';
import AuthApi from "@/api/auth";
import { useRouter } from "next/navigation";

export default function LoginPage(): JSX.Element {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const { setAccessToken, setRefreshToken, accessToken } = useAuthStore(state => state);

  async function login(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const { accessToken, refreshToken } = await AuthApi.login({ email, password });
    setAccessToken(accessToken);
    setRefreshToken(refreshToken);
    router.back();
  }
  return (
    <section className="mx-auto mt-20">
      {/* <h2>{accessToken}</h2> */}
      
      <form className="max-w-xl mx-auto px-16 py-10 border border-blue-400 rounded-2xl shadow-md shadow-blue-600 bg-white" onSubmit={login}>
        <h1 className="text-3xl text-blue-800 text-center">Login</h1>
        <div className="mb-8 mt-12">
          <label htmlFor="email" className="block mb-2 text-normal font-medium text-gray-900 dark:text-white">Your email</label>
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
          <label htmlFor="password" className="block mb-2 text-normal font-medium text-gray-900 dark:text-white">Your password</label>
          <input
            type="password"
            id="password" 
            className="bg-gray-50 border border-gray-500 text-gray-900 text-normal rounded-lg focus:ring-blue-700 focus:border-blue-700 block w-full p-2.5"
            required
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex items-start mb-5">
          <div className="flex items-center h-5">
            <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"/>
          </div>

          <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900">
            Remember me
          </label>
        </div>

        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
          Submit
        </button>
      </form>
    </section>
  )
}
