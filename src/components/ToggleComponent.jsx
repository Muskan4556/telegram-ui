import { useState } from "react";
import { useSelector } from "react-redux";

const ToggleSwitch = ({ setToggleEnable }) => {
  const [isOn, setIsOn] = useState(false);
  const theme = useSelector((store) => store.theme.theme);

  const handleToggle = () => {
    setIsOn((prev) => !prev);
    setToggleEnable();
  };

  return (
    <div className={`${theme}-theme flex items-center w-12`}>
      <div
        onClick={handleToggle}
        className={`w-9 h-4 flex items-center rounded-full cursor-pointer transition-colors duration-300 ${
          isOn ? "bg-border-color" : "bg-[#c4c9cc]"
        }`}
      >
        <div
          className={`w-5 h-5 bg-white rounded-full border-2 shadow-md transform transition-transform duration-300 ${
            isOn
              ? "translate-x-6 border-border-color"
              : "translate-x-0 border-[#c4c9cc]"
          }`}
        />
      </div>
    </div>
  );
};

export default ToggleSwitch;
