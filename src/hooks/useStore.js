import { create } from 'zustand'

export const useStore = create(set => ({
    texture: 'dirt',
    cubes: [],
    worlds: JSON.parse(localStorage.getItem('worlds')) || [],
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
    createWorld: (worldName) => {
        const world = {
            id: crypto.randomUUID(),
            name: worldName,
            cubes: [],
            lastPlayed: new Date().toLocaleString('en-GB', {
                dateStyle: 'short',
                timeStyle: 'short',
                'hour12': true,
            }),
        }

        const worlds = localStorage.getItem('worlds') ? JSON.parse(localStorage.getItem('worlds')) : []
        localStorage.setItem('worlds', JSON.stringify([...worlds, world]))

        set(() => ({
            worlds: JSON.parse(localStorage.getItem('worlds')),
        }))
    },
    saveWorld: (id) => {
        const worlds = JSON.parse(localStorage.getItem('worlds'))
        const world = worlds.find(world => world.id === id)
        world.cubes = useStore.getState().cubes
        world.lastPlayed = new Date().toLocaleString('en-GB', {
            dateStyle: 'short',
            timeStyle: 'short',
            'hour12': true,
        })
        
        localStorage.setItem('worlds', JSON.stringify(worlds))

        set(() => ({
            worlds: JSON.parse(localStorage.getItem('worlds')),
        }))
    },
    loadWorld: (id) => {
        const world = JSON.parse(localStorage.getItem('worlds')).find(world => world.id === id)
                
        set(() => ({
            cubes: world.cubes,
        }))
    },
    deleteWorld: (id) => {
        const worlds = JSON.parse(localStorage.getItem('worlds'))
        localStorage.setItem('worlds', JSON.stringify(worlds.filter(world => world.id !== id)))

        set(() => ({
            worlds: JSON.parse(localStorage.getItem('worlds')),
        }))
    },
}))
