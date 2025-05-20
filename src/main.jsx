import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Canvas } from '@react-three/fiber'

import App from './App.jsx'
import LightScene from './LightScene.jsx'

createRoot(document.getElementById('root')).render(
  <Canvas 
    camera={{ 
        position: [5, 5, 5],
        fov: 35,
        near: 0.1,
        far: 100,
    }}>
    
    <App />
    <LightScene/>
  </Canvas>
)
