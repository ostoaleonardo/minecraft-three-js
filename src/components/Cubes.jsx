import { useStore } from '../hooks/useStore.js'
import { Cube } from './Cube'

export function Cubes() {
    const [cubes] = useStore((state) => [state.cubes])

    return cubes.map(({ id, position, texture }) => (
        <Cube key={id} id={id} position={position} texture={texture} />
    ))
}
