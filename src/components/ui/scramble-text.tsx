"use client";

import React from "react";

type Props = {
  text: string;
  className?: string;
  intervalMs?: number; // speed of scramble frames
};

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:',.<>?";

export function ScrambleText({ text, className, intervalMs = 35 }: Props) {
  const [display, setDisplay] = React.useState(text);
  const intervalRef = React.useRef<number | null>(null);

  const handleMouseEnter = () => {
    if (intervalRef.current) window.clearInterval(intervalRef.current);
    let frame = 0;
    const maxFrames = text.length * 3;
    intervalRef.current = window.setInterval(() => {
      let out = "";
      for (let i = 0; i < text.length; i++) {
        if (frame / 3 > i) {
          out += text[i];
        } else {
          out += CHARS[Math.floor(Math.random() * CHARS.length)];
        }
      }
      setDisplay(out);
      frame++;
      if (frame >= maxFrames) {
        if (intervalRef.current) window.clearInterval(intervalRef.current);
        intervalRef.current = null;
        setDisplay(text);
      }
    }, intervalMs);
  };

  React.useEffect(() => {
    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <span onMouseEnter={handleMouseEnter} className={className}>
      {display}
    </span>
  );
}

