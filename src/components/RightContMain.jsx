import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect, useRef } from "react";
import { bgDarkMode, bgLightMode } from "../utils/constant";
import useChatMessages from "../hooks/useChatMessages";
import { formatDate } from "../utils/helper";

const RightContMain = () => {
  const { id } = useParams();
  const theme = useSelector((store) => store.theme.theme);
  const { messages, loading, error } = useChatMessages();
  const [visibleDate, setVisibleDate] = useState(null);
  const containerRef = useRef(null);
  const backHome= useSelector((store)=>store.backHome.visibility)

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const scrollPosition = containerRef.current.scrollTop;
        let foundDate = null;

        for (const message of messages) {
          const element = document.getElementById(`message-${message.id}`);
          if (element) {
            const rect = element.getBoundingClientRect();
            const containerRect = containerRef.current.getBoundingClientRect();

            if (rect.top >= containerRect.top && rect.bottom <= containerRect.bottom) {
              foundDate = formatDate(message.created_at);
              break;
            }
          }
        }

        setVisibleDate(foundDate);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      handleScroll(); // Initial check on mount
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, [messages]);

  const backgroundImage =
    theme === "light" ? `url('${bgLightMode}')` : `url('${bgDarkMode}')`;
  const gradient =
    theme === "dark"
      ? "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))" // Dark overlay
      : "linear-gradient(to bottom right, rgba(144, 238, 144, 0.5), rgba(144, 238, 144, 0.7))"; // Diagonal light green overlay

  return (
    <div
      ref={containerRef}
      className={`${theme}-theme  overflow-y-auto scrollbar-none h-[calc(100vh-64px)] z-10 ${backHome ? "hidden lg:block lg:h-screen" : "visible"}`}
      style={{
        backgroundImage: `${gradient}, ${backgroundImage}`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        opacity: "1",
      }}
    >
      {id ? (
        <div className="w-full relative">
          {visibleDate && (
            <div className="fixed top-[60vh] left-1/2 transform -translate-x-48  bg-red-500 w-32  text-black px-4 py-2 rounded-lg z-10">
              {visibleDate}
            </div>
          )}
          <div className="flex justify-center items-center">
            <div className="relative lg:max-w-[40%] lg:mx-0 mx-4 lg:ml-[40%] h-auto mt-12 py-1 rounded-xl">
              {messages.map((message) => (
                <div
                  key={message.id}
                  id={`message-${message.id}`}
                  className="p-4 text-md bg-bg-color  text-text-color mb-4 rounded-lg shadow"
                >
                  {message.message}
                  <div className="text-xs text-gray-500">
                    {formatDate(message.created_at)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="h-full w-full flex items-center justify-center">
          {/* <h2>Welcome! Please select a chat from the left panel.</h2> */}
        </div>
      )}
    </div>
  );
};

export default RightContMain;
