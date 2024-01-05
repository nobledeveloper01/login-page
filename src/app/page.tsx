/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "../../public/logo-header.png";
import MailIcon from "@mui/icons-material/Mail";
import LockIcon from "@mui/icons-material/Lock";

export default function Home() {
  const DATA_SOURCE_URL: string = process.env.DATA_SOURCE_URL as string;
  const API_KEY: string = process.env.DATA_API_KEY as string;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) console.log("Missing required data");

    try {
      const res = await fetch(DATA_SOURCE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "API-Key": API_KEY,
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main>
      <header className="w-full bg-white h-16 items-center shadow-md shadow-gray-500 mb-2">
        <div className="mx-4 md:mx-10 flex justify-between items-center">
          <div className="mt-2">
            <Image src={Logo} alt="Search" width={200} height={200} />
          </div>
          <div className="hidden md:block">
            <h1 className="text-black text-base md:text-xl">
              Don't have an account yet?
              <a href="/" className="text-blue-800">
                Sign up now!
              </a>
            </h1>
          </div>
          <div className="block md:hidden">
            <h1 className="text-black text-base">
              <a href="/" className="text-blue-800">
                Sign up now!
              </a>
            </h1>
          </div>
        </div>
      </header>
      <section className="flex justify-center mx-4 sm:mx-20 mt-8  border border-md border-blue-900 rounded-2xl shadow-2xl shadow-blue-900 mb-16">
        <div className="w-full sm:w-full rounded-2xl ">
          <div className="flex flex-col sm:flex-row rounded-2xl">
            <div className="relative w-full h-cover sm:w-1/2 rounded-2xl">
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src="/login-in-banner.png"
                  alt="Image"
                  width={1000} // Adjust these values accordingly
                  height={600}
                  className="rounded-tl-2xl rounded-bl-2xl "
                />

                <h1 className="absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl font-bold text-center ">
                  Cloud Applications for the Masses
                </h1>
              </div>
            </div>
            <div className="p-4 sm:px-24 w-full sm:w-1/2 flex flex-col justify-center bg-white rounded-2xl">
              <div className="flex justify-center items-center mb-4">
                <Image
                  src="/login-logo.png"
                  alt="Image"
                  width={100}
                  height={100}
                />
              </div>
              <p className="text-2xl text-center mt-4 text-black font-black">
                Log In to Cloud Clusters
              </p>
              <form className="mt-6" onSubmit={submitHandler}>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pr-6 mt-2 pointer-events-none">
                    <MailIcon className="text-blue-900 text-3xl" />
                  </div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full pl-16 px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:shadow-md focus:shadow-blue-900 focus:border-blue-500 focus:bg-white focus:outline-none text-black"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoFocus
                    required
                  />
                </div>

                <div className="relative mt-8">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pr-6 mt-2 pointer-events-none">
                    <LockIcon className="text-blue-900 text-3xl" />
                  </div>
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full pl-16 px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:shadow-md focus:shadow-blue-900 focus:bg-white focus:outline-none text-black"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <div className="text-right mt-2">
                  <Link
                    href="#"
                    className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700"
                  >
                    Forgot Password?
                  </Link>
                </div>

                <button
                  type="submit"
                  className="w-full block bg-blue-900 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg
                px-4 py-3 mt-6"
                >
                  Log In
                </button>
              </form>

              <div className="mt-7 grid grid-cols-3 gap-2 items-center text-gray-500">
                <hr className="border-gray-500" />
                <p className="text-center text-sm">or log in with </p>
                <hr className="border-gray-500" />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <button
                  type="button"
                  className="bg-white border border-blue-900 py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    className="w-6 h-6"
                    viewBox="0 0 48 48"
                  >
                    <defs>
                      <path
                        id="a"
                        d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
                      />
                    </defs>
                    <clipPath id="b">
                      <use xlinkHref="#a" overflow="visible" />
                    </clipPath>
                    <path
                      clipPath="url(#b)"
                      fill="#FBBC05"
                      d="M0 37V11l17 13z"
                    />
                    <path
                      clipPath="url(#b)"
                      fill="#EA4335"
                      d="M0 11l17 13 7-6.1L48 14V0H0z"
                    />
                    <path
                      clipPath="url(#b)"
                      fill="#34A853"
                      d="M0 37l30-23 7.9 1L48 0v48H0z"
                    />
                    <path
                      clipPath="url(#b)"
                      fill="#4285F4"
                      d="M48 48L17 24l-4-3 35-10z"
                    />
                  </svg>
                  <span className="ml-4 text-black hidden lg:inline">
                    Google
                  </span>
                </button>

                <button
                  type="button"
                  className="bg-white border py-2 w-full border-blue-900 rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 "
                  onClick={() => {
                    window.location.href =
                      "https://github.com/login/oauth/authorize?client_id=Iv1.6d6db037d6c883d9&redirect_url=http://localhost:4000/api/v1/auth/github/callback?path=/&scope=user:yassine.boujrada@gmail.com";
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-6 h-6"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                  <span className="ml-4 text-black hidden lg:inline ">
                    Github
                  </span>
                </button>

                <button
                  type="button"
                  className="bg-white border py-2 w-full border-blue-900 rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 "
                  onClick={() => {
                    window.location.href =
                      "https://github.com/login/oauth/authorize?client_id=Iv1.6d6db037d6c883d9&redirect_url=http://localhost:4000/api/v1/auth/github/callback?path=/&scope=user:yassine.boujrada@gmail.com";
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#3b5998"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                  >
                    <path d="M21 0H3a3 3 0 0 0-3 3v18a3 3 0 0 0 3 3h9.86v-8.74h-2.38V9.91h2.38V7.52c0-2.37 1.45-3.66 3.55-3.66 1.01 0 1.88.08 2.14.12v2.47h-1.47c-1.15 0-1.38.54-1.38 1.35v1.77h2.77l-.36 2.85h-2.41V24H21a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3z" />
                  </svg>
                  <span className="ml-4 text-black hidden lg:inline">
                    Facebook
                  </span>
                </button>
              </div>

              <div className="text-sm flex justify-center items-center mt-6 text-gray-400 mb-4">
                <p>
                  Dont have an account?
                  <Link href="/signup" className=" text-blue-500">
                    Sign up now!
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
