"use client";
import { BtnList } from "@/app/data";
import React from "react";
import NavButton from "./NavButton";

const Navigation = () => {
  const angleIncrement = 360 / BtnList.length;
  return (
    <div className="w-full fixed h-screen flex items-center justify-center">
      <div className="flex items-center justify-between relative animate-spin-slow">
        {BtnList.map((btn, index) => {
          const angleRed = (index * angleIncrement * Math.PI) / 180;
          const radius = "calc(20vw - 1rem)";
          const x = `calc(${radius}*${Math.cos(angleRed)})`;
          const y = `calc(${radius}*${Math.sin(angleRed)})`;

          return <NavButton key={btn.label} x={x} y={y} {...btn} />;
         
        })}
      </div>
    </div>
  );
};

export default Navigation;
