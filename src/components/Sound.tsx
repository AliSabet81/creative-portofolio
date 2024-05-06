/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const Modal = ({
  onClose,
  toggle,
}: {
  onClose: () => void;
  toggle: () => void;
}) => {
  return createPortal(
    <div className="fixed inset-0 bg-background/60 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-background/20 border border-accent/30 border-solid backdrop-blur-[6px] py-8 px-6 xs:px-10 sm:px-16 rounded shadow-glass-inset text-center space-y-8">
        <p className="font-light">Do you like to play the background music?</p>
        <div className="flex items-center justify-center space-x-4">
          <button
            onClick={toggle}
            className="px-4 py-2 border border-accent/30 border-solid hover:shadow-glass-sm rounded mr-2"
          >
            Yes
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 border border-accent/30 border-solid hover:shadow-glass-sm rounded"
          >
            No
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("my-modal") as HTMLElement
  );
};

const Sound = () => {
  const audioRef = useRef(null);
  const [isPlaying, setisPlaying] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleFirstUserIntraction = () => {
    const consent = localStorage.getItem("musicConsent");
    if (consent === "true" && !isPlaying) {
      (audioRef.current as any).play();
      setisPlaying(true);
    }
    ["click", "keydown", "touchstart"].forEach((event) => {
      document.removeEventListener(event, handleFirstUserIntraction);
    });
  };

  useEffect(() => {
    const consent = localStorage.getItem("musicConsent");
    const consentTime = localStorage.getItem("consentTime");

    if (
      consent &&
      consentTime &&
      new Date(consentTime).getTime() + 3 * 24 * 60 * 60 * 1000 >
        new Date().getTime()
    ) {
      setisPlaying(consent === "true");

      if (consent === "true") {
        ["click", "keydown", "touchstart"].forEach((event) => {
          document.addEventListener(event, handleFirstUserIntraction);
        });
      }
    } else {
      setShowModal(true);
    }
  }, []);

  const toggle = () => {
    const newState = !isPlaying;
    setisPlaying((prev) => !prev);
    newState
      ? (audioRef.current as any).play()
      : (audioRef.current as any).pause();
    localStorage.setItem("musicConsent", String(newState));
    localStorage.setItem("consentTime", new Date().toISOString());
    setShowModal(false);
  };
  return (
    <div className="fixed top-4 right-2.5 xs:right-4 z-50 group">
      {/* {showModal && (
        <Modal onClose={() => setShowModal(false)} toggle={toggle} />
      )} */}
      <audio ref={audioRef} loop>
        <source src={"/audio/fly-me-to-the-moon.mp3"} type="audio/mpeg" />
        your browser does not support the audio element.
      </audio>
      <motion.button
        onClick={toggle}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
        className="w-10 h-10 xs:w-14 xs:h-14 text-foreground rounded-full flex items-center justify-center cursor-pointer z-50 p-2.5 xs:p-4 custom-bg"
        aria-label={"audio"}
        name={"audio"}
      >
        {isPlaying ? (
          <Volume2
            className="w-full h-full text-foreground group-hover:text-accent"
            strokeWidth={1.6}
          />
        ) : (
          <VolumeX
            className="w-full h-full text-foreground group-hover:text-accent"
            strokeWidth={1.6}
          />
        )}
      </motion.button>
    </div>
  );
};

export default Sound;
