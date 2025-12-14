import { useEffect, useState } from "react";
import { useAnimationContext } from "../context/AnimationContext";

interface UseCountUpOptions {
  end: number;
  duration?: number;
  start?: number;
  decimals?: number;
}

export const useCountUp = (options: UseCountUpOptions) => {
  const { end, duration = 2000, start = 0, decimals = 0 } = options;
  const [count, setCount] = useState(start);
  const { animationsEnabled } = useAnimationContext();

  useEffect(() => {
    if (!animationsEnabled) {
      setCount(start);
      return;
    }

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);

      const currentCount = Math.floor(progress * (end - start) + start);
      setCount(currentCount);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    window.requestAnimationFrame(step);
  }, [end, duration, start, animationsEnabled]);

  return decimals > 0 ? count.toFixed(decimals) : count.toString();
};
