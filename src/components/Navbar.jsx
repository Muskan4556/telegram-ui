import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "./Sidebar";
import { MdOutlineMenu } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { HiArrowLeft } from "react-icons/hi";
import { AnimatePresence, motion } from "framer-motion";
import { toggleSidebarVisibility } from "../utils/sideVisibility";

const Navbar = () => {
  const dispatch = useDispatch()
  const [sidebarVisibility, setSidebarVisibility] = useState(false);
  const [menuHover, setMenuHover] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  // search handle searchSection
  const [search, setSearch] = useState(false);
  const [isMenuClicked, setIsMenuClicked] = useState(true);
  const theme = useSelector((store) => store.theme.theme);
  // const sidebarVisibilityStore = useSelector(
  //   (store) => store.sidebarVisibility.visibility
  // );

  const handleSidebar = () => {
    setSidebarVisibility((prev) => !prev);
    setIsMenuClicked(!isMenuClicked);
   
  };
  useEffect(()=>{
    dispatch(toggleSidebarVisibility())
  },[sidebarVisibility])

  const handleSearch = () => {
    setIsFocused(true);
    setIsAnimating(true);
    setSearch(true);
  };
  const handleBlur = () => {
    setIsFocused(false);
    setIsAnimating(false);
  };
  const handleClickOutside = (e) => {
    if (!e.target.closest(".sidebar") && sidebarVisibility) {
      setSidebarVisibility(false);
    }
  };

  return (
    <div className={`${theme}-theme  w-full  z-[100] `}>
      <div className="lg:bg-bg-color bg-mobile-bg-color w-full shadow-lg">
        <div className="flex items-center w-full px-4 py-2 relative">
          <div className="w-[20%]  relative">
            {!search ? (
              <>
                <motion.div
                  variants={{
                    hidden: { rotate: 180 },
                    visible: { rotate: 0 },
                  }}
                  initial="hidden"
                  animate={!isAnimating ? "visible" : "hidden"}
                  // animate="visible"
                  transition={{ type: "", duration: 0.2, stiffness: 50 }}
                >
                  <MdOutlineMenu
                    className={`h-11 w-11 rounded-full p-2 lg:hover:bg-hover-bg flex items-center justify-center cursor-pointer lg:text-icon-color ${
                      theme && "text-white"
                    } `}
                    onClick={handleSidebar}
                    onMouseEnter={() => setMenuHover(true)}
                    onMouseLeave={() => setMenuHover(false)}
                  />
                </motion.div>
                {menuHover && isMenuClicked && (
                  <div
                    className="hidden lg:block absolute bg-menu-hover-bg text-menu-hover-text ml-8 text-xs whitespace-nowrap h-6 p-1 z-10 "
                    style={{ border: "var(--menu-hover-text-border)" }}
                  >
                    Open Menu
                  </div>
                )}
              </>
            ) : (
              <>
                <motion.div
                  variants={{
                    hidden: { rotate: 0 },
                    visible: { rotate: 360 },
                  }}
                  initial="hidden"
                  animate={isAnimating ? "visible" : "hidden"}
                  transition={{ type: "", duration: 0.2, stiffness: 50 }}
                >
                  <HiArrowLeft
                    className={`h-11 w-11 rounded-full p-2 hover:bg-hover-bg flex items-center justify-center cursor-pointer lg:text-icon-color ${
                      theme && "text-white"
                    } `}
                    onClick={() => setSearch(false)}
                    onMouseEnter={() => setMenuHover(true)}
                    onMouseLeave={() => setMenuHover(false)}
                  />
                </motion.div>
                {menuHover && (
                  <div
                    className=" lg:block hidden absolute bg-menu-hover-bg text-menu-hover-text ml-8 text-xs whitespace-nowrap h-6 p-1 z-10 "
                    style={{ border: "var(--menu-hover-text-border)" }}
                  >
                    Return to chat list
                  </div>
                )}
              </>
            )}
          </div>
          <div
            tabIndex={0}
            className={`hidden lg:flex p-2 h-12 rounded-full bg-input-bg-color w-full border-2 ${
              isFocused ? "border-border-color" : "border-transparent"
            } focus:outline-none`}
            onFocus={handleSearch}
            onBlur={handleBlur}
          >
            <IoIosSearch
              className={`h-8 w-6 ml-2 flex justify-center items-center ${
                isFocused ? "text-border-color" : "text-icon-color"
              }`}
            />
            <input
              type="text"
              placeholder="Search"
              name="search"
              className="flex-1 p-2 bg-input-bg-color border-0 focus:outline-none placeholder-placeholder-color focus:text-color"
              onFocus={handleSearch}
              onBlur={handleBlur}
            />
          </div>
          <h4
            className={`lg:hidden font-semibold  ml-4  ${
              theme && "text-white "
            } text-2xl `}
          >
            Telegram
          </h4>
          <div className=" w-full flex justify-end lg:hidden">
            <IoIosSearch
              className={`h-8 w-6 ml-2 flex justify-center items-center  ${
                theme && "text-white"
              } ${isFocused ? "text-border-color" : "text-icon-color"}`}
              onClick={handleSearch}
            />
          </div>
          {/* <input
              type="text"
              placeholder="Search"
              name="search"
              className="flex-1 p-2 bg-input-bg-color border-0 focus:outline-none placeholder-placeholder-color focus:text-color"
              onFocus={handleSearch}
              onBlur={() => setIsFocused(false)}
            /> */}
        </div>
        <AnimatePresence>{sidebarVisibility && <Sidebar />}</AnimatePresence>
        {sidebarVisibility && (
          <div
            className="fixed top-16  left-0 lg:w-[30%] w-full  h-full bg-black lg:bg-opacity-0 bg-opacity-0 z-10"
            onClick={handleClickOutside}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
