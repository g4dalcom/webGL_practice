const Box = () => {
  return (
    <mesh rotation={[0, (45 * Math.PI) / 180, 0]}>
      <directionalLight position={[-1, 0, 1]} intensity={0.5} />
      <boxGeometry args={[3, 3, 3]} />
      <meshStandardMaterial attach={"material"} color={"magenta"} />
    </mesh>
  );
};

export default Box;
