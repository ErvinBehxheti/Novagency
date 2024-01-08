import Layout from "@/components/Layout";
import ScrollButton from "@/components/ScrollButton";
import BrandCreation from "@/components/prices/BrandCreation";
import SocialMedia from "@/components/prices/SocialMedia";
import WebsiteDevelopment from "@/components/prices/WebsiteDevelopment";
import React from "react";

const Prices = () => {
  return (
    <Layout>
      <div className="pb-52">
        {/* Kto mutat ne fillim */}
        <div className="grid justify-center items-center md:w-1/2 mx-auto md:pt-24 md:gap-[50px]">
          <div>
            <h1 className="text-slate-900 text-4xl font-medium font-['Roboto'] leading-[48px]">
              <a href="#social-media">Social Media</a>
            </h1>
            <p className="text-[#6F7CB2] font-['Roboto'] text-base font-normal">
              Behind every successful campaign is a team of skilled
              professionals. Our marketing packages include access to a
              dedicated team of experts, from seasoned strategists to creative
              minds and analytical wizards. This ensures that your business
              benefits from a wealth of knowledge and experience.
            </p>
          </div>
          <div>
            <h1 className="text-slate-900 text-4xl font-medium font-['Roboto'] leading-[48px]">
              <a href="#brand-creation">Brand Creation</a>
            </h1>
            <p className="text-[#6F7CB2] font-['Roboto'] text-base font-normal">
              The business landscape is dynamic, and so is our approach. Our
              team stays ahead of the curve, embracing innovation and adapting
              to emerging trends. This forward-thinking mindset ensures that
              your brand remains relevant and resonates with contemporary
              audiences.
            </p>
          </div>
          <div>
            <h1 className="text-slate-900 text-4xl font-medium font-['Roboto'] leading-[48px]">
              <a href="#website-development">Website Development</a>
            </h1>
            <p className="text-[#6F7CB2] font-['Roboto'] text-base font-normal">
              Our packages include a comprehensive set of features, from
              responsive design to e-commerce integration, SEO optimization, and
              ongoing support. We believe in transparency, and there are no
              hidden costs - what you see is what you get. Our commitment is to
              deliver exceptional value without any surprises.
            </p>
          </div>
        </div>

        {/* Cmimet e social media */}
        <div className="grid justify-center items-center md:w-[98%] mx-auto md:pt-24 md:gap-[50px]">
          <h1
            className="text-slate-900 text-4xl font-medium font-['Roboto'] leading-[48px] text-center"
            id="social-media"
          >
            Social Media
          </h1>
          <SocialMedia />
          <h1
            className="text-slate-900 text-4xl font-medium font-['Roboto'] leading-[48px] text-center"
            id="brand-creation"
          >
            Brand Creation
          </h1>
          <BrandCreation />
          <h1
            className="text-slate-900 text-4xl font-medium font-['Roboto'] leading-[48px] text-center"
            id="website-development"
          >
            Website Development
          </h1>
          <WebsiteDevelopment />
        </div>
        <h1 className="text-[#091133] text-[2rem] font-normal font-['Bahnschrift'] leading-[48px] text-center pt-20">
          These packages are just starting points, and the actual cost may vary
          based on specific client needs, additional features, or any unique
          requirements for the static website development.
        </h1>
      </div>
      <ScrollButton />
    </Layout>
  );
};

export default Prices;
