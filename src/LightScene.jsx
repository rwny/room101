

function LightScene() {
   return(
      <>
         <ambientLight intensity={1} />
         <directionalLight 
            position={[-5,10,5]} 
            intensity={2}
            castShadow
            shadow-bias={-0.0002}
            />
         <directionalLight 
            position={[8,10,5]} 
            intensity={2}
            // castShadow 
            // receiveShadow 
            />
      </>
   )
}


export default LightScene
