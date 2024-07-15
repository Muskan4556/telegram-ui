import { useState } from "react";
import LeftCont from "./LeftCont";
import Navbar from "./Navbar";
import NavbarRightCont from "./NavbarRightCont";
import RightContMain from "./RightContMain";
import { useSelector } from "react-redux";

const Body = () => {
  const [isMobileView, setIsMobileView] = useState(false);
  
  return (
    <div className="flex">
      {!isMobileView   ? (
        <>
          <div className="lg:w-[30%] w-full">
            <Navbar />
            <LeftCont setIsMobileView={setIsMobileView} />
          </div>
          <div className="lg:w-[70%] w-full">
            <NavbarRightCont setIsMobileView={setIsMobileView}/>
            <RightContMain />
          </div>
        </>
      ) : (
        <>
          <div className="lg:w-[30%] w-full hidden lg:block">
            <Navbar />
            <LeftCont setIsMobileView={setIsMobileView} />
          </div>
          <div className="lg:w-[70%] w-full">
            <NavbarRightCont setIsMobileView={setIsMobileView}/>
            <RightContMain />
          </div>
        </>
      )}
      {/* <div className="lg:w-[30%] w-full">
        <Navbar />
        <LeftCont />
      </div>
      <div className="lg:w-[70%] w-full">
        <NavbarRightCont />
        <RightContMain />
      </div> */}
    </div>
  );
};

export default Body;
