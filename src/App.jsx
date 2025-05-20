import { OrbitControls, useGLTF } from '@react-three/drei';
import { useEffect } from 'react';
import "./App.css";

function App() {
  const { scene } = useGLTF('/room01x2.glb');

  useEffect(()=>{
    scene.traverse((object)=>{
      if (object.isMesh) {
        object.castShadow = true
        object.receiveShadow = true
      }
    })
  }, [scene])

  return (
    <>
      <OrbitControls />
      <primitive position={[0, -1.5, 0]} object={scene} dispose={null} />
    </>
  );
}

export default App;