import { useEffect } from "react";
import { allChatInfoUrl } from "../utils/constant";

const useAllChats = () => {
  useEffect(() => {
    getAllChats();
  }, []);

  const getAllChats = async () => {
    const data = await fetch(allChatInfoUrl);
    const json = await data.json();
    console.log(json);
    return json;
  };
};

export default useAllChats;
