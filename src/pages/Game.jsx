import { Sky } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Physics } from '@react-three/cannon'
import { FPV } from '../components/FPV.jsx'
import { Cubes } from '../components/Cubes.jsx'
import { Player } from '../components/Player.jsx'
import { Ground } from '../components/Ground.jsx'
import { Cursor } from '../components/Cursor.jsx'
import { InventoryBar } from '../components/InventoryBar.jsx'

export default function Game() {
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