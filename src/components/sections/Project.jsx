import React, { useRef } from "react";
import ProjectCard from "../ProjectCard";
import { motion, useScroll, useTransform } from "framer-motion";

const Project = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const scroll = useTransform(scrollYProgress, [0.3, 1], ["1%", "-100%"]);
  return (
    <section>
      <div className="container">
        <div ref={ref} className="h-[200vh] relative">
          <div className="sticky top-0 h-screen overflow-hidden">
            <h2 className="font-primaryBold text-[4svh]">Projects</h2>
            <motion.div
              style={{
                x: scroll,
              }}
              className="flex gap-4 w-full flex-nowrap"
            >
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
