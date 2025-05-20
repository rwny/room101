import { OrbitControls, useGLTF } from '@react-three/drei';
import { useEffect } from 'react';
import * as THREE from 'three';
import "./App.css";

function App() {
  const { scene } = useGLTF('/room01x2.glb');

  useEffect(() => {
    scene.traverse((object) => {
      if (object.isMesh) {
        object.castShadow = true;
        object.receiveShadow = true;
      }
    });
  }, [scene]);

  useEffect(() => {
    scene.traverse((object) => {
      if (object.isMesh) {
        object.onPointerOver = (event) => {
          const position = new THREE.Vector3();
          event.object.getWorldPosition(position);
          window.updateSidebar(event.object.name, position);
        };
        object.onPointerOut = () => {
          window.updateSidebar("Hover over an object", { x: 0, y: 0, z: 0 });
        };
        object.onClick = (event) => {
          const position = new THREE.Vector3();
          event.object.getWorldPosition(position);
          window.updateSidebar(event.object.name, position);
        };
      }
    });
  }, [scene]);

  return (
    <>
        <OrbitControls />
        <primitive position={[0, -1.5, 0]} object={scene} dispose={null} />
    </>
  );
}

export default App;
