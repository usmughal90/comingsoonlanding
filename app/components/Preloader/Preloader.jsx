"use client"
import React, { useEffect, useRef } from "react";
import "./Preloader.css";

const Preloader = () => {
  const preloaderRef = useRef(null);

  useEffect(() => {
    const preload = preloaderRef.current;

    const firstTimeout = setTimeout(() => {
      if (preload) {
        preload.style.opacity = "0";

        const secondTimeout = setTimeout(() => {
          preload.style.display = "none";
        }, 1000);

        return () => clearTimeout(secondTimeout);
      }
    }, 3000);

    // Cleanup function
    return () => clearTimeout(firstTimeout);
  }, []);

  return (
    <div className="preloader" ref={preloaderRef}>
      <div className="spinner_wrap">
        <div className="spinner" />
      </div>
    </div>
  );
};

export default Preloader;