import { useState, useEffect } from "react";

const useChatMessages = (chatId = 3888) => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchChatMessages = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://devapi.beyondchats.com/api/get_chat_messages?chat_id=${chatId}`);
      const data = await response.json();
      if (data.status === "success") {
        setMessages(data.data);
        
      } else {
        setError("Failed to fetch messages");
      }
    } catch (err) {
      setError("Error fetching messages");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchChatMessages();
  }, [chatId]);

  return { messages, loading, error };
};

export default useChatMessages;
