import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef, useState } from "react";

import kbmdsi from "../assets/project/kbmdsi.png";
import ProjectCard from "../components/ProjectCard";

const Coba = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const scroll = useTransform(scrollYProgress, [0.2, 1], ["0%", "-85%"]);
  const [activeProject, setActiveProject] = useState(null);
  return (
    <section>
      <div className="container">
        <div ref={ref} className="h-[300vh] relative">
          <div className="sticky top-0 h-screen overflow-hidden flex flex-col py-6 bg-red-200">
            <div className="flex w-full bg-green-300">
              <div className="min-w-1/2 bg-purple-500"></div>
              <motion.div
                style={{
                  x: scroll,
                }}
                className="grid mx-[25%] bg-sky-200 grid-flow-col w-auto-cols-auto w-[400vw] sm:min-w-[200vw] min-h-[50%] items-center justify-center gap-2 sm:gap-36"
              >
                <ProjectCard
                  prjImg={kbmdsi}
                  judul={"KBMDSI UB"}
                  keterangan={
                    "Organization profile website of the Keluarga Besar Departemen Sistem Informasi"
                  }
                  onInView={() => setActiveProject(kbmdsi)}
                />
                <ProjectCard
                  prjImg={kbmdsi}
                  judul={"KBMDSI UB"}
                  keterangan={
                    "Organization profile website of the Keluarga Besar Departemen Sistem Informasi"
                  }
                  onInView={() => setActiveProject(kbmdsi)}
                />
                <ProjectCard
                  prjImg={kbmdsi}
                  judul={"KBMDSI UB"}
                  keterangan={
                    "Organization profile website of the Keluarga Besar Departemen Sistem Informasi"
                  }
                  onInView={() => setActiveProject(kbmdsi)}
                />
                <ProjectCard
                  prjImg={kbmdsi}
                  judul={"KBMDSI UB"}
                  keterangan={
                    "Organization profile website of the Keluarga Besar Departemen Sistem Informasi"
                  }
                  onInView={() => setActiveProject(kbmdsi)}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coba;
