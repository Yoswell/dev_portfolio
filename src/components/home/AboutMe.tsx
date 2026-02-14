import { Globe } from "@/components/ui/globe"
import { Fireflies } from "@/components/utils/Fireflies"
import { TitleGradientCard } from "../utils/TitleGradientCard"

export const AboutMe = () => (
    <section className='grid grid-cols-2 gap-10 bg-bg1'>
        <div className='grid gap-4 p-6'>
            <div className='grid gap-2'>
                <span className='text-fg3 font-mono text-sm uppercase'>Know about me</span>
                <h2 className='text-fg0 font-1 text-5xl'>
                    Pentester,<br /> Full-Stack Developer<br /> and a litle bit of<br /><em className='title-gradient-r text-5xl'>everything</em>
                </h2>
            </div>

            <p className='text-fg2 mt-2'>
                Specializing in building robust, secure, and high-performance web applications from concept to deployment.
                Driven by a passion for solving complex problems, I thrive on transforming intricate requirements into elegant, user-centric solutions.
                I am always eager to face new challenges and am deeply committed to my continuous growth as both a developer and a security professional
                in the ever-evolving world of secure software engineering.
            </p>

            <p className='text-fg2'>
                With strong experience in React, .NET and Python, I combine software development with cybersecurity expertise to design solutions that
                are scalable, efficient, and resilient against modern threats.
            </p>

            <em className='text-fg2'>
                Let's connect to discuss how I can contribute to your next project.
            </em>
        </div>

        <div className={`
            w-full h-full bg-gradient-to-t from-sky-500/10 via-bg1 to-bg1 border-dashed border-l border-br3 relative overflow-hidden
            before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[url("/banners/squares.svg")] before:bg-[length:50px_50px]     
        `}>
            <Fireflies />

            <div className="relative">
                <TitleGradientCard 
                    title="Time zone communication" 
                    subtitle="I'm very flexible with time zones, I live in Costa Rica, UTC-6 or GTM-6, but I'm available for remote work in different time zones." 
                    titleColor="text-gradient-blue-b"
                />
            </div>
            <Globe className="top-28" />

        </div>
    </section>
)