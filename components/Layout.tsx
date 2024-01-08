import { NextPage } from "next";
import React, { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

type LayoutProps = {
  children: ReactNode;
};

const Layout: NextPage<LayoutProps> = ({ children }) => {
  return (
    <div className="relative w-full">
      <Navbar />
      <main className="w-full md:px-12 min-h-screen">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
