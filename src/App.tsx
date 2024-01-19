import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import { Model } from "./Model";

function App() {
  return (
    <>
      <Canvas>
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 15, 10]} angle={0.3} />
        <Suspense fallback={null}>
          {/* <Box /> */}
          <Model />
        </Suspense>
      </Canvas>
    </>
  );
}

export default App;
