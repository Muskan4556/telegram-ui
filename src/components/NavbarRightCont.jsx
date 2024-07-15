import { useDispatch, useSelector } from "react-redux";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { logoUrl } from "../utils/constant";
import { IoIosSearch } from "react-icons/io";
import { PiDotsThreeVertical } from "react-icons/pi";
import { useParams } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi";
import { backHomeVisibility } from "../utils/backHome";

const NavbarRightCont = ({ setIsMobileView }) => {
  const theme = useSelector((store) => store.theme.theme);

  const backHome = useSelector((store) => store.backHome.visibility);
  const { id } = useParams();
  const dispatch = useDispatch();

  const handleClick = () => {
    setIsMobileView(false);
    dispatch(backHomeVisibility(true));
  };

  return (
    id && (
      <div
        className={`${theme}-theme h-16 ${backHome ? "hidden" : "visible"} `}
      >
        <div className="flex justify-between items-center py-1 px-4 bg-bg-color">
          <div className="flex items-center">
            <HiArrowLeft
              className="lg:hidden  w-6 h-6 mr-2"
              onClick={handleClick}
            />
            <LazyLoadImage
              src={logoUrl}
              alt="logo"
              effect="blur"
              className="lg:w-14 lg:h-14 w-12 h-12 rounded-full "
            />
            <div className="flex flex-col ml-4 py-2">
              <h3 className="font-semibold -mt-1 text-lg text-text-color">
                Telegram
              </h3>
              <div className="text-sm -mt-1 text-gray-500">
                service notification
              </div>
            </div>
          </div>
          <div className="flex space-x-2">
            <IoIosSearch className="h-6 w-6 font-bold cursor-pointer text-text-color" />
            <PiDotsThreeVertical className="h-6 w-6 font-bold cursor-pointer text-text-color" />
          </div>
        </div>
      </div>
    )
  );
};

export default NavbarRightCont;
