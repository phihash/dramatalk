"use client";
import { useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import { FaBars } from "react-icons/fa";

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
          <NavLink
            href="/create/thread"
            listItemName="新規作成"
            className="text-gray-800 font-bold border-slate-500 hover:border-b-4"
          />
          <NavLink
            href="/search"
            listItemName="探す"
            className="text-gray-800 font-bold border-slate-500 hover:border-b-4"
          />
          <NavLink
            href="/login"
            listItemName="ログイン"
            className="text-white bg-blue-600 px-4 py-3 rounded font-bold hover:bg-blue-500"
          />
        </ul>
      </nav>

      <div className="md:hidden">
        <button onClick={toggleMenu}>
          <FaBars />
        </button>
      </div>

      {isOpen && (
        <>
          <nav className="md:hidden fixed inset-0 flex items-center justify-center bg-white z-10">
            <ul className="space-y-12 w-1/2">
              <NavLink
                href="/create/thread"
                listItemName="新規作成"
                className="block rounded-lg bg-sky-500 w-full px-16 py-4 text-center text-sm font-bold text-white  text-lg outline-none ring-gray-300 transition duration-100 hover:bg-sky-400 focus-visible:ring"
              />
              <NavLink
                href="/search"
                listItemName="探す"
                className="block rounded-lg bg-sky-500 w-full px-16 py-4 text-center text-sm font-bold text-white  text-lg outline-none ring-gray-300 transition duration-100 hover:bg-sky-400 focus-visible:ring"
              />
              <NavLink
                href="/login"
                listItemName="ログイン"
                className="block rounded-lg bg-blue-600 w-full px-16 py-4 text-center text-sm font-bold text-white  text-lg outline-none ring-gray-300 transition duration-100 hover:bg-blue-500 focus-visible:ring"
              />
              <li>
                <button
                  onClick={toggleMenu}
                  className="block rounded-lg bg-gray-500 w-full px-16 py-4 text-center text-sm font-bold text-white  text-lg outline-none ring-gray-300 transition duration-100 hover:bg-gray-400 focus-visible:ring active:bg-gray-600 "
                >
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
