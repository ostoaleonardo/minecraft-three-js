import { useState } from 'react'
import { useBox } from '@react-three/cannon'
import { useStore } from '../hooks/useStore.js'
import * as textures from '../assets/images/textures.js'

export function Cube({ id, position, texture }) {
    const [isHovered, setIsHovered] = useState(false)
    const [addCube] = useStore((state) => [state.addCube])
    const [removeCube] = useStore((state) => [state.removeCube])
    const [ref] = useBox(() => ({
        type: 'Static',
        position
    }))

    const activeTexture = textures[texture + 'Texture']

    const handleHover = (event) => {
        event.stopPropagation()
        setIsHovered(true)
    }

    const handleUnhover = (event) => {
        event.stopPropagation()
        setIsHovered(false)
    }

    const handleClick = (event) => {
        event.stopPropagation()
        switch (event.button) {
            case 0:
                return handleLeftClick(event)
            case 2:
                return handleRightClick()
            default:
                return
        }
    }

    const handleLeftClick = (event) => {
        const [x, y, z] = Object.values(event.point).map((coord) =>
            Math.ceil(coord)
        )
        addCube(x, y, z)
    }

    const handleRightClick = () => {
        removeCube(id)
    }

    return (
        <mesh
            ref={ref}
            onClick={handleClick}
            onPointerMove={handleHover}
            onPointerOut={handleUnhover}
        >
            <boxGeometry attach='geometry' />
            <meshStandardMaterial transparent map={activeTexture} attach='material' color={isHovered ? 'grey' : 'white'} />
        </mesh>
    )
}
