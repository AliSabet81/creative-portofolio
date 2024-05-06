"use client";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Mouse(props:any) {
  const { nodes, materials } = useGLTF("/models/about/mouse-transformed.glb");
  const modelRef = useRef();

  return (
    <group
      {...props}
      dispose={null}
      ref={modelRef}
      rotation={[1.2, -1.4, -0.2]}
      position={[4, -0.7, 0]}
      scale={[0.001, 0.0005, 0.001]}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Plane001_Material002_0 as any).geometry}
        material={materials["Material.002"]}
        position={[2.113, -311.093, 130.453]}
        rotation={[-Math.PI / 2, -0.031, Math.PI / 2]}
        scale={[159.237, 159.237, 170.519]}
      />
    </group>
  );
}

useGLTF.preload("/models/about/mouse-transformed.glb");
