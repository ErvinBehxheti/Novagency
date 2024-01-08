"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {
  href: string;
  children: React.ReactNode;
  activeClass: string;
  idleClass: string;
};

const ActiveLink = ({
  href,
  children,
  activeClass,
  idleClass,
  ...rest
}: Props) => {
  const currentRoute = usePathname();
  const isActive = currentRoute === href;

  return (
    <Link
      href={href}
      {...rest}
      className={`${
        isActive ? activeClass : idleClass
      } flex justify-center items-center font-normal font-['Roboto'] leading-normal`}
    >
      {children}
    </Link>
  );
};

export default ActiveLink;
