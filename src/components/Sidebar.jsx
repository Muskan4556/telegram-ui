import { useDispatch, useSelector } from "react-redux";
import { toggleDark, toggleTheme } from "../utils/themeSlice";
import ToggleButton from "./ToggleComponent";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { menuItems, profileUrl } from "../utils/constant";
import { BsMoonStarsFill } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdSunny } from "react-icons/io";
import { useState } from "react";
import { toggleSidebarVisibility } from "../utils/sideVisibility";

const Sidebar = () => {
  const theme = useSelector((store) => store.theme.theme);
  const dispatch = useDispatch();
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationPosition, setAnimationPosition] = useState({ x: 0, y: 0 });
  const [animationDirection, setAnimationDirection] = useState("expand");

  const iconClasses = "h-5 w-5 font-bold";
  const sidebarVariants = {
    hidden: {
      x: "-100%",
      opacity: 0,
      scale: 0.95,
      transition: {
        when: "afterChildren",
        type: "tween",
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    visible: {
      x: "0%",
      opacity: 1,
      scale: 1,
      transition: {
        when: "beforeChildren",
        type: "tween",
        duration: 0.5,
        ease: "easeOut",
      },
    },
    exit: {
      x: "-1000%",
      opacity: 0,
      scale: 0.95,
      transition: {
        type: "tween",
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  const handleToggleTheme = (e) => {
    const rect = e.target.getBoundingClientRect();
    setAnimationPosition({
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
    });

    setAnimationDirection(theme === "light" ? "expand" : "shrink");
    setIsAnimating(true);
    dispatch(toggleTheme());
    dispatch(toggleDark());

    setTimeout(() => setIsAnimating(false), 1000);
  };

  const handleDragEnd = (e, info) => {
    if (info.offset.x < -50 / 2) {
      dispatch(toggleSidebarVisibility()); // Close sidebar if dragged sufficiently left
    }
  };

  return (
    <motion.div
      variants={sidebarVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      drag="x"
      dragConstraints={{ left: -500, right: 0 }}
      dragElastic={0.5}
      onDragEnd={handleDragEnd}
      className={`sidebar ${theme}-theme absolute lg:top-16 top-0 lg:left-6 left-0 lg:w-[20%] w-[55%] lg:h-96 h-screen z-30  `}
    >
      <div
        className={`bg-bg-color flex flex-col lg:py-2 h-full  ${
          theme === "light"
            ? "lg:border lg:border-black/10 "
            : "border border-white/20 bg-[#1b242f]"
        } shadow-lg rounded-lg`}
      >
        <div className="lg:hidden lg:mt-0 mb-4 bg-[#598fba] h-[22%] ">
          <div className="flex flex-col justify-center  mx-4 h-full  ">
            <div className="flex mt-4  lg:px-4 px-1 justify-between h-full items-center ">
              <LazyLoadImage
                src={profileUrl}
                alt="profile-img"
                effect="blur"
                className="lg:w-12 lg:h-12 h-14 w-14 rounded-full text-white"
              />
              {theme === "light" ? (
                <motion.div className="transform scale-x-[-1] ">
                  <BsMoonStarsFill
                    className={`${iconClasses} cursor-pointer  `}
                    onClick={handleToggleTheme}
                  />
                </motion.div>
              ) : (
                <IoMdSunny
                  className={`${iconClasses} cursor-pointer`}
                  onClick={handleToggleTheme}
                />
              )}
            </div>
            <div className="flex justify-between mb-2 pb-4  h-14">
              <div>
                <div className="text-text-color text-sm font-semibold mt-4 ">
                  Muskan
                </div>
                <div className="text-text-color text-sm font-semibold">
                  +91 912345678
                </div>
              </div>

              <IoIosArrowDown
                className={`${iconClasses} flex items-end my-4 bg-orange-70 cursor-pointer h-full`}
              />
            </div>
          </div>
        </div>
        {menuItems.map((item, index) => (
          <motion.div
            key={index}
            whileTap={{ scale: 0.95 }}
            className={`flex p-2 space-x-2 items-center cursor-pointer text-text-color rounded-lg  ${
              item.hideOnMobile ? "hidden lg:flex" : ""
            } hover:bg-item-hover `}
          >
            <item.Icon className={iconClasses} />
            <div className="font-semibold text-sm whitespace-nowrap">
              {item.label}
            </div>
            {item.isToggle && (
              <div className="flex justify-end w-full">
                <motion.div onClick={handleToggleTheme}>
                  <ToggleButton />
                </motion.div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
      {isAnimating && (
        <motion.div
          initial={{
            scale: animationDirection === "expand" ? 0 : 20,
            opacity: 1,
            top: `${animationPosition.y}px`,
            left: `${animationPosition.x}px`,
          }}
          animate={{
            scale: animationDirection === "expand" ? 20 : 0,
            opacity: 0,
          }}
          transition={{ duration: 1 }}
          className="absolute bg-blue-500 rounded-full"
          style={{
            width: "100px",
            height: "100px",
            transform: "translate(-50%, -50%)",
            zIndex: 10,
          }}
        />
      )}
    </motion.div>
  );
};

export default Sidebar;
