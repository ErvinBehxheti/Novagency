"use client";
import React, { useState } from "react";
import ActiveLink from "./ActiveLink";
import Image from "next/image";

const activeClass = "bg-[#111B47] rounded py-1 px-2 text-white";
const idleClass = "text-[#37447E] hover:text-black";

const dropdownActive = "bg-[#111B47] rounded py-3 px-2 text-white";
const dropdownIdle = "text-[#37447E] py-3 hover:bg-[#111B47] hover:text-white";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <nav className="relative flex justify-around items-center w-full p-8">
      <button
        className="absolute top-5 right-5 md:hidden border-2 border-[#111B47] rounded-lg p-2 flex justify-center items-center"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        <Image
          src={"/hamburger.svg"}
          width={25}
          height={25}
          alt="navbar"
          className="hover:scale-125"
        />
      </button>
      <div
        className={`${
          showDropdown ? "" : "hidden"
        } grid absolute top-0 right-0 left-0 bg-white`}
      >
        <button
          className="absolute flex top-5 right-5 justify-center items-center text-white transition-all"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <Image
            src={"/remove.svg"}
            height={20}
            width={20}
            alt="remove"
            className="hover:scale-110"
          />
        </button>
        <ActiveLink
          href="/"
          activeClass={dropdownActive}
          idleClass={dropdownIdle}
        >
          Home
        </ActiveLink>
        <ActiveLink
          href="/about"
          activeClass={dropdownActive}
          idleClass={dropdownIdle}
        >
          About
        </ActiveLink>
        <ActiveLink
          href="/contact"
          activeClass={dropdownActive}
          idleClass={dropdownIdle}
        >
          Contact
        </ActiveLink>
        <ActiveLink
          href="/prices"
          activeClass={dropdownActive}
          idleClass={dropdownIdle}
        >
          Prices
        </ActiveLink>
      </div>
      <div className="flex md:justify-around w-[33%] gap-10 max-md:hidden">
        <ActiveLink href="/" activeClass={activeClass} idleClass={idleClass}>
          Home
        </ActiveLink>
        <ActiveLink
          href="/about"
          activeClass={activeClass}
          idleClass={idleClass}
        >
          About
        </ActiveLink>
        <ActiveLink
          href="/contact"
          activeClass={activeClass}
          idleClass={idleClass}
        >
          Contact
        </ActiveLink>
        <ActiveLink
          href="/prices"
          activeClass={activeClass}
          idleClass={idleClass}
        >
          Prices
        </ActiveLink>
      </div>
    </nav>
  );
};

export default Navbar;
