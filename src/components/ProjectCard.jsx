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
      className={`bg-gray-800 w-full h-fit rounded-3xl overflow-hidden transform transition-transform duration-300 ${
        isInView ? "" : "scale-75"
      }`}
    >
      <img
        className="w-full h-auto object-contain max-h-[25%] relative top-0"
        src={prjImg}
        alt="Project image"
      />
      <div className="px-8 py-4">
        <h3 className="text-primaryOrange-0 font-primaryRegular">{judul}</h3>
        <p>{keterangan}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
