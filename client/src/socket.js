import { io } from "socket.io-client";

export const initSocket = async () => {
  const options = {
    "force new connection": true,
    reconnectionAttempt: "Infinity",
    timeout: 10000,
    transports: ["websocket"],
  };

  // eslint-disable-next-line no-undef
  return io("https://codecolab-backend.onrender.com", options);
};
