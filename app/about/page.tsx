import Layout from "@/components/Layout";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <Layout>
      <div className="absolute top-0 right-0 left-0 bottom-0 z-[-2] overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1698"
          height="1711"
          viewBox="0 0 1150 2000"
          fill="none"
        >
          <path
            opacity="0.5"
            d="M539.036 147.224C335.95 317.637 304.479 639.875 166.936 877.601C119.057 960.322 57.1895 1034.35 24.911 1126.12C-49.1951 1336.17 52.796 1574.43 189.307 1741.26C254.402 1820.85 330.436 1893.76 422.43 1927.31C493.173 1953.1 569.028 1954.18 643.492 1954.85L1948.08 1968.29C2093.74 1969.76 2255.58 1964.43 2360.31 1851.84C2432.48 1774.32 2461.8 1661.1 2486.68 1553.03C2517.26 1420.23 2544.97 1276.02 2497.4 1149.54C2443.06 1004.84 2305.66 922.836 2220.3 797.971C2081.77 595.671 2084.95 289.69 1908.54 128.19C1826.19 52.8143 1717.51 23.2553 1611.62 8.47574C1411.99 -19.4262 1222.89 33.2426 1026.84 25.8977C859.265 19.6276 678.057 30.5555 539.036 147.224Z"
            fill="#E7ECFF"
          />
        </svg>
      </div>
      <div className="grid w-[50%] h-screen mx-auto justify-center">
        <div className="flex h-full z-10 justify-center items-center text-slate-500 text-base font-normal font-['Roboto'] leading-relaxed">
          Welcome to NexGen , where innovation meets impact! We are a dynamic
          marketing agency committed to elevating your brand presence and
          driving tangible results. Let&apos;s embark on a journey to transform
          your business and make your mark in the digital landscape.
        </div>
        <div className="mx-auto">
          <Image
            src={"/about.svg"}
            width={500}
            height={500}
            alt="about_us"
            style={{ objectFit: "cover" }}
            loading="lazy"
          />
        </div>
      </div>
    </Layout>
  );
};

export default About;
