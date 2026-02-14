import { DEV_SKILLS } from '@/constants/DevSkills'
import { TitleSection } from '@/components/utils/TitleSection'
import type { ReactNode } from 'react'

type SkillIconProps = {
    src: string | undefined
    alt: string | undefined
}

function CardFooter({
    subTitle,
    text
}: {
    subTitle: string
    text: string
}) {
    return (
      <footer className="grid place-items-center p-6">
        <span className="text-fg3 font-mono text-sm uppercase">{subTitle}</span>
        <p className="text-fg0">{text}</p>
      </footer>
    )
}

function CardPrimary() {
    const getFavoriteTools = (icon: string) => {
        return {
            src: DEV_SKILLS.find((e) => e.alt == icon)?.src,
            alt: DEV_SKILLS.find((e) => e.alt == icon)?.alt
        }
    }

    const FAVORITE_TOOLS = [
        getFavoriteTools('docker'),
        getFavoriteTools('obsidian'),
        getFavoriteTools('vs-code'),
        getFavoriteTools('visual-studio'),
        getFavoriteTools('vim'),
    ]

    function ToolsUse({ 
        skills, 
        size 
    }: { 
        skills: SkillIconProps
        size: number 
    }) {
        return (
            <figure className='border border-br2 rounded-xl z-10'>
                <img
                    src={skills.src}
                    alt={skills.alt}
                    className={`
                        ${size === 24 ? 'max-w-[90px] min-w-[90px]' : 'max-w-[70px] min-w-[70px]'} 
                        bg-gradient-to-b from-bg0 to-bg2 border-br3 rounded-xl shadow-inner shadow-br1 p-4
                    `}
                />
            </figure>
        )
    }

    return (
        <article className='shadow-card bg-bg1/50 border border-br3 rounded-xl overflow-hidden '>
            <div className={`
                w-full lg:h-[180px] h-[220px] flex items-center justify-center gap-2 border-b border-br2 relative overflow-hidden
                before:absolute before:top-0 before:left-0 before:w-full before:h-full
                before:bg-[url('/banners/squares.svg')] before:bg-[length:50px_50px]
            `}>
                {FAVORITE_TOOLS.map((item, index) => (
                    index === 2 ? (
                        <ToolsUse
                            skills={item}
                            size={24}>
                        </ToolsUse>
                    ) : (
                        <ToolsUse
                            skills={item}
                            size={0}>
                        </ToolsUse>
                    )
                ))}
            </div>
            <CardFooter
                subTitle='USES'
                text='Check out my favorite tools'
            />
        </article>
    )
}

function CardSecondary() {
    const TestimonialCard = ({
        name,
        username,
        banner,
        className,
        children,
    }: {
        name: string
        username: string
        banner: string
        className?: string
        children: ReactNode
    }) => {
        return (
            <article className={`bg-bg1 border border-br2 rounded-2xl flex flex-col overflow-hidden ${className}`}>
                {/* Phone inset border */}
                <div className='absolute top-0 left-1/2 -translate-x-1/2 w-10 h-2 bg-bg1 rounded-b-xl z-10'></div>
                
                <picture>
                    <img
                        src={banner}
                        alt={banner.split('.')[0]}
                        className='w-full h-20 object-cover border-b border-br2 brightness-90'
                    />
                </picture>
                <div className='grid p-4 -mt-12'>
                    <span
                        className={`
                            w-14 aspect-square grid place-content-center border-2 border-br1 rounded-xl mb-2
                            saturate-0 brightness-90
                        `}
                        style={{
                            backgroundImage: `url(${banner})`,
                            backgroundSize: '100px 100px',
                        }}>
                            
                        <h1 className='text-3xl text-black font-1 font-extrabold'>{name.slice(0, 1)}</h1>
                    </span>

                    <span className='text-fg0 font-semibold'>{name}</span>
                    <span className='text-sky-300 text-sm'>@{username}</span>

                    <footer className='mt-2'>
                        <p className='text-fg2 text-sm'>{children}</p>
                    </footer>
                </div>
            </article>
        )
    }

    return (
        <article className='shadow-card bg-bg1/50 border border-br3 rounded-2xl overflow-hidden '>
            <div className='w-full lg:h-[180px] h-[220px] flex items-center justify-center gap-2 border-b border-br2 relative overflow-hidden'>
                <TestimonialCard
                    className='w-52 absolute lg:-bottom-32 -bottom-24 right-15 -rotate-12'
                    name='Andrea'
                    username='andrev'
                    banner='/banners/blogs/mountain-2.jpg'>
                    Wow, I really like how you organized everything, it feels modern and easy to explore.
                </TestimonialCard>

                <TestimonialCard
                    className='w-52 absolute lg:-bottom-16 -bottom-3 -right-4'
                    name='Carlos'
                    username='carl_dev'
                    banner='/banners/blogs/mountain-4.jpg'>
                    This portfolio is awesome, great animations and a very smooth user experience!
                </TestimonialCard>
            </div>
            <CardFooter
                subTitle='Guestbook'
                text='Let me know you were here'
            />
        </article>
    )
}

function CardTerciary() {
    return (
        <article className={`
            shadow-card w-full h-full bg-gradient-to-t from-lime-400/10 via-bg1 to-bg1 border border-br3 rounded-2xl
            relative overflow-hidden group
            before:absolute before:top-0 before:left-0 before:w-full before:h-full 
            before:bg-[url("/banners/squares.svg")] before:bg-[length:50px_50px]
        `}>
            <div className='grid gap-2 p-6'>
                <header className='flex items-center gap-2 relative'>
                    <picture>
                        <img
                            src='/icons/brands/spotify.svg'
                            className='w-6 aspect-square'
                            alt='Envelope icon representing email contact option'
                        />
                    </picture>
                    <h4 className='text-fg0 text-lg font-medium'>
                        Last played
                    </h4>
                </header>
                <article className='relative'>
                    <p className='text-fg3 leading-7'>
                        <strong>Red Vineyard</strong> by Diggy Gaves. I think I'm seeing ghosts again <strong>In my home</strong>.
                    </p>
                </article>
            </div>

            <picture>
                <img
                    src='/banners/thumb/depression-dax.jpg'
                    className={`
                        w-56 h-48 object-cover border border-br3 rounded-md
                        absolute lg:-bottom-14 -bottom-10 left-1/2 -translate-x-1/2
                        group-hover:-bottom-16 transition-all duration-300
                    `}
                    alt='Envelope icon representing email contact option'
                />
            </picture>
        </article>
    )
}

export const SayHelloSection = () => (
    <section>
        <TitleSection
            headSubtitle='My site'
            title='Explore, experiment'
            highLight='&& say hello'
            customClass='grid'
        />

        <hr />

        <div className='grid grid-cols-3 gap-2 p-2'>
            <CardPrimary />
            <CardSecondary />
            <CardTerciary />
        </div>
    </section>
)