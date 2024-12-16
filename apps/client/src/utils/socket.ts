import { toast } from "react-toastify";
import { io, Socket } from "socket.io-client";

const socket: Socket = io("http://localhost:8080", {
  transports: ["websocket"],
  reconnection: true,
});
export const subscribeToCurrenciesUpdate = (
  callback: (data: CurrencyInfo[]) => void
) => {
  socket.on("currenciesUpdate", callback);
};
socket.on("connect_error", (error) => {
  toast.error("Websocket failure, check if you have envs enabled");
  console.error("WebSocket connection error:", error);
});
export const disconnectSocket = () => {
  socket.disconnect();
};
