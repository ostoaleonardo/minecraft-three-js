import { useState } from 'react'
import { useBox } from '@react-three/cannon'
import { useStore } from '../hooks/useStore.js'
import * as textures from '../assets/images/textures.js'

export function Cube({ id, position, texture }) {
    const [isHovered, setIsHovered] = useState(false)
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
        if (event.button === 2) {
            event.stopPropagation()
            removeCube(id)
        }
    }

    return (
        <mesh
            ref={ref}
            onClick={handleClick}
            onPointerMove={handleHover}
            onPointerOut={handleUnhover}
        >
            <boxGeometry attach='geometry' />
            <meshStandardMaterial map={activeTexture} attach='material' color={isHovered ? 'grey' : 'white'} />
        </mesh>
    )
}
