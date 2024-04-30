"use client";

import { useEffect, useState } from "react";

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState();

  useEffect(() => {
    function getScreenSize(params) {
      return window.innerWidth;
    }
    function handleResize(params) {
      setScreenSize(getScreenSize());
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screenSize;
};

export default useScreenSize;
