const Box = () => {
  return (
    <mesh rotation={[0, (45 * Math.PI) / 180, 0]}>
      <directionalLight position={[1, 1, 1]} />
      <boxGeometry args={[2, 3, 4]} />
      <meshStandardMaterial color={"blue"} />
    </mesh>
  );
};

export default Box;
