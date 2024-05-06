"use client";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Laptop(props: any) {
  const { nodes, materials } = useGLTF("/models/laptop-transformed.glb");

  const modelRef = useRef();

  useFrame(() => {
    (modelRef.current as any).rotation.y -= 0.0007;
  });
  return (
    <group
      {...props}
      dispose={null}
      ref={modelRef}
      position={[0, -0.5, 0]}
      scale={[0.6, 0.6, 0.6]}
      rotation={[0.2, -0.7, -0.1]}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Object_4 as any).geometry}
        material={materials.PaletteMaterial001}
        position={[-1.199, 0.096, 0]}
        rotation={[0, 0, -1.38]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Object_7 as any).geometry}
        material={materials["Material.004"]}
        position={[-1.199, 0.096, 0]}
        rotation={[0, 0, -1.38]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Object_10 as any).geometry}
        material={materials.PaletteMaterial002}
        position={[-1.199, 0.096, 0]}
        rotation={[0, 0, -1.38]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Object_14 as any).geometry}
        material={materials["Material.009"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Object_16 as any).geometry}
        material={materials["Material.010"]}
      />
    </group>
  );
}

useGLTF.preload("/models/laptop-transformed.glb");
