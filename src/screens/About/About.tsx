/*
 * @Author: Dieu-Donne Nazzah
 * @Date: 2023-10-29 04:29:14
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2023-11-06 23:38:25
 */

// import img from '@assets/images/5026563.jpg
import AnimatedPage from '@components/AnimatedPage'
import Commitments from '@components/Commitments'
import Contributions from '@components/Contributions'
import Header from '@components/Header'
import { fontawesome } from '@config/particles'
import { useParticles } from '@hooks/useParticles'
import gsk from 'assets/images/gsk.png'
import { AnimatePresence, motion } from 'framer-motion'
import Particles from 'react-tsparticles'
import img from '../../assets/images/5026563.svg'

export default function About() {
    const { particlesInit, particlesLoaded } = useParticles()

    const container = {
        show: {
            transition: {
                delayChildren: 0.4,
                staggerChildren: 0.35,
            },
        },
    }

    const image = {
        hidden: { opacity: 0, y: 200 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                ease: 'easeInOut',
                duration: 1.6,
                delay: 1,
            },
        },
        exit: {
            opacity: 0,
            y: -200,
            transition: {
                ease: 'easeInOut',
                duration: 0.8,
            },
        },
    }

    const info = {
        hidden: { opacity: 0, y: 200 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                ease: 'easeInOut',
                duration: 1.6,
                delay: 3.5,
            },
        },
        exit: {
            opacity: 0,
            y: -200,
            transition: {
                ease: 'easeInOut',
                duration: 0.8,
            },
        },
    }

    const banner = {
        hidden: { opacity: 0, y: 200 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                ease: 'easeInOut',
                duration: 1.6,
                delay: 3,
            },
        },
        exit: {
            opacity: 0,
            y: -200,
            transition: {
                ease: 'easeInOut',
                duration: 0.8,
            },
        },
    }

    const vote = {
        hidden: { opacity: 0, x: -200 },
        show: {
            opacity: 1,
            x: 0,
            transition: {
                ease: 'easeInOut',
                duration: 1.6,
                delay: 1.3,
            },
        },
        exit: {
            opacity: 0,
            x: -200,
            transition: {
                ease: 'easeInOut',
                duration: 0.8,
            },
        },
    }

    return (
        <AnimatedPage>
            <div style={styles.background}>
                <AnimatePresence>
                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate="show"
                        exit="exit"
                    >
                        <Header />
                        <Particles
                            id="tsparticles"
                            options={fontawesome}
                            init={particlesInit}
                            loaded={particlesLoaded}
                        />

                        <div className="relative isolate px-6 py-32 lg:px-8">
                            <div className="mx-auto max-w-7xl lg:px-8">
                                <div className=" grid  grid-cols-1 rounded bg-slate-50 shadow">
                                    <Contributions />
                                    <Commitments />
                                </div>
                            </div>
                        </div>

                        <motion.div
                            className="fixed bottom-0 left-0 z-10 text-gray-200"
                            variants={info}
                        >
                            <div className="w-10 lg:w-40">
                                <div className="relative flex flex-col items-center">
                                    <ul className="list-outside">
                                        <li className="mt-5  hover:text-yellow-500">
                                            <a
                                                href="https://www.linkedin.com/in/griffith-selorm-klogo-0997b568/?originalSubdomain=gh"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="-7.5 0 32 32"
                                                    strokeWidth="1.5"
                                                    stroke="currentColor"
                                                    className="h-4 w-4"
                                                >
                                                    <title>linkedin</title>
                                                    <path d="M0.92 11.32c-0.48 0-0.84 0.36-0.84 0.84v11.76c0 0.48 0.36 0.84 0.84 0.84s0.84-0.36 0.84-0.84v-11.76c0-0.48-0.36-0.84-0.84-0.84zM1.84 8.16c0 0.508-0.412 0.92-0.92 0.92s-0.92-0.412-0.92-0.92c0-0.508 0.412-0.92 0.92-0.92s0.92 0.412 0.92 0.92zM15.28 11.68c-1.8-0.96-4.44-0.28-8.040 2v-1.52c0-0.48-0.36-0.84-0.84-0.84s-0.84 0.36-0.84 0.84v11.76c0 0.48 0.36 0.84 0.84 0.84s0.84-0.36 0.84-0.84v-8.24c4.52-3.12 6.48-2.92 7.24-2.52 1.040 0.56 1.040 2.080 1.040 2.080v8.68c0 0.48 0.36 0.84 0.84 0.84s0.84-0.36 0.84-0.84v-8.64c0-0.12 0-2.56-1.92-3.6z" />
                                                </svg>
                                            </a>
                                        </li>
                                        <li className="mt-5 hover:text-yellow-500">
                                            <a
                                                href="https://scholar.google.com/citations?user=640fpxgAAAAJ&hl=en"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                    stroke="currentColor"
                                                    className="h-4 w-4"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                                                    />
                                                </svg>
                                            </a>
                                        </li>
                                        <li className="mt-5 hover:text-yellow-500">
                                            <a
                                                href="https://webapps.knust.edu.gh/staff/dirsearch/profile/summary/5ef130eb3176.html"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                    stroke="currentColor"
                                                    className="h-4 w-4"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                                                    />
                                                </svg>
                                            </a>
                                        </li>
                                        <ul className="mt-4 h-5 w-2 border-r border-gray-400 md:h-60"></ul>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            className="fixed bottom-0 right-0 z-10 text-gray-200"
                            variants={info}
                        >
                            <div className="w-10 lg:w-40">
                                <div className="relative flex flex-col items-center">
                                    <a
                                        href="mailto:gsklogo.coe@knust.edu.gh"
                                        className="writing-vrl relative inline-flex items-center text-xs tracking-wide hover:text-yellow-500"
                                    >
                                        gsklogo.coe@knust.edu.gh
                                        <div className="mt-4 h-5 w-1 border-l border-gray-400 md:h-60"></div>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </AnimatedPage>
    )
}

const styles: { [key: string]: React.CSSProperties } = {
    background: {
        minHeight: '100vh',
        background: `linear-gradient(96deg, rgba(29,62,26,1) 0%, rgba(55,116,50,0.7) 50%, rgba(16,92,30,1) 100%), url(${img})`,
    },
    gskBackground: {
        background: `url(${gsk})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundPosition: 'bottom right',
    },
}
