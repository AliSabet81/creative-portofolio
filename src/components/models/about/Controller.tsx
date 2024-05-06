"use client";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Controller(props: any) {
  const { nodes, materials } = useGLTF(
    "/models/about/controller-transformed.glb"
  );
  const modelRef = useRef();

  return (
    <group
      {...props}
      dispose={null}
      ref={modelRef}
      rotation={[0.3, 0, 0]}
      position={[-3.6, -1, 0]}
      scale={[0.008, 0.008, 0.008]}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes["Plane002_10_-_Default_0"] as any).geometry}
        material={materials.PaletteMaterial001}
        position={[29.883, 16.402, 1.471]}
        rotation={[-0.56, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes["Plane002_16_-_Default_0"] as any).geometry}
        material={materials.PaletteMaterial002}
        position={[29.883, 16.402, 1.471]}
        rotation={[-0.56, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Box001_clear_0 as any).geometry}
        material={materials.PaletteMaterial003}
        position={[-43.195, 46.596, -4.752]}
        rotation={[-0.56, 0, 0]}
        scale={[1.727, 1.727, 0.504]}
      />
    </group>
  );
}

useGLTF.preload("/models/about/controller-transformed.glb");
