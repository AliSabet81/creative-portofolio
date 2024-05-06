"use client";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Headphone(props: any) {
  const { nodes, materials } = useGLTF(
    "/models/about/headphone-transformed.glb"
  );
  const modelRef = useRef();

  useFrame(() => {
    (modelRef.current as any).rotation.y += 0.0007;
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
        geometry={(nodes.Object_5 as any).geometry}
        material={materials.hphplastic2}
        skeleton={(nodes.Object_5 as any).skeleton}
      />
      <skinnedMesh
        geometry={(nodes.Object_6 as any).geometry}
        material={materials.foam}
        skeleton={(nodes.Object_6 as any).skeleton}
      />
      <skinnedMesh
        geometry={(nodes.Object_7 as any).geometry}
        material={materials.hphplastic1}
        skeleton={(nodes.Object_7 as any).skeleton}
      />
      <skinnedMesh
        geometry={(nodes.Object_8 as any).geometry}
        material={materials.metal}
        skeleton={(nodes.Object_8 as any).skeleton}
      />
    </group>
  );
}

useGLTF.preload("/models/about/headphone-transformed.glb");
