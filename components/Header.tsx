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
        <a className="text-2xl font-bold font-mono">Drama talk</a>
      </Link>

      <nav className="hidden md:block">
        <ul className="flex items-center space-x-12">
          <li>
            <Link href="/create/thread" legacyBehavior>
              <a className={`text-gray-800 font-bold border-slate-500 hover:border-b-4`}>新規作成</a>
            </Link>
          </li>
          <li>
            <Link href="/search" legacyBehavior>
              <a className={`text-gray-800 font-bold border-slate-500 hover:border-b-4`}>探す</a>
            </Link>
          </li>
          <li className="bg-blue-600 px-4 py-3 rounded font-bold hover:bg-blue-500">
            <Link href="/login" legacyBehavior>
              <a className={`text-white`}>Log in</a>
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
          <ul className="space-y-12 w-1/2">
            <li>
              <Link href="/create/thread" legacyBehavior>
                <button className="block rounded-lg bg-sky-500 w-full px-16 py-4 text-center text-sm font-bold text-white  text-lg outline-none ring-gray-300 transition duration-100 hover:bg-sky-400 focus-visible:ring active:bg-gray-600 ">
                  Create
                </button>
              </Link>
            </li>
            <li>
              <Link href="/search" legacyBehavior>
              <button className="block rounded-lg bg-sky-500 w-full px-16 py-4 text-center text-sm font-bold text-white  text-lg outline-none ring-gray-300 transition duration-100 hover:bg-sky-400 focus-visible:ring active:bg-gray-600 ">


                  Search
                </button>
              </Link>
            </li>
            <li>
              <Link href="/login" legacyBehavior>
              <button className="block rounded-lg bg-blue-600 w-full px-16 py-4 text-center text-sm font-bold text-white  text-lg outline-none ring-gray-300 transition duration-100 hover:bg-blue-500 focus-visible:ring active:bg-gray-600 ">


                  Log in
                </button>
              </Link>
            </li>
            <li>
            <button onClick={toggleMenu} className="block rounded-lg bg-gray-500 w-full px-16 py-4 text-center text-sm font-bold text-white  text-lg outline-none ring-gray-300 transition duration-100 hover:bg-gray-400 focus-visible:ring active:bg-gray-600 ">
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
