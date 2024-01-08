import Link from "next/link";
import React from "react";
import ActiveLink from "./ActiveLink";

const activeClass = "text-slate-700 text-sm font-normal";
const idleClass = "text-slate-400 text-sm font-normal hover:text-slate-700";

const Footer = () => {
  return (
    <div className="bg-[#E7ECFF] w-full md:px-36 px-8 py-8">
      <div className="flex justify-between items-center">
        <div className=" text-gray-400 text-sm font-medium font-['Roboto'] leading-normal max-md:hidden">
          ©2023 Yourcompany
        </div>
        <div className="Landie text-indigo-900 text-[26px] font-black font-['Roboto'] leading-[38px]">
          Home
        </div>
        <Link
          href={"/contact"}
          className="bg-[#111B47] hover:bg-white hover:text-[#111B47] border-[1px] border-[#111B47] md:px-8 px-4 py-2 text-white text-sm"
        >
          Contact Us
        </Link>
      </div>
      <div className="pt-10">
        <div className="border-t-2 border-[#CDD1D4] pt-2 flex justify-between">
          <div className="flex gap-8 max-md:gap-6">
            <ActiveLink
              href="/"
              activeClass={activeClass}
              idleClass={idleClass}
            >
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
          <div className="flex gap-5 justify-center items-center max-md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23"
              viewBox="0 0 23 23"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.55566 4.75C3.55566 5.7165 2.77216 6.5 1.80566 6.5C0.839166 6.5 0.0556641 5.7165 0.0556641 4.75C0.0556641 3.7835 0.839166 3 1.80566 3C2.77216 3 3.55566 3.7835 3.55566 4.75ZM0.0556641 8H3.63366V19H0.0556641V8ZM13.3555 8.12119C13.351 8.11973 13.3466 8.11825 13.3421 8.11678C13.3172 8.10856 13.2923 8.10033 13.2657 8.093C13.2177 8.082 13.1697 8.073 13.1207 8.065C12.9307 8.027 12.7227 8 12.4787 8C10.3927 8 9.06966 9.517 8.63366 10.103V8H5.05566V19H8.63366V13C8.63366 13 11.3377 9.234 12.4787 12V19H16.0557V11.577C16.0557 9.915 14.9167 8.53 13.3797 8.129C13.3715 8.12643 13.3635 8.12382 13.3555 8.12119Z"
                fill="#B0B8BC"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5 0H11C13.761 0 16 2.239 16 5V11C16 13.761 13.761 16 11 16H5C2.239 16 0 13.761 0 11V5C0 2.239 2.239 0 5 0ZM11 14.5C12.93 14.5 14.5 12.93 14.5 11V5C14.5 3.07 12.93 1.5 11 1.5H5C3.07 1.5 1.5 3.07 1.5 5V11C1.5 12.93 3.07 14.5 5 14.5H11ZM4 8C4 5.791 5.791 4 8 4C10.209 4 12 5.791 12 8C12 10.209 10.209 12 8 12C5.791 12 4 10.209 4 8ZM5.5 8C5.5 9.378 6.622 10.5 8 10.5C9.378 10.5 10.5 9.378 10.5 8C10.5 6.621 9.378 5.5 8 5.5C6.622 5.5 5.5 6.621 5.5 8ZM12.833 3.7C12.833 3.99437 12.5944 4.233 12.3 4.233C12.0057 4.233 11.767 3.99437 11.767 3.7C11.767 3.40564 12.0057 3.167 12.3 3.167C12.5944 3.167 12.833 3.40564 12.833 3.7Z"
                fill="#B0B8BC"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="16"
              viewBox="0 0 23 16"
              fill="none"
            >
              <path
                d="M12.5001 5.5V3.5C12.5001 2.948 13.1223 2.5 13.889 2.5H15.2779V0H12.5001C10.1987 0 8.33344 1.343 8.33344 3V5.5H5.55566V8H8.33344V16H12.5001V8H15.2779L16.6668 5.5H12.5001Z"
                fill="#B0B8BC"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
