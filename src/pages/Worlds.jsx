import { Link } from 'react-router-dom'

function WorldCard({ world }) {
    return (
        <div className='w-1/2 h-20 flex flex-row items-center border-white border-2 p-3 gap-4'>
            <img src='/src/assets/images/grass.jpg' alt='logo' className='w-auto h-full aspect-square' />
            <div className='w-full h-full flex flex-col items-start justify-center'>
                <span className='w-fit h-fit text-white text-2xl'>{world.name}</span>
                <span className='w-fit h-fit text-white/50 text-2xl'>{world.lastPlayed}</span>
            </div>
        </div>
    )
}

export default function Worlds() {
    return (
        <main className='w-full h-full flex flex-col items-center justify-center bg-[length:100px] bg-dirt bg-repeat bg-pixelated'>
            <div className='w-full h-full flex flex-col items-center '>
                <div className='w-full h-32 flex flex-col items-center justify-center overflow-visible backdrop-brightness-[.25]'>
                    <h2 className='w-fit h-fit text-white text-2xl'>
                        Select World
                    </h2>
                </div>
                <div className='w-full h-full flex flex-col items-center backdrop-brightness-[.1] py-2'>
                    <WorldCard world={{ name: 'World 1', lastPlayed: '31/12/2023, 1:30pm' }} />
                </div>
                <div className='w-full h-32 flex flex-row items-center justify-center gap-4 backdrop-brightness-[.25]'>
                    <Link to='/game' className='w-72 h-auto flex items-center justify-center bg-neutral-500 hover:bg-neutral-800 text-white text-xl leading-none border-ridge border-4 py-2'>
                        Play World
                    </Link>
                    <Link to='/' className='w-72 h-auto flex items-center justify-center bg-neutral-500 hover:bg-neutral-800 text-white text-xl leading-none border-ridge border-4 py-2'>
                        Back
                    </Link>
                </div>
            </div>
        </main>
    )
}