import { useEffect, useState } from 'react'
import { useKeyboard } from '../hooks/useKeyboard.js'
import { useStore } from '../hooks/useStore.js'
import * as images from '../assets/images/images.js'

export function InventoryBar() {
    const [texture, setTexture] = useStore((state) => [
        state.texture,
        state.setTexture
    ])
    const { dirt, glass, grass, log, wood } = useKeyboard()

    useEffect(() => {
        const options = {
            dirt,
            glass,
            grass,
            log,
            wood
        }

        const selectedTexture = Object.entries(options).find(([, value]) => value)

        if (selectedTexture) {
            const [textureName] = selectedTexture
            setTexture(textureName)
        }

    }, [dirt, glass, grass, log, wood])

    return (
        <section className='inventory-bar'>
            {Object.entries(images).map(([key, value]) => (
                <img
                    key={key}
                    src={value}
                    alt={key}
                    className={`inventory-item ${texture + 'Img' === key && 'selected-item'}`}
                />
            ))}
        </section>
    )
}
