import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { WorldCard } from '../components/WorldCard'
import { useStore } from '../hooks/useStore.js'
import '../styles/scroll.css'

export default function Worlds() {
    const [worlds] = useStore((state) => [state.worlds])
    const [loadWorld] = useStore((state) => [state.loadWorld])
    const [deleteWorld] = useStore((state) => [state.deleteWorld])
    const [selectedWorld, setSelectedWorld] = useState(null)
    const navigate = useNavigate()

    const handleSelectedWorld = (id) => {
        setSelectedWorld(id)
    }

    const handleLoadWorld = () => {
        if (!selectedWorld) return
        loadWorld(selectedWorld)
        navigate('/game/' + selectedWorld)
    }

    const handleDeleteWorld = () => {
        if (!selectedWorld) return
        deleteWorld(selectedWorld)
    }

    return (
        <main className='w-full h-full flex flex-col items-center justify-center bg-[length:100px] bg-dirt bg-repeat bg-pixelated'>
            <div className='w-full h-full flex flex-col items-center '>
                <div className='w-full h-28 flex flex-col items-center justify-center backdrop-brightness-[.25]'>
                    <h2 className='w-fit h-fit text-white text-2xl'>
                        Select World
                    </h2>
                </div>
                <div className='w-full flex flex-1 flex-col items-center backdrop-brightness-[.1]'>
                    {worlds.length === 0 ? (
                        <span className='w-auto h-auto flex flex-col justify-center text-white/50 text-xl mt-6'>
                            You don't have any worlds yet.
                        </span>
                    ) : (
                        <div className='w-full overflow-y-auto overflow-x-hidden px-[30%]'>
                            {worlds.map((world) => (
                                <WorldCard key={world.id} world={world} selectedWorld={selectedWorld} handleSelectedWorld={handleSelectedWorld} />
                            ))}
                        </div>
                    )}
                </div>
                <div className='w-full h-auto flex flex-row flex-wrap items-center justify-center backdrop-brightness-[.25] gap-4 px-[10%] py-6'>
                    <button onClick={handleLoadWorld} className='w-72 h-auto flex items-center justify-center bg-neutral-500 hover:bg-neutral-800 text-white text-xl leading-none border-ridge border-4 py-2'>
                        Play World
                    </button>
                    <Link to='/create' className='w-72 h-auto flex items-center justify-center bg-neutral-500 hover:bg-neutral-800 text-white text-xl leading-none border-ridge border-4 py-2'>
                        Create New World
                    </Link>
                    <button onClick={handleDeleteWorld} className='w-72 h-auto flex items-center justify-center bg-neutral-500 hover:bg-neutral-800 text-white text-xl leading-none border-ridge border-4 py-2'>
                        Delete World
                    </button>
                    <Link to='/' className='w-72 h-auto flex items-center justify-center bg-neutral-500 hover:bg-neutral-800 text-white text-xl leading-none border-ridge border-4 py-2'>
                        Back
                    </Link>
                </div>
            </div>
        </main>
    )
}