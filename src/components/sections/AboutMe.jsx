import React from "react";

const AboutMe = () => {
  return (
    <section className="relative z-10 bg-primaryBlack-0 py-11">
      <div className="container">
        <div className="flex justify-between w-full items-center">
          <div className="w-[50%]">
            <h2 className="font-primaryBold text-[4svh] text-primaryOrange-0">
              ABOUT ME
            </h2>
            <h2 className="font-SerifRegular text-[5svh]">
              FARIS IHSAN ALIFIAN
            </h2>
          </div>
          <div className="flex w-[50%]">
            <div className="min-h-full w-1 rounded bg-primaryOrange-0 me-4"></div>
            <p className="font-primaryRegular w-[90%] text-sm py-3 ">
              I am a undergraduate Student of Information System Study, Faculty
              of Computer Science, University of Brawijaya, who has expertise in
              front end website development. Has expertise in HTML, CSS,
              React.js, etc to create attractive and responsive user interfaces.
              In addition to technical skills, also has experience working in a
              team, leadership skills, initiative, and solid problem-solving
              skills. Always learning and adapting to new technologies and
              focusing on career development in the professional field.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
