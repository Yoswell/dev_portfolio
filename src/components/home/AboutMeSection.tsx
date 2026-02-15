import { Fireflies } from '@/components/utils/Fireflies'
import { Tooltip } from '../nav/Tooltip'

export const AboutMeSection = () => (
    <section className='grid grid-cols-2 bg-bg1'>
        {/* Left side */}
        <div className='flex flex-col items-start gap-4 p-6'>
            <header className='grid gap-2'>
                <span className='text-fg3 font-mono text-sm uppercase'>Know about me</span>
                <h2 className='text-fg0 font-1 text-5xl'>
                    Pentester,<br /> Full-Stack Developer<br /> and a litle bit of<br /><em className='title-gradient-r text-5xl'>everything</em>
                </h2>
            </header>

            <p className='text-fg2 mt-2'>
                Full-Stack and Penetration Tester specializing in building robust, secure, and high-performance web applications from concept to deployment.
                Driven by a passion for solving complex problems, I thrive on transforming intricate requirements into elegant, user-centric solutions.
            </p>
            <p className='text-fg2 mt-2'>
                I am always eager to face new challenges and am deeply committed to my continuous growth as both a developer and a security professional
                in the ever-evolving world of secure software engineering.
            </p>

            <p className='text-fg2'>
                With strong experience in React, .NET and Python, I combine software development with cybersecurity expertise to design solutions that
                are scalable, efficient, and resilient against modern threats.
            </p>

            <article className='flex items-center gap-2'>
                <a
                    href='#'
                    className='tooltip-content'>
                    <span className='text-sky-300'>LinkedIn</span>
                    <Tooltip customClass='-top-[35px] left p-left p-top'>
                        Leave and go to LinkedIn profile
                    </Tooltip>
                </a>
                <span className='text-fg2'>~</span>
                <a
                    href='#'
                    className='tooltip-content'>
                    <span className='text-sky-300'>Discord</span>
                    <Tooltip customClass='-top-[35px] left p-left p-top'>
                        Leave and go to Discord profile
                    </Tooltip>
                </a>
                <span className='text-fg2'>~</span>
                <a
                    href='#'
                    className='tooltip-content'>
                    <span className='text-sky-300'>GitHub</span>
                    <Tooltip customClass='-top-[35px] left p-left p-top'>
                        Leave and go to GitHub profile
                    </Tooltip>
                </a>
            </article>

            <footer>
                <button className='flex items-center gap-2 group'>
                    <span className='text-fg0 font-mono tracking-tight'>Work experience</span>
                    <span className='w-7 aspect-square bg-bg2 border border-br3 rounded-md relative overflow-hidden'>
                        <i className={`
                            fa-solid fa-arrow-right text-fg0 text-sm w-full h-full
                            absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2
                            group-hover:translate-x-6 transition-all duration-500
                        `}></i>

                        <i className={`
                            fa-solid fa-arrow-right text-fg0 text-sm w-full h-full
                            absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-10
                            group-hover:-translate-x-1/2 transition-all duration-500
                        `}></i>
                    </span>
                </button>
            </footer>
        </div>

        {/* Right side */}
        <div className={`
            w-full h-full flex flex-col items-end justify-end bg-gradient-to-t from-sky-500/10 via-bg1 to-bg1 border-dashed border-l border-br3 relative overflow-hidden
            before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[url('/banners/squares.svg')] before:bg-[length:50px_50px]     
        `}>
            <Fireflies />
            
            <div className={`
                absolute -bottom-5 -right-5
                before:absolute before:top-8 before:-left-5 before:w-full before:h-full before:bg-bg2 before:z-10
                before:border before:border-t-br4 before:border-l-br4 before:border-br3 before:rounded-t-2xl
                before:outline before:outline-1 before:outline-br3 before:outline-offset-4
            `}>
                <picture>
                    <img 
                        src='banners/me/me-ecsc-2.avif' 
                        alt='Me at ECSC 2025'
                        className={`
                            relative w-[300px] h-[380px] border border-br3 rounded-t-2xl z-10
                            rotate-3 object-cover object-left-top aspect-square saturate-0 brightness-90
                        `} 
                    />
                </picture>
            </div>

            <div className='w-full grid place-items-center bg-bg0/50 backdrop-blur-md border-t border-br3 p-6 relative z-10'>
                <span className='text-fg3 text-sm uppercase font-mono tracking-tight'>
                    Remote
                </span>
                <h3 className='text-fg1 tracking-wide'>
                    Costa Rica
                </h3>
            </div>
        </div>
    </section>
)
