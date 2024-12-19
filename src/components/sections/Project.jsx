import React, { useRef, useState } from "react";
import ProjectCard from "../ProjectCard";
import { motion, useScroll, useTransform } from "framer-motion";
import hrfTrans from "../../assets/project/hrfTrans.png";
import hrfTrans2 from "../../assets/project/hrfTrans 2.png";
import hrfTrans3 from "../../assets/project/hrfTrans 3.png";
import itFest from "../../assets/project/itFest.png";
import itFest2 from "../../assets/project/itFest 2.png";
import itFest3 from "../../assets/project/itFest 3.png";
import kbmdsi from "../../assets/project/kbmdsi.png";
import kbmdsi2 from "../../assets/project/kbmdsi 2.png";
import kbmdsi3 from "../../assets/project/kbmdsi 3.png";
import kbmdsi4 from "../../assets/project/kbmdsi 4.png";
import kbmdsi5 from "../../assets/project/kbmdsi 5.png";
import kbmdsi6 from "../../assets/project/kbmdsi 6.png";
import kbmdsi7 from "../../assets/project/kbmdsi 7.png";
import kelanaKampus from "../../assets/project/kelanaKampus.png";
import kelanaKampus2 from "../../assets/project/kelanaKampus.png";
import kelanaKampus3 from "../../assets/project/kelanaKampus.png";
import kelanaKampus4 from "../../assets/project/kelanaKampus.png";
import kelanaKampus5 from "../../assets/project/kelanaKampus.png";
import kelanaKampus6 from "../../assets/project/kelanaKampus.png";
import { Link } from "react-router-dom";

const listProject = [
  {
    id: 1,
    judul: "KBMDSI UB",
    domain: "kbmdsi.ub.ac.id",
    img: [kbmdsi, kbmdsi2, kbmdsi3, kbmdsi4, kbmdsi5, kbmdsi6, kbmdsi7],
    keterangan:
      "Organization profile website of the Keluarga Besar Departemen Sistem Informasi",
  },
  {
    id: 2,
    judul: "ITFEST FILKOM 2024",
    domain: "itfest-filkom.my.id",
    img: [itFest, itFest2, itFest3],
    keterangan:
      "Website that contains information from the competition held by the ITFEST and the place of registration",
  },
  {
    id: 3,
    judul: "HRF TRANS",
    domain: "github.com/farisfian06/Project-2-pemweb-laravel",
    img: [hrfTrans, hrfTrans2, hrfTrans3],
    keterangan:
      "Website to rent a vehicle online, with feature like sign in, and rent a car",
  },
  {
    id: 4,
    judul: "Kelana Kampus",
    domain: "farisfian06.github.io/DDAP",
    img: [
      kelanaKampus,
      kelanaKampus2,
      kelanaKampus3,
      kelanaKampus4,
      kelanaKampus5,
      kelanaKampus6,
    ],
    keterangan:
      "Website that is involved in mental health and aims to help friends who have problems while living away from home",
  },
  {
    id: 5,
    judul: "Read Mate",
    domain: "",
    img: "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    keterangan:
      "Mobile apps for reading article, with a feature like bookmarking and reading history. This app is integrated with firebase database",
  },
];

const Project = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const scroll = useTransform(scrollYProgress, [0.2, 1], ["11%", "-75%"]);
  const [activeProject, setActiveProject] = useState(null);
  return (
    <section>
      <div className="container">
        <div ref={ref} className="h-[300vh] relative">
          <div className="sticky top-0 h-screen overflow-hidden flex flex-col">
            <h2 className="font-primaryBold text-[4svh]">Projects</h2>
            <motion.div
              style={{
                x: scroll,
              }}
              className="grid grid-cols-5 w-[200vw] h-[50%] items-center justify-center gap-36"
            >
              {listProject.map((item) => (
                <ProjectCard
                  key={item.id}
                  prjImg={item.img[0]}
                  judul={item.judul}
                  keterangan={item.keterangan}
                  onInView={() => setActiveProject(item)}
                />
              ))}
            </motion.div>
            <div className=" max-w-screen-md self-center h-full">
              {activeProject ? (
                <div className="mockup-browser border-base-300 border-4 h-full bg-slate-400">
                  <div className="mockup-browser-toolbar">
                    <div className="input border-base-300 border">
                      <a
                        href={`https://${activeProject.domain}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {activeProject.domain}
                      </a>
                    </div>
                  </div>
                  <div className="border-base-300 flex bg-red-300 relative justify-center border-t-4 px-4 py-16">
                    <img
                      src={activeProject.img[0]}
                      alt=""
                      className="absolute inset-0 object-contain w-full h-auto"
                    />
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
