import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useKeyboard } from '../hooks/useKeyboard'

export function PauseMenu() {
    const { escape } = useKeyboard()
    const [paused, setPaused] = useState(false)

    useEffect(() => {
        if (escape) setPaused(true)

        const handleVisibilityChange = () => {
            if (document.hidden) setPaused(true)
        }

        document.addEventListener('visibilitychange', handleVisibilityChange)
        
        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange)
        }
    }, [escape])

    if (!paused) return null

    return (
        <div className='absolute w-full h-full flex flex-col items-center justify-center bg-black/70 z-50'>
            <div className='w-full h-full flex flex-col items-center '>
                <div className='w-full h-32 flex flex-col items-center justify-center'>
                    <h2 className='w-fit h-fit text-white text-2xl'>
                        Paused
                    </h2>
                </div>
                <div className='w-full h-32 flex flex-row items-center justify-center gap-4'>
                    <button onClick={() => setPaused(false)} className='w-72 h-auto flex items-center justify-center bg-neutral-500 hover:bg-neutral-800 text-white text-xl leading-none border-ridge border-4 py-2'>
                        Resume
                    </button>
                    <Link to='/worlds' className='w-72 h-auto flex items-center justify-center bg-neutral-500 hover:bg-neutral-800 text-white text-xl leading-none border-ridge border-4 py-2'>
                        Save & Quit
                    </Link>
                </div>
            </div>
        </div>
    )
}