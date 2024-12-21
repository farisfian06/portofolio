import { useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";

const ProjectCard = ({ prjImg, keterangan, judul, onInView }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "0px -50% 0px -50%" });

  useEffect(() => {
    if (isInView) {
      onInView(); // Panggil fungsi jika kartu in view
    }
  }, [isInView, onInView]);
  return (
    <div
      ref={ref}
      className={`bg-gray-800 w-full sm:w-[90%] h-fit rounded-3xl overflow-hidden transform transition-transform duration-300 group ${
        isInView ? "" : "scale-75"
      }`}
    >
      <img
        className="w-full object-cover sm:max-h-[12rem] relative top-0 group-hover:scale-105 transition-all duration-500 ease-in-out"
        src={prjImg}
        alt="Project image"
      />
      <div className="px-8 py-4 relative bg-gray-800">
        <h3 className="text-primaryOrange-0 font-primaryRegular">{judul}</h3>
        <p>{keterangan}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
