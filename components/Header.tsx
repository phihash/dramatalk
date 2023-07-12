import React from "react";
import { useState } from "react";
import Link from 'next/link'

const Header = () => {

  const [isMenuOpen,setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevIsMenuOpen => !prevIsMenuOpen);
};

  return (
<header className="flex justify-between md:px-8 p-6  text-white">
  <div className="flex items-center">
    <a href="/" className="text-xl md:text-2xl font-bold text-sky-500 font-mono">Drama talk</a>
  </div>

  <div className="flex items-center ml-4 md:ml-16 md:space-x-4  mr-auto">
    <a href="/create" className="text-gray-900 px-3 py-2 rounded font-bold text-xs md:text-base hover:border-b-2">Create</a>
    <a href="/search" className="text-gray-900 px-3 py-2 rounded font-bold text-xs md:text-base hover:border-b-2">Search</a>
  </div>

  <div className="flex items-center md:space-x-4 space-x-2">
    <a href="/login" className="md:px-4 md:py-3 px-3 py-2 rounded  text-sm md:text-base bg-sky-500 font-bold hover:bg-sky-400">Login</a>
    <a href="/signup" className="md:px-4 md:py-3 px-3 py-2 rounded  text-sm md:text-base bg-blue-500 font-bold hover:bg-blue-400">Sign Up</a>
  </div>
</header>

  )
};

export default Header;
