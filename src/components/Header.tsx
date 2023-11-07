/*
 * @Author: Dieu-Donne Nazzah
 * @Date: 2023-10-29 04:49:56
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2023-11-07 00:15:43
 */
import useStrawVote from '@hooks/useStrawVote'
import { motion } from 'framer-motion'
import logo from '../assets/images/knustlogo.png'

function Header() {
    const container = {
        show: {
            transition: {
                staggerChildren: 0.35,
                delayChildren: 0.4,
            },
        },
    }

    const item = {
        hidden: { opacity: 0, x: 200 },
        show: {
            opacity: 1,
            x: 0,
            transition: {
                ease: 'easeInOut',
                duration: 1,
                delay: 3.5,
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

    const { votes } = useStrawVote()

    const renderVotes = () => {
        if (!votes) {
            return (
                <a
                    href="#"
                    className="relative inline-flex items-center text-xs tracking-wide"
                >
                    Be the first to cast a shaw vote
                    <div className="ml-4 h-1 w-60 border-b border-gray-400"></div>
                </a>
            )
        }

        return (
            <a
                href="#"
                className="relative inline-flex items-center text-xs tracking-wide"
            >
                <span className="absolute inline-flex h-10 w-10 animate-ping rounded-full bg-red-300  opacity-25 duration-100"></span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-6 w-6 text-red-300"
                >
                    <path d="M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23h-.777zM2.331 10.977a11.969 11.969 0 00-.831 4.398 12 12 0 00.52 3.507c.26.85 1.084 1.368 1.973 1.368H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 01-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227z" />
                </svg>
                <span className="mr-1 text-lg text-red-300">{votes}</span>
                straw votes
                <div className="ml-4 h-1 w-5 border-b border-gray-400 md:w-60"></div>
            </a>
        )
    }

    return (
        <header className="absolute inset-x-0 top-0 z-40">
            <nav
                className="flex items-center justify-between p-6 lg:px-20"
                aria-label="Global"
            >
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                >
                    <div className="flex lg:flex-1">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img className="h-16 w-auto" src={logo} alt="" />
                        </a>
                    </div>
                    {/* <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div> */}
                    <div className="hidden lg:flex lg:gap-x-12">
                        {/* {navigation.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-sm font-semibold leading-6 text-gray-900"
                        >
                            {item.name}
                        </a>
                    ))} */}
                    </div>
                    {/* <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <a
                        href="#"
                        className="text-sm font-semibold leading-6 text-gray-900"
                    >
                        Log in <span aria-hidden="true">&rarr;</span>
                    </a>
                </div> */}
                    <div className="absolute right-0 top-10 z-10 text-gray-200">
                        <div className="w-90">
                            <motion.div
                                className="relative flex items-center"
                                variants={item}
                            >
                                {renderVotes()}
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </nav>
        </header>
    )
}

export default Header
