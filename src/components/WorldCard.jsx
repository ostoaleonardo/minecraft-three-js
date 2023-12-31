import * as images from '../assets/images/images.js'

export function WorldCard({ world, selectedWorld, handleSelectedWorld }) {
    return (
        <button
            onClick={() => handleSelectedWorld(world.id)}
            className={`w-full h-20 flex flex-row items-center border-[3px] border-transparent hover:border-white ${selectedWorld === world.id && 'border-white/50'} p-3 gap-4`}
        >
            <img src={images.grassImg} alt='logo' className='w-auto h-full aspect-square bg-pixelated' />
            <div className='w-full h-full flex flex-1 flex-col items-start justify-center'>
                <span className='w-fit h-fit text-white text-2xl'>{world.name}</span>
                <span className='w-fit h-fit text-white/50 text-2xl'>{world.lastPlayed || ''}</span>
            </div>
        </button>
    )
}