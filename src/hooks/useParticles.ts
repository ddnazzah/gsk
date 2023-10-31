/*
 * @Author: Dieu-Donne Nazzah
 * @Date: 2023-10-30 16:22:52
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2023-10-30 19:58:09
 */

import { useCallback, useState } from 'react'
import { loadFull } from 'tsparticles'
import type { Container, Engine } from 'tsparticles-engine'

export const useParticles = () => {
    const [isConfettiActive, setIsConfettiActive] = useState(false)

    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine)
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        //await loadFull(engine);
        await loadFull(engine)
    }, [])

    const particlesLoaded = useCallback(async (container?: Container) => {
        console.log(container)
    }, [])

    const handleButtonClick = () => {
        setIsConfettiActive(true)
        setTimeout(() => {
            setIsConfettiActive(false)
        }, 5000) // Confetti will be active for 2 seconds
    }

    return {
        particlesInit,
        particlesLoaded,
        isConfettiActive,
        handleButtonClick,
    }
}
