import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
// import Box from "./Box";
import { Model } from "./Model";

function App() {
  return (
    <>
      <Canvas>
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Suspense fallback={null}>
          {/* <Box /> */}
          <Model />
          <Environment preset="park" background></Environment>
        </Suspense>
      </Canvas>
    </>
  );
}

export default App;
