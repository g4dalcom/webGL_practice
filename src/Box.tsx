import { ThreeElements, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";

const Box = (props: ThreeElements["mesh"]) => {
  // Three-drei 컴포넌트 감싸기
  const mesh = useRef<THREE.Mesh>(null!);

  // Hover 했을 때, 클릭했을 때 상태.
  const [hovered, setHover] = useState<boolean>(false);
  const [active, setActive] = useState<boolean>(false);

  // 회전하게 만들기
  useFrame((state, delta) => (mesh.current.rotation.x += delta));

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        metalness={1}
        color={hovered ? "#ef4444" : "#3b82f6"}
      />
    </mesh>
  );
};

export default Box;
