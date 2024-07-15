import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { bgDarkMode, bgLightMode } from "../utils/constant";

const RightCont = () => {
  const { id } = useParams();
  const theme = useSelector((store) => store.theme.theme);

  const backgroundImage =
    theme === "light" ? `url('${bgDarkMode}')` : `url('${bgLightMode}')`;
  const gradient =
    theme === "dark"
      ? "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))" // Dark overlay
      : "linear-gradient(to bottom right, rgba(144, 238, 144, 0.5), rgba(144, 238, 144, 0.7))"; // Diagonal light green overlay

  return (
    <div
      className={`${theme}-theme h-[91vh] `}
      style={{
        backgroundImage: `${gradient}, ${backgroundImage}`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        opacity: "1",
      }}
    >
      {id ? (
        <div>
          <h2>Selected Chat ID: {id}</h2>
          {/* Add your logic to fetch and display chat details */}
        </div>
      ) : (
        <div className="h-full w-full flex items-center justify-center">
          <h2>Welcome! Please select a chat from the left panel.</h2>
        </div>
      )}
    </div>
  );
};

export default RightCont;
