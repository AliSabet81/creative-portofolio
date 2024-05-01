"use client";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Headphone(props) {
  const { nodes, materials } = useGLTF(
    "/models/about/headphone-transformed.glb"
  );
  const modelRef = useRef();

  useFrame(() => {
    modelRef.current.rotation.y += 0.0007;
  });
  return (
    <group
      {...props}
      dispose={null}
      ref={modelRef}
      rotation={[0.08, 0, 0.01]}
      position={[0, -8.5, 0]}
      scale={[0.06, 0.06, 0.06]}
    >
      <primitive object={nodes._rootJoint} />
      <skinnedMesh
        geometry={nodes.Object_5.geometry}
        material={materials.hphplastic2}
        skeleton={nodes.Object_5.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Object_6.geometry}
        material={materials.foam}
        skeleton={nodes.Object_6.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Object_7.geometry}
        material={materials.hphplastic1}
        skeleton={nodes.Object_7.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Object_8.geometry}
        material={materials.metal}
        skeleton={nodes.Object_8.skeleton}
      />
    </group>
  );
}

useGLTF.preload("/models/about/headphone-transformed.glb");
