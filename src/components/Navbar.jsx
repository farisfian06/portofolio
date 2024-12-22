import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();
  const lastYRef = useRef(0);

  useMotionValueEvent(scrollY, "change", (y) => {
    const difference = y - lastYRef.current;
    if (Math.abs(difference) > 50) {
      setIsHidden(difference > 0);

      lastYRef.current = y;
    }
  });

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      animate={isHidden ? "hidden" : "visible"}
      whileHover="visible"
      onFocusCapture={() => setIsHidden(false)}
      variants={{
        hidden: {
          y: "-90%",
        },
        visible: {
          y: "0%",
        },
      }}
      transition={{ duration: 0.2 }}
      className="fixed top-0 z-50 flex w-full justify-center pt-3"
    >
      <ul className="flex justify-between gap-3 rounded-3xl font-primaryBold text-primaryBlack-0 bg-white p-5 *:rounded-xl *:border *:border-gray-200 *:px-3 sm:*:px-7 *:py-2 *:transition-colors *:duration-300 hover:*:bg-gray-200 focus-visible:*:bg-gray-200">
        <Link to="/" onClick={() => scrollToSection("about")}>
          About
        </Link>
        <Link to="/" onClick={() => scrollToSection("experience")}>
          Experience
        </Link>
        <Link to="/" onClick={() => scrollToSection("project")}>
          Project
        </Link>
        <Link to="/" onClick={() => scrollToSection("tech")}>
          Tech
        </Link>
      </ul>

      {/* <a href="#" className="bg-gray-200">
          <svg
            className="h-6 w-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5-10-5-10 5z"></path>
          </svg>
          <span className="sr-only">Home</span>
        </a>
        <a href="#">Products</a>
        <a href="#">Services</a>
        <a href="#">About</a>
        <a href="#">Contact</a> */}
    </motion.nav>
  );
};

export default Navbar;
