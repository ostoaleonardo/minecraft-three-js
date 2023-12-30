import { Physics } from '@react-three/cannon'
import { Sky } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Ground } from './components/Ground.jsx'
import { FPV } from './components/FPV.jsx'
import { Player } from './components/Player.jsx'
import { Cursor } from './components/Cursor.jsx'
import { Cubes } from './components/Cubes.jsx'
import { InventoryBar } from './components/InventoryBar.jsx'

function App() {
    return (
        <>
            <Canvas>
                <Sky />
                <ambientLight />
                <FPV />
                <Physics>
                    <Cubes />
                    <Player />
                    <Ground />
                </Physics>
            </Canvas>
            <InventoryBar />
            <Cursor />
        </>
    )
}

export default App
