import React from "react";
// import data
import { newsletterData } from "../data";

const Newsletter = () => {
  // destructure newsletter data
  const { title, subtitle, placeholder, btnText } = newsletterData;
  return (
    <div className="bg-none lg:bg-newsletter lg:bg-cover lg:h-[220px] lg:bg-center lg:px-24 lg:bg-no-repeat my-4">
      <div className="flex flex-col lg:flex-row justify-between items-center h-full">
        {/* title & subtitle */}
        <div className="text-center lg:text-left mb-4">
          <h3 className="text-[26px] font-primary italic text-white capitalize mb-2">
            {title}
          </h3>
          <p>{subtitle}</p>
        </div>
        {/* form */}
        <form className="flex flex-col lg:flex-row lg:gap-x-[10px] gap-y-4 ">
          <input
            className="input text-center bg-transparent placeholder:font-light placeholder:text-white/20 text-white focus:ring-1 focus:ring-accent border border-white/20 transition-all"
            type="text"
            placeholder={placeholder}
          />
          <div className="btn opacity-40 capitalize w-full lg:max-w-[204px] cursor-not-allowed">
            {btnText}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
