import React, { useEffect } from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaBootstrap } from "react-icons/fa";
import { SiFramer } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import TechCard from "../TechCard";
import useMeasure from "react-use-measure";
import { animate, motion, useMotionValue } from "framer-motion";

const icons = [
  { icon: <FaReact className="flex-shrink-0" size={100} />, nama: "React" },
  { icon: <FaHtml5 className="flex-shrink-0" size={100} />, nama: "HTML" },
  { icon: <FaCss3Alt className="flex-shrink-0" size={100} />, nama: "CSS" },
  { icon: <FaJs className="flex-shrink-0" size={100} />, nama: "JavaScript" },
  {
    icon: <SiFramer className="flex-shrink-0" size={100} />,
    nama: "Framer Motion",
  },
  {
    icon: <FaBootstrap className="flex-shrink-0" size={100} />,
    nama: "Bootstrap",
  },
  {
    icon: <RiTailwindCssFill className="flex-shrink-0" size={100} />,
    nama: "Tailwind CSS",
  },
];

const TechStack = () => {
  const [refLeft, { width: widthLeft }] = useMeasure();
  const [refRight, { width: widthRight }] = useMeasure();

  const xTranslationLeft = useMotionValue(0);
  const xTranslationRight = useMotionValue(0);

  // Animasi untuk marquee ke kiri
  useEffect(() => {
    let controlsLeft;
    const finalPositionLeft = -widthLeft / 2 - 8;

    controlsLeft = animate(xTranslationLeft, [0, finalPositionLeft], {
      ease: "linear",
      duration: 25,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });

    return controlsLeft.stop;
  }, [xTranslationLeft, widthLeft]);

  // Animasi untuk marquee ke kanan
  useEffect(() => {
    let controlsRight;
    const finalPositionRight = widthRight / 2 + 8;

    controlsRight = animate(xTranslationRight, [0, finalPositionRight], {
      ease: "linear",
      duration: 25,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });

    return controlsRight.stop;
  }, [xTranslationRight, widthRight]);

  return (
    <section>
      <div className="container">
        <h2 className="font-primaryBold text-[4svh]">Tech Stack</h2>

        {/* Marquee ke kiri */}
        <div className="max-w-md mx-auto overflow-hidden h-fit">
          <motion.div
            ref={refLeft}
            className="h-28 flex gap-4 relative w-max"
            style={{ x: xTranslationLeft }}
          >
            {[...icons, ...icons].map((item, index) => (
              <TechCard key={index} nama={item.nama}>
                {item.icon}
              </TechCard>
            ))}
          </motion.div>
        </div>

        {/* Marquee ke kanan */}
        <div className="max-w-md mx-auto overflow-hidden h-fit mt-8 flex justify-end ">
          <motion.div
            ref={refRight}
            className="h-28 flex gap-4 relative w-max"
            style={{ x: xTranslationRight }}
          >
            {[...icons, ...icons].map((item, index) => (
              <TechCard key={index} nama={item.nama}>
                {item.icon}
              </TechCard>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
