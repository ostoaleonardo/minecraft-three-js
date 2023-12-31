import { Link, useNavigate } from 'react-router-dom'
import { useStore } from '../hooks/useStore'
import { useState } from 'react'

export default function CreateWorld() {
    const [createWorld] = useStore((state) => [state.createWorld])
    const [worldName, setWorldName] = useState('')
    const navigate = useNavigate()

    const handleCreateWorld = () => {
        if (!worldName) return

        createWorld(worldName)
        navigate('/worlds')
    }

    return (
        <main className='w-full h-full flex flex-col items-center justify-center bg-[length:100px] bg-dirt bg-repeat bg-pixelated'>
            <div className='w-full h-full flex flex-col items-center '>
                <div className='w-full h-28 flex flex-col items-center justify-center backdrop-brightness-[.25]'>
                    <h2 className='w-fit h-fit text-white text-2xl'>
                        Create New World
                    </h2>
                </div>
                <div className='w-full flex flex-1 flex-col items-center justify-center backdrop-brightness-[.1] py-2'>
                    <label className='w-1/3 h-auto flex flex-col justify-center text-white/50 text-xl gap-1 focus-within:text-white'>
                        World Name:
                        <input
                            type='text'
                            placeholder='New World'
                            onChange={(e) => setWorldName(e.target.value)} value={worldName}
                            className='w-full h-10 bg-neutral-900 text-white placeholder:text-white/30 text-xl leading-none border-ridge border-4 px-1 py-2'
                        />
                    </label>
                    <span className='w-1/3 h-auto flex flex-col justify-center text-white/50 text-xl mt-6'>
                        You are going to create an empty world.
                    </span>
                </div>
                <div className='w-full h-auto flex flex-row flex-wrap items-center justify-center backdrop-brightness-[.25] gap-4 px-[10%] py-6'>
                    <button onClick={handleCreateWorld} className='w-72 h-auto flex items-center justify-center bg-neutral-500 hover:bg-neutral-800 text-white text-xl leading-none border-ridge border-4 py-2'>
                        Create World
                    </button>
                    <Link to='/worlds' className='w-72 h-auto flex items-center justify-center bg-neutral-500 hover:bg-neutral-800 text-white text-xl leading-none border-ridge border-4 py-2'>
                        Cancel
                    </Link>
                </div>
            </div>
        </main>
    )
}