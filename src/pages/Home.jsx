import { Link } from 'react-router-dom'
import { splashTexts } from '../constants/splash.js'
import logoImg from '../assets/images/minecraft.svg'

export default function Home() {
    return (
        <main className='w-full h-full flex flex-col items-center justify-center bg-cover bg-background'>
            <div className='w-full h-full flex flex-col items-center backdrop-blur-sm'>
                <div className='relative w-2/5 h-auto flex flex-col items-center justify-center overflow-visible mt-16'>
                    <img src={logoImg} alt='logo' className='w-full h-auto' />
                    <span className='absolute bottom-2 -right-20 w-fit h-fit text-[yellow] text-3xl text-shadow -rotate-[20deg] animate-pulse'>
                        {splashTexts[Math.floor(Math.random() * splashTexts.length)]}
                    </span>
                </div>
                <Link to='/worlds' className='w-1/3 h-auto flex items-center justify-center bg-neutral-500 hover:bg-neutral-800 text-white text-2xl leading-none border-ridge border-4 mt-20 py-2'>
                    Play
                </Link>
            </div>
            <div className='absolute bottom-0 w-full h-fit flex items-center justify-between px-2'>
                <span className='text-white w-fit text-center text-xl'>
                    Minecraft 1.0.0
                </span>
                <span className='text-white w-fit text-center text-xl'>
                    With React and Three.js
                </span>
            </div>
        </main>
    )
}