import React from "react";

const WebsiteDevelopment = () => {
  return (
    <div className="grid xl:grid-cols-3 grid-cols-2 max-md:grid-cols-1 justify-center gap-[50px] items-center w-[98%] mx-auto">
      {/* KARTA E PAR */}
      <div className="grid max-md:w-[15rem] w-[21rem] min-h-[1205px] gap-4 bg-[#D9D9D9] rounded-[40px]">
        <div className="row-span-1  text-white rounded-t-lg p-4 flex justify-center items-center">
          {/* TOP CONTENT */}
          <div className="bg-[#111B47] rounded-xl px-8 py-4 flex justify-center items-center w-[70%] text-white text-2xl font-bold">
            Standard
          </div>
        </div>

        <div className="row-span-8 grid justify-around max-md:gap-5 items-center rounded-lg p-4 text-[#091133] font-normal gap-1">
          {/* MIDDLE CONTENT */}
          <p>Includes:</p>
          <div className="pl-2">
            <li>1-year domain registration</li>
            <li>Basic hosting</li>
          </div>
          <p>Design and Development:</p>
          <div className="pl-2">
            <li>Responsive design for all devices</li>
            <li>Basic hosting</li>
          </div>
          <p>Content and Features:</p>
          <div className="pl-2">
            <li>Integration of client-provided text and images</li>
            <li>Contact form, social media integration, basic SEO</li>
          </div>
          <p>Testing and Deployment:</p>
          <div className="pl-2">
            <li>Cross-browser testing</li>
            <li>Deployment to chosen hosting platform</li>
          </div>
          <p>Support:</p>
          <div className="pl-2">
            <li>1 month post-launch support for bug fixes.</li>
          </div>
        </div>

        <div className="row-span-2 rounded-b-lg p-4 flex justify-center">
          {/* Footer content */}
          <h1 className="font-bold text-4xl text-[#111B47]">500€</h1>
        </div>
      </div>

      {/* Karta e DYTE */}
      <div className="grid max-md:w-[15rem] w-[21rem] min-h-[1205px] gap-4 bg-[#37447E] rounded-[40px]">
        <div className="row-span-1  text-white rounded-t-lg p-4 flex justify-center items-center">
          {/* TOP CONTENT */}
          <div className="bg-[#111B47] rounded-xl px-8 py-4 flex justify-center items-center w-[70%] text-white text-2xl font-bold">
            Advanced
          </div>
        </div>

        <div className="row-span-8 grid justify-around max-md:gap-5 items-center rounded-lg p-4 text-white font-normal gap-1">
          {/* MIDDLE CONTENT */}
          <p>Includes:</p>
          <div className="pl-2">
            <li>1-year domain registration</li>
            <li>Standard hosting plan (20 GB storage, 200 GB bandwidth)</li>
          </div>
          <p>Design and Development:</p>
          <div className="pl-2">
            <li>Responsive design for optimal viewing</li>
            <li>Database setup and integration</li>
            <li>
              Up to 8 dynamic web pages, including Home, About Us, Services,
              Blog, Contact, and three additional dynamic pages
            </li>
          </div>
          <p> Content Management:</p>
          <div className="pl-2">
            <li>User-friendly CMS integration </li>
            <li>Training on basic content management tasks User Engagement:</li>
            <li>
              Basic user authentication system (login, registration, password
              recovery)
            </li>
          </div>
          <p>Features:</p>
          <div className="pl-2">
            <li>Contact form with data storage</li>
            <li>Seamless social media integration Basic SEO setup</li>
          </div>
          <p> Testing and Deployment:</p>
          <div className="pl-2">
            <li>Cross-browser testing</li>
            <li>Deployment to chosen hosting platform</li>
          </div>
          <p>Support:</p>
          <div className="pl-2">
            <li>1 month post-launch support for bug fixes and adjustments.</li>
          </div>
        </div>

        <div className="row-span-2 rounded-b-lg p-4 flex justify-center">
          {/* Footer content */}
          <h1 className="font-bold text-4xl text-white">1500€</h1>
        </div>
      </div>

      {/* Karta e TRET */}
      <div className="grid max-md:w-[15rem] w-[21rem] max-md:h-auto min-h-[1000px] gap-4 bg-[#091133] rounded-[40px]">
        <div className="row-span-1  text-white rounded-t-lg p-4 flex justify-center items-center">
          <div className="bg-[#F7C800] rounded-xl px-8 py-4 flex justify-center items-center w-[70%] text-white text-2xl font-bold">
            Premium
          </div>
        </div>

        <div className="row-span-8 grid justify-around max-md:gap-5 items-center text-white rounded-lg p-4 gap-1">
          {/* MIDDLE CONTENT */}
          <p>Includes:</p>
          <div className="pl-2">
            <li>Domain registration for two years</li>
            <li>
              Advanced hosting plan (50 GB storage, 500 GB bandwidth, SSL
              certificate)
            </li>
          </div>
          <p>Design and Development:</p>
          <div className="pl-2">
            <li>Custom, brand-tailored design</li>
            <li>Up to 10 static pages with advanced layout</li>
            <li>Integration of advanced UI/UX elements</li>
          </div>
          <p> Content and Images:</p>
          <div className="pl-2">
            <li>Professional content writing/editing (up to 10 pages)</li>
            <li>Image optimization with high-quality stock photos</li>
          </div>
          <p>Advanced Features:</p>
          <div className="pl-2">
            <li>Interactive elements (sliders, galleries, animations)</li>
            <li>Advanced contact form with extra fields</li>
            <li>Google Maps integration</li>
          </div>
          <p>SEO and Analytics:</p>
          <div className="pl-2">
            <li>Comprehensive SEO optimization</li>
            <li>Google Analytics integration for detailed statistics</li>
          </div>
          <p>Testing and Deployment:</p>
          <div className="pl-2">
            <li>Rigorous testing, including performance testing</li>
            <li>Deployment with advanced security configurations</li>
          </div>
          <p>Training and Documentation:</p>
          <div className="pl-2">
            <li>Training on basic website management</li>
            <li>Documentation for future reference</li>
          </div>
          <p>Support:</p>
          <div className="pl-2">
            <li>
              3 months post-launch support for bug fixes, updates, and
              adjustments.
            </li>
          </div>
        </div>

        <div className="row-span-2 rounded-b-lg p-4 flex justify-center">
          {/* Footer content */}
          <h1 className="font-bold text-4xl text-[#F7C800]">2500€</h1>
        </div>
      </div>
    </div>
  );
};

export default WebsiteDevelopment;
