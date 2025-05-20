import { OrbitControls, useGLTF } from '@react-three/drei'
import "./App.css"

function App() {
  const { scene } = useGLTF('/room01x2.glb')
  return (
    <>
      <OrbitControls />
      <primitive position={[0,-1.5,0]} object={scene} dispose={null} />
    </>
  )
}

export default App
