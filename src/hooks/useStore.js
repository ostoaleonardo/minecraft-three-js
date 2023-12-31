import { create } from 'zustand'

export const useStore = create(set => ({
    texture: 'dirt',
    cubes: [{
        id: crypto.randomUUID(),
        position: [0, 0, 0],
        texture: 'dirt',
    }],
    addCube: (x, y, z) => {
        set(state => ({
            cubes: [...state.cubes, {
                id: crypto.randomUUID(),
                position: [x, y, z],
                texture: state.texture,
            }],
        }))
    },
    removeCube: (id) => {
        set(state => ({
            cubes: state.cubes.filter(cube => cube.id !== id),
        }))
    },
    setTexture: (texture) => {
        set(() => ({ texture }))
    },
    saveWorld: () => {},
    resetWorld: () => { },
}))
