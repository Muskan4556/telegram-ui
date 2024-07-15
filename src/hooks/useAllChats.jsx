import { useState, useEffect } from "react";

const useAllChats = (initialPage = 1) => {
  const [chats, setChats] = useState([]);
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchChats = async (page) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://devapi.beyondchats.com/api/get_all_chats?page=${page}`
      );
      const data = await response.json();
      if (data.status === "success") {
        setChats(prevChats => [...prevChats, ...data.data.data]);
        setTotalPages(data.data.last_page);
      } else {
        setError("Failed to fetch chats");
      }
    } catch (err) {
      setError("Error fetching chats");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchChats(currentPage);
  }, [currentPage]);

  return { chats, currentPage, totalPages, loading, error, setCurrentPage };
};

export default useAllChats;
