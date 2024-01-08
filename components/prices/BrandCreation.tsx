import React from "react";

const SocialMedia = () => {
  return (
    <div className="grid xl:grid-cols-3 grid-cols-2 max-md:grid-cols-1 justify-around gap-[50px] items-center w-[98%] mx-auto">
      {/* KARTA E PAR */}
      <div className="grid w-[21rem] max-md:w-[15rem] max-md:h-auto h-[38rem] gap-4 bg-[#D0CDE1] rounded-[40px]">
        <div className="row-span-1  text-white rounded-t-lg p-4 flex justify-center items-center">
          {/* TOP CONTENT */}
          <div className="bg-[#111B47] rounded-xl px-8 py-4 flex justify-center items-center w-[70%] text-white text-2xl font-bold">
            Standard
          </div>
        </div>

        <div className="row-span-8 grid justify-around max-md:gap-5 items-center rounded-lg p-4">
          {/* MIDDLE CONTENT */}
          <div className="bg-white rounded-xl px-8 py-4 flex justify-center items-center w-[100%] text-[#505F98] text-lg font-normal">
            3 concepts included
          </div>
          <div className="bg-white rounded-xl px-8 py-4 flex justify-center items-center w-[100%] text-[#505F98] text-lg font-normal">
            Logo transparency
          </div>
          <div className="bg-white rounded-xl px-8 py-4 flex justify-center items-center w-[100%] text-[#505F98] text-lg font-normal">
            Vector file
          </div>
        </div>

        <div className="row-span-2 rounded-b-lg p-4 flex justify-center">
          {/* Footer content */}
          <h1 className="font-bold text-4xl text-[#111B47]">70€</h1>
          <p className="font-normal text-lg text-[#505F98]">/month</p>
        </div>
      </div>

      {/* Karta e DYTE */}
      <div className="grid w-[21rem] max-md:w-[15rem] max-md:h-auto h-[38rem] gap-4 bg-[#505F98] rounded-[40px]">
        <div className="row-span-1  text-white rounded-t-lg p-4 flex justify-center items-center">
          {/* TOP CONTENT */}
          <div className="bg-[#111B47] rounded-xl px-8 py-4 flex justify-center items-center w-[70%] text-white text-2xl font-bold">
            Advanced
          </div>
        </div>

        <div className="row-span-8 grid justify-around max-md:gap-5 items-center rounded-lg p-4">
          {/* MIDDLE CONTENT */}
          <div className="bg-white rounded-xl px-8 py-4 flex justify-center items-center w-[100%] text-[#505F98] text-lg font-normal">
            4 concepts included
          </div>
          <div className="bg-white rounded-xl px-8 py-4 flex justify-center items-center w-[100%] text-[#505F98] text-lg font-normal">
            Logo transparency
          </div>
          <div className="bg-white rounded-xl px-8 py-4 flex justify-center items-center w-[100%] text-[#505F98] text-lg font-normal">
            Vector file
          </div>
          <div className="bg-white rounded-xl px-8 py-4 flex justify-center items-center w-[100%] text-[#505F98] text-lg font-normal">
            Include 3D mockup
          </div>
        </div>
        <div className="row-span-2 rounded-b-lg p-4 flex justify-center">
          {/* Footer content */}
          <h1 className="font-bold text-4xl text-white">150€</h1>
          <p className="font-normal text-lg text-white">/month</p>
        </div>
      </div>

      {/* Karta e TRET */}
      <div className="grid w-[21rem] max-md:w-[15rem] max-md:h-auto h-[38rem] gap-4 bg-[#111B47] rounded-[40px]">
        <div className="row-span-1  text-white rounded-t-lg p-4 flex justify-center items-center">
          {/* TOP CONTENT */}
          <div className="bg-[#F7C800] rounded-xl px-8 py-4 flex justify-center items-center w-[70%] text-white text-2xl font-bold">
            Premium
          </div>
        </div>

        <div className="row-span-8 grid justify-around items-center max-md:gap-5 rounded-lg p-4">
          {/* MIDDLE CONTENT */}
          <div className="bg-[#505F98] rounded-xl px-6 py-4 flex justify-center items-center w-[100%] text-white text-lg font-normal">
            5 concepts included
          </div>
          <div className="bg-[#505F98] rounded-xl px-8 py-4 flex justify-center items-center w-[100%] text-white text-lg font-normal">
            Logo transparency
          </div>
          <div className="bg-[#505F98] rounded-xl px-8 py-4 flex justify-center items-center w-[100%] text-white text-lg font-normal">
            Vector file
          </div>
          <div className="bg-[#505F98] rounded-xl px-8 py-4 flex justify-center items-center w-[100%] text-white text-lg font-normal">
            Include 3D mockup
          </div>
          <div className="bg-[#505F98] rounded-xl px-8 py-4 flex justify-center items-center w-[100%] text-white text-lg font-normal">
            Social media kit
          </div>
        </div>
        <div className="row-span-2 rounded-b-lg p-4 flex justify-center">
          {/* Footer content */}
          <h1 className="font-bold text-4xl text-[#F7C800]">150€</h1>
          <p className="font-normal text-lg text-[#F7C800]">/month</p>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
