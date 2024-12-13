import React from "react";
import profileImg from "../../assets/landing_page/Foto profile.png";

const HeroSection = () => {
  return (
    <header>
      <div className="container">
        <div className="flex">
          <img
            src={profileImg}
            alt="Profile image"
            className="max-w-[25%] max object-contain"
          />
          <div className="">
            <h1 className="text-left font-primaryRegular tracking-wide leading-tight p-0 font-[600] text-[12svh]">
              HELLO, MY <br />
              NAME IS <br />
            </h1>
            <div className="flex">
              <h1 className="bg-primaryOrange-0 font-SerifRegular leading-none w-fit tracking-normal font-normal text-primaryBlack-0 text-[12svh]">
                FARIS
              </h1>
              <p className="font-SerifRegular ms-2 font-[200] text-[2svh]">
                2004
              </p>
            </div>
            <h1 className="text-left font-primaryRegular tracking-wide leading-tight p-0 font-[600] text-[12svh]">
              FRONT END <br />
              DEVELOPER.
            </h1>
            <p className="leading-none text-right font-primaryRegular text-lg ">
              INDONESIA, MALANG
            </p>
          </div>

          <br />
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
