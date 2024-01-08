import Layout from "@/components/Layout";
import React from "react";

const Contact = () => {
  return (
    <Layout>
      <div className="absolute top-0 right-0 left-0 bottom-0 z-[-2] overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1698"
          height="1309"
          viewBox="0 0 1698 1309"
          fill="none"
        >
          <path
            opacity="0.5"
            d="M539.036 112.456C335.95 242.849 304.479 489.414 166.936 671.314C119.057 734.609 57.1895 791.255 24.911 861.472C-49.1951 1022.19 52.796 1204.5 189.307 1332.16C254.402 1393.05 330.436 1448.84 422.43 1474.51C493.173 1494.25 569.028 1495.07 643.492 1495.58L1948.08 1505.87C2093.74 1507 2255.58 1502.92 2360.31 1416.77C2432.48 1357.45 2461.8 1270.81 2486.68 1188.12C2517.26 1086.52 2544.97 976.17 2497.4 879.395C2443.06 768.672 2305.66 705.926 2220.3 610.384C2081.77 455.591 2084.95 221.466 1908.54 97.8918C1826.19 40.2172 1717.51 17.5997 1611.62 6.29093C1411.99 -15.0586 1222.89 25.2416 1026.84 19.6215C859.265 14.8239 678.057 23.1855 539.036 112.456Z"
            fill="#E7ECFF"
          />
        </svg>
      </div>
      <div className="grid md:w-[50%] h-screen mx-auto justify-center text-center">
        <h1 className="text-slate-900 text-3xl max-sm:text-xl font-medium font-['Roboto'] tracking-wide">
          Contact us
        </h1>
        <p className="text-slate-500 text-xl max-md:text-lg max-sm:text-base font-normal font-['Roboto']">
          {" "}
          Elevate your brand with visually stunning and compelling content. From
          eye-catching graphics to engaging copy, we know how to make your brand
          stand out in a crowded digital landscape.
        </p>
        <p className=" text-slate-500 text-2xl max-md:text-xl max-sm:text-base font-medium font-['Roboto']">
          📧 Email: nexgendigitalmarketiing@gmail.com <br /> 📞 Phone:+383
          48242042{" "}
        </p>
      </div>
    </Layout>
  );
};

export default Contact;
