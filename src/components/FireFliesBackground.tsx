"use client";
import React, { useEffect, useState } from "react";

interface fireFly {
  id: number;
  top: string;
  left: string;
  animationDuration: string;
}

const createFireFly = () => ({
  id: Math.random(),
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  animationDuration: `${Math.random() * 5 + 5}s`,
});

const FireFliesBackground = () => {
  const [fireFlies, setFireFlies] = useState<fireFly[]>([]);

  useEffect(() => {
    const addFireFilyPeriodically = () => {
      const newFirefly = createFireFly();
      setFireFlies((prev) => [...prev.slice(-14), newFirefly]);
    };

    const interval = setInterval(addFireFilyPeriodically, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
      {fireFlies.map((firefly) => {
        return (
          <div
            key={firefly.id}
            className="absolute rounded-full w-[10px] h-[10px] bg-firefly-radial"
            style={{
              top: firefly.top,
              left: firefly.left,
              animation: `move ${firefly.animationDuration} infinite alternate`,
            }}
          ></div>
        );
      })}
    </div>
  );
};

export default FireFliesBackground;
