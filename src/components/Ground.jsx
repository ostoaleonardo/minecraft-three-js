import { usePlane } from '@react-three/cannon'
import { grassTexture } from '../assets/images/textures.js'
import { useStore } from '../hooks/useStore.js'

export function Ground() {
    const [addCube] = useStore((state) => [state.addCube])
    const [ref] = usePlane(() => ({
        rotation: [-Math.PI / 2, 0, 0],
        position: [0, -0.5, 0]
    }))
    grassTexture.repeat.set(200, 200)

    const handleClickGround = (event) => {
        event.stopPropagation()
        const [x, y, z] = Object.values(event.point).map((coord) =>
            Math.ceil(coord)
        )
        addCube(x, y, z)
    }

    return (
        <mesh
            ref={ref}
            onClick={handleClickGround}
        >
            <planeGeometry attach='geometry' args={[100, 100]} />
            <meshStandardMaterial attach='material' map={grassTexture} />
        </mesh>
    )
}
