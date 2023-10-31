import type { ISourceOptions } from 'tsparticles-engine'

const options: ISourceOptions = {
    name: 'Font Awesome',
    interactivity: {
        events: {
            onClick: {
                enable: true,
                mode: 'push',
            },
            onHover: {
                enable: true,
                mode: 'repulse',
            },
        },
        modes: {
            push: {
                quantity: 4,
            },
            repulse: {
                distance: 200,
                duration: 0.4,
            },
        },
    },
    particles: {
        color: {
            value: 'rgba(244, 244, 0, 0.1)',
        },
        links: {
            blink: false,
            color: 'rgba(244, 244, 0, 0.1)',
            consent: false,
            distance: 150,
            enable: true,
            opacity: 0.4,
            shadow: {
                blur: 5,
                color: 'lime',
                enable: false,
            },
            width: 1,
        },
        move: {
            direction: 'none',
            enable: true,
            speed: 2,
        },
        number: {
            density: {
                enable: true,
            },
            limit: 0,
            value: 80,
        },
        opacity: {
            animation: {
                enable: true,
                speed: 1,
                sync: false,
            },
            value: {
                min: 0.1,
                max: 0.5,
            },
        },
        shape: {
            options: {
                char: [
                    {
                        fill: true,
                        font: 'Font Awesome 5 Free',
                        style: '',
                        value: ['\uf164'],
                        weight: '400',
                    },
                    {
                        fill: true,
                        font: 'Font Awesome 5 Free',
                        style: '',
                        value: ['\uf164'],
                        weight: '400',
                    },
                ],
            },
            type: 'char',
        },
        stroke: {
            color: 'rgba(244, 244, 0, 0.1)',
            width: 1,
        },
        size: {
            value: 10,
        },
    },
    pauseOnBlur: true,
    background: {
        color: 'transparent',
        image: '',
        position: '50% 50%',
        repeat: 'no-repeat',
        size: 'cover',
    },
    detectRetina: true,
}

export default options
