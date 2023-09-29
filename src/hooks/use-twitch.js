import { useRef } from "react";

export const useTwitch = () => {
  const embed = useRef(); // We use a ref instead of state to avoid rerenders.

  const handleReady = (e) => {
    embed.current = e;
  };

  return handleReady;
};
