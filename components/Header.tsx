"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  return (
    <header className="flex items-center justify-between px-10 py-6 bg-white shadow-md">
      <Link href="/" legacyBehavior>
        <a className="text-2xl font-bold">Drama talk</a>
      </Link>

      <nav className="hidden md:block">
        <ul className="flex items-center space-x-4">
          <li>
            <Link href="/create" legacyBehavior>
              <a className={`text-gray-600`}>Create</a>
            </Link>
          </li>
          <li>
            <Link href="/search" legacyBehavior>
              <a className={`text-gray-600`}>Search</a>
            </Link>
          </li>
          <li>
            <Link href="/login" legacyBehavior>
              <a className={`text-gray-600`}>Log in</a>
            </Link>
          </li>
          <li className="bg-blue-600 p-3 rounded">
            <Link href="/signup" legacyBehavior>
              <a className={`text-white`}>Sign up</a>
            </Link>
          </li>
        </ul>
      </nav>

      <div className="md:hidden">
        <button onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <>

        <nav className="md:hidden fixed inset-0 flex items-center justify-center bg-white z-10">

          <ul className="space-y-6">
            <li>
              <Link href="/create" legacyBehavior>
                <button className="block rounded-lg bg-sky-500 px-16 py-3 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 hover:bg-sky-400 focus-visible:ring active:bg-gray-600 md:text-base">
                  Create
                </button>
              </Link>
            </li>
            <li>
              <Link href="/search" legacyBehavior>
              <button className="block rounded-lg bg-sky-500 px-16 py-3 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 hover:bg-sky-400 focus-visible:ring active:bg-gray-600 md:text-base">

                  Search
                </button>
              </Link>
            </li>
            <li>
              <Link href="/login" legacyBehavior>
              <button className="block rounded-lg bg-sky-500 px-16 py-3 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 hover:bg-sky-400 focus-visible:ring active:bg-gray-600 md:text-base">

                  Log in
                </button>
              </Link>
            </li>
            <li>
              <Link href="/signup" legacyBehavior>
              <button className="block rounded-lg bg-sky-500 px-16 py-3 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 hover:bg-sky-400 focus-visible:ring active:bg-gray-600 md:text-base">


                  Sign Up
                </button>
              </Link>
            </li>
            <li>
              <button onClick={toggleMenu} className="block rounded-lg bg-blue-800 px-16 py-3 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 hover:bg-blue-600 focus-visible:ring active:bg-gray-600 md:text-base">
                  Close
                </button>
            </li>
          </ul>
        </nav>
        </>

      )}
    </header>
  );
};

export default Header;
