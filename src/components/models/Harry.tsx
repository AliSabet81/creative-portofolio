"use client";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Harry(props: any) {
  const { nodes, materials } = useGLTF("/models/scene-transformed.glb");

  const modelRef = useRef();

  useFrame((state, delta, xsFrame) => {
    (modelRef.current as any).position.y =
      -2 + Math.sin(state.clock.elapsedTime) * 0.15;
  });
  return (
    <group
      {...props}
      dispose={null}
      ref={modelRef}
      position={[0, -2, 0]}
      scale={[2, 2, 2]}
      rotation={[0.25, -0.25, 0]}
    >
      <primitive object={nodes.GLTF_created_0_rootJoint} />
      <skinnedMesh
        geometry={(nodes.Object_7 as any).geometry}
        material={materials.Wolf3D_Eye}
        skeleton={(nodes.Object_7 as any).skeleton}
      />
      <skinnedMesh
        geometry={(nodes.Object_9 as any).geometry}
        material={materials.Wolf3D_Eye}
        skeleton={(nodes.Object_9 as any).skeleton}
      />
      <skinnedMesh
        geometry={(nodes.Object_11 as any).geometry}
        material={materials.Wolf3D_Body}
        skeleton={(nodes.Object_11 as any).skeleton}
      />
      <skinnedMesh
        geometry={(nodes.Object_13 as any).geometry}
        material={materials.Wolf3D_Glasses}
        skeleton={(nodes.Object_13 as any).skeleton}
      />
      <skinnedMesh
        geometry={(nodes.Object_15 as any).geometry}
        material={materials.Wolf3D_Hair}
        skeleton={(nodes.Object_15 as any).skeleton}
      />
      <skinnedMesh
        geometry={(nodes.Object_17 as any).geometry}
        material={materials.Wolf3D_Skin}
        skeleton={(nodes.Object_17 as any).skeleton}
      />
      <skinnedMesh
        geometry={(nodes.Object_19 as any).geometry}
        material={materials.Wolf3D_Outfit_Bottom}
        skeleton={(nodes.Object_19 as any).skeleton}
      />
      <skinnedMesh
        geometry={(nodes.Object_21 as any).geometry}
        material={materials.Wolf3D_Outfit_Footwear}
        skeleton={(nodes.Object_21 as any).skeleton}
      />
      <skinnedMesh
        geometry={(nodes.Object_23 as any).geometry}
        material={materials.Wolf3D_Outfit_Top}
        skeleton={(nodes.Object_23 as any).skeleton}
      />
      <skinnedMesh
        geometry={(nodes.Object_25 as any).geometry}
        material={materials.Wolf3D_Teeth}
        skeleton={(nodes.Object_25 as any).skeleton}
      />
    </group>
  );
}

useGLTF.preload("/models/scene-transformed.glb");
