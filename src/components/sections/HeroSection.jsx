import React, { useRef } from "react";
import profileImg from "../../assets/landing_page/Foto profile.png";
import {
  easeIn,
  easeOut,
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";

const HeroSection = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const rotasi = useTransform(
    scrollYProgress,
    [0, 1],
    ["skewY(-8deg) ", "skewY(8deg) "]
  );

  const y = useTransform(scrollYProgress, [0, 1], ["20%", "0%"]);

  const gradient = useTransform(
    scrollYProgress,
    [0, 1],
    [
      "linear-gradient(to bottom right, #d1d5db, #808080, #000000)",
      "linear-gradient(to bottom right, #000000, #4b4b4b, #d1d5db)",
    ]
  );

  return (
    <header ref={targetRef} className="relative h-[150vh] ">
      <div className="sticky top-0 pt-11">
        <div className="container">
          <div className="flex">
            <div className="relative w-1/3">
              <div className="overflow-hidden h-full relative">
                <motion.img
                  src={profileImg}
                  alt="Profile image"
                  className="max-w-[70%] object-contain absolute bottom-0 left-5 z-10"
                  style={{ y: y }}
                />
              </div>
              <motion.div
                className="w-[80%] h-full absolute top-0 rounded-md shadow-lg"
                style={{
                  transform: rotasi,
                  backgroundImage: gradient,
                }}
              ></motion.div>
            </div>
            <div className="">
              {/* Judul */}
              <motion.h1
                whileInView={{ y: [100, 0], opacity: [0, 1] }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: easeOut }}
                className="text-left font-primaryRegular tracking-wide leading-tight p-0 font-[600] text-[12svh]"
              >
                HELLO, MY <br />
                NAME IS <br />
              </motion.h1>
              <motion.div
                whileInView={{ x: [100, 0], opacity: [0, 1] }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: easeOut, delay: 0.5 }}
                className="flex"
              >
                <h1 className="bg-primaryOrange-0 font-SerifRegular leading-none w-fit tracking-normal font-normal text-primaryBlack-0 text-[12svh]">
                  FARIS
                </h1>
                <p className="font-SerifRegular ms-2 font-[200] text-[2svh]">
                  2004
                </p>
              </motion.div>
              <motion.h1
                whileInView={{ y: [100, 0], opacity: [0, 1] }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: easeOut }}
                className="text-left font-primaryRegular tracking-wide leading-tight p-0 font-[600] text-[12svh]"
              >
                FRONT END <br />
                DEVELOPER.
              </motion.h1>
              <motion.p
                whileInView={{ y: [100, 0], opacity: [0, 1] }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: easeIn }}
                className="leading-none text-right font-primaryRegular text-lg "
              >
                INDONESIA, MALANG
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
