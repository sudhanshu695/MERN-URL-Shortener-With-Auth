import { useEffect, useState } from "react";
import logo from "../Logo/logo.png";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const navVariants = {
  starting: { top: "-100px", transition: { duration: 0.7 } },
  later: { top: "0px", transition: { duration: 0.7 } },
};

const MotionLink = motion(Link);

const MainHeader = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.nav
      whileHover={{ height: 82 }}
      variants={navVariants}
      initial="starting"
      animate={isOpen ? "later" : "starting"}
      className="p-3 top-0 left-0 w-full h-18 bg-[#2D274B] text-[#9787F3] fixed px-6 flex items-center shadow-2xl z-50"
    >
      <div className="flex justify-between items-center w-full">
        {/* Logo */}
        <motion.img src={logo} className="cursor-pointer h-35" alt="log" />

        {/* NAV LINKS */}
        <div className="hidden md:flex space-x-22 font-semibold">
          
          <MotionLink
            to="/"
            whileHover={{ scale: 1.1 }}
            style={{ color: isActive("/") ? "white" : "#9787F3" }}
          >
            Home
          </MotionLink>

          <MotionLink
            to="/about"
            whileHover={{ scale: 1.1 }}
            style={{ color: isActive("/about") ? "white" : "#9787F3" }}
          >
            About
          </MotionLink>

          <MotionLink
            to="/contact"
            whileHover={{ scale: 1.1 }}
            style={{ color: isActive("/contact") ? "white" : "#9787F3" }}
          >
            Contact
          </MotionLink>

          <MotionLink
            to="/analytics"
            whileHover={{ scale: 1.1 }}
            style={{ color: isActive("/analytics") ? "white" : "#9787F3" }}
          >
            Analytics
          </MotionLink>
        </div>

        {/* LOGIN BUTTON */}
        <motion.div className="flex space-x-5 font-semibold bg-[#383063] px-5 rounded-lg m-3 py-2 hover:bg-[#302a5d]">
          <MotionLink
            to="/signup"
            whileHover={{ scale: 1.1 }}
            style={{ color: isActive("/signup") ? "white" : "#9787F3" }}
          >
            Login
          </MotionLink>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default MainHeader;
