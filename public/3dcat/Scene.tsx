import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Object_2: THREE.Mesh;
    Object_3: THREE.Mesh;
  };
  materials: {
    lambert2SG: THREE.MeshStandardMaterial;
  };
  // animations: GLTFAction[]
};

// type ContextType = Record<string, React.ForwardRefExoticComponent<JSX.IntrinsicElements['mesh']>>

export function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("scene.gltf") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.Object_2.geometry}
          material={materials.lambert2SG}
        />
        <mesh
          geometry={nodes.Object_3.geometry}
          material={materials.lambert2SG}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/scene.gltf");
