import { useEffect, useState } from 'react'

const ACTIONS_KEYBOARD = {
    KeyW: 'moveForward',
    KeyS: 'moveBackward',
    KeyA: 'moveLeft',
    KeyD: 'moveRight',
    Space: 'jump',
    Digit1: 'dirt',
    Digit2: 'glass',
    Digit3: 'grass',
    Digit4: 'log',
    Digit5: 'wood',
}

export function useKeyboard() {
    const [actions, setActions] = useState({
        moveLeft: false,
        moveRight: false,
        moveForward: false,
        moveBackward: false,
        jump: false,
        dirt: false,
        glass: false,
        grass: false,
        log: false,
        wood: false,
    })

    useEffect(() => {
        const handleKeydown = (event) => {
            const { code } = event
            const action = ACTIONS_KEYBOARD[code]

            if (action) {
                setActions((actions) => ({
                    ...actions,
                    [action]: true,
                }))
            }
        }

        const handleKeyup = (event) => {
            const { code } = event
            const action = ACTIONS_KEYBOARD[code]

            if (action) {
                setActions((actions) => ({
                    ...actions,
                    [action]: false,
                }))
            }
        }

        document.addEventListener('keydown', handleKeydown)
        document.addEventListener('keyup', handleKeyup)

        return () => {
            document.removeEventListener('keydown', handleKeydown)
            document.removeEventListener('keyup', handleKeyup)
        }
    }, [])

    return actions
}
