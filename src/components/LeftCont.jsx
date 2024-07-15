import { useSelector } from "react-redux";
import useAllChats from "../hooks/useAllChats";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { profileUrl } from "../utils/constant";
import { useEffect, useRef, useState } from "react";
import { ClipLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";

const LeftCont = () => {
  const theme = useSelector((store) => store.theme.theme);
  const [showIndex, setShowIndex] = useState(null);
  const totalChatInfo = useAllChats();
  const { chats, currentPage, totalPages, loading, error, setCurrentPage } = totalChatInfo;
  const navigate = useNavigate()

  const handleChatSelected = (i,id) => {
    setShowIndex(i);
    navigate(`/${id}`);
  };

  const filterUniqueChats = (chats) => {
    const seenIds = [];
    return chats.filter((chat) => {
      const creatorId = chat?.creator?.id;
      if (seenIds.includes(creatorId)) {
        return false;
      } else {
        seenIds.push(creatorId);
        return true;
      }
    });
  };

  const filteredChats = filterUniqueChats(chats);

  const chatListRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      if (chatListRef.current) {
        const isBottom = chatListRef.current.scrollHeight - chatListRef.current.scrollTop <= chatListRef.current.clientHeight + 100;

        if (isBottom && !loading && currentPage < totalPages) {
          setCurrentPage((prevPage) => prevPage + 1);
        }
      }
    };

    const chatList = chatListRef.current;
    if (chatList) {
      chatList.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (chatList) {
        chatList.removeEventListener("scroll", handleScroll);
      }
    };
  }, [loading, currentPage, totalPages]);

  return (
    <div className={`${theme}-theme lg:w-[30%] w-full shadow-lg `}>
      <ul ref={chatListRef} className="overflow-y-auto h-[91vh] bg-bg-color text-text-color scrollbar-none">
        {filteredChats.map((chat, i) => (
          <div
            key={chat.id}
            className={`flex items-center px-2 mx-2 space-x-3 my-1 rounded-2xl h-20 cursor-pointer  ${
              showIndex === i ? "bg-border-color text-text-selected" : "hover:bg-item-hover"
            }`}
            onClick={() => handleChatSelected(i,chat?.creator?.id )}
          >
            <li className="w-[12%]">
              <LazyLoadImage src={profileUrl} alt="profile-img" effect="blur" className="w-12 h-12 rounded-full" />
            </li>
            <div className={`w-[80%]`}>
              <li className={`text-primaryColor font-semibold whitespace-nowrap overflow-hidden text-ellipsis ${showIndex===i && "text-text-selected"} `}>
                {chat?.creator?.name || chat?.creator?.id}
              </li>
              <li className={`text-secondaryColor font-medium whitespace-nowrap overflow-hidden text-ellipsis ${showIndex===i ?"text-text-selected" : ""} `}>
                Stay Ahead in Your Ct! Stay Ahead in Your Career with @go_careers_bold_bot! 🚀🚀
              </li>
            </div>
          </div>
        ))}
      </ul>
      {loading && (
        <div className="flex justify-center items-center h-40">
          <ClipLoader size={30} color={"#0a0a0a"} loading={loading} />
        </div>
      )}
    </div>
  );
};

export default LeftCont;
