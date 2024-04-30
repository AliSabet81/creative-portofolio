"use client";
import useScreenSize from "@/hook/useScreenSize";
import React from "react";

const ResponsiveComponent = ({ children }) => {
  const size = useScreenSize();
  return <>{children({ size })}</>;
};

export default ResponsiveComponent;
