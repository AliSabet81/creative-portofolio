"use client";
import { BtnList } from "@/app/data";
import React from "react";
import NavButton from "./NavButton";
import useScreenSize from "@/hook/useScreenSize";
import ResponsiveComponent from "../ResponsiveComponent";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const Navigation = () => {
  const angleIncrement = 360 / BtnList.length;

  const size = useScreenSize() as number;

  const isLarge = size >= 1024;
  const isMedium = size >= 768;

  return (
    <div className="w-full fixed h-screen flex items-center justify-center">
      <ResponsiveComponent>
        {({ size }: { size: number }) => {
          return size && size >= 480 ? (
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="flex items-center justify-center relative hover:pause animate-spin-slow group"
            >
              {BtnList.map((btn, index) => {
                const angleRed = (index * angleIncrement * Math.PI) / 180;
                const radius = isLarge
                  ? "calc(20vw - 1rem)"
                  : isMedium
                  ? "calc(30vw - 1rem)"
                  : "calc(40vw - 1rem)";
                const x = `calc(${radius}*${Math.cos(angleRed)})`;
                const y = `calc(${radius}*${Math.sin(angleRed)})`;

                return <NavButton key={btn.label} x={x} y={y} {...btn} />;
              })}
            </motion.div>
          ) : (
            <>
              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="w-full px-2.5 xs:p-0 flex-col items-start space-y-4 xs:w-max flex xs:items-center justify-center relative group"
              >
                {BtnList.slice(0, BtnList.length / 2).map((btn) => {
                  return <NavButton key={btn.label} x={0} y={0} {...btn} />;
                })}
              </motion.div>
              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="w-full px-2.5 xs:p-0 flex-col items-end space-y-4 xs:w-max flex xs:items-center justify-center relative group"
              >
                {BtnList.slice(BtnList.length / 2, BtnList.length).map(
                  (btn) => {
                    return (
                      <NavButton
                        key={btn.label}
                        x={0}
                        y={0}
                        labelDirection="left"
                        {...btn}
                      />
                    );
                  }
                )}
              </motion.div>
            </>
          );
        }}
      </ResponsiveComponent>
    </div>
  );
};

export default Navigation;
