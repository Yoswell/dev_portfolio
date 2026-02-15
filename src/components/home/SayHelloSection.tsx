import Grainient from '@/components/utils/Grainient'
import { DEV_SKILLS } from '@/constants/DevSkills'
import { TitleSection } from '@/components/utils/TitleSection'
import { TwitterCard } from '@/components/utils/TwitterCard'

type SkillIconProps = {
    src: string | undefined
    alt: string | undefined
}

function CardHeader({
    subTitle,
    text
}: {
    subTitle: string
    text: string
}) {
    return (
        <header className='grid place-items-center p-6 relative'>
            <span className='text-fg3 font-mono text-sm uppercase'>{subTitle}</span>
            <p className='text-fg0'>{text}</p>
        </header>
    )
}

function CardPrimary() {
    const getFavoriteTools = (icon: string) => {
        return {
            src: DEV_SKILLS.find((e) => e.alt == icon)?.src,
            alt: DEV_SKILLS.find((e) => e.alt == icon)?.alt
        }
    }

    function ToolsUse({
        skills,
        description,
        customClass
    }: {
        skills: SkillIconProps
        description: string
        customClass?: string
    }) {
        return (
            <article className={`bg-gradient-to-br from-bg5 via-bg2 to-bg3 rounded-lg p-px overflow-hidden ${customClass}`}>
                <div className='flex items-center gap-2 bg-bg1 rounded-lg p-1'>
                    <figure>
                        <img
                            src={skills.src}
                            alt={skills.alt}
                            className={`
                        w-12
                        bg-gradient-to-b from-bg0 to-bg2 border border-br2 rounded-lg shadow-inner shadow-br1 p-2
                        brightness-90
                    `}
                        />
                    </figure>
                    <div>
                        <h5 className='text-fg0 text-xl font-2'>{skills.alt}</h5>
                        <p className='max-w-[25ch] text-fg3 text-sm truncate'>{description}</p>
                    </div>
                </div>
            </article>
        )
    }

    return (
        <article className={`
            shadow-card lg:h-[260px] md:h-[300px] h-[300px] bg-gradient-to-t from-violet-400/10 via-bg1 to-bg1 border border-br3 rounded-2xl
            relative overflow-hidden group
            before:absolute before:top-0 before:left-0 before:w-full before:h-full 
            before:bg-[url('/banners/squares.svg')] before:bg-[length:50px_50px]
        `}>
            <CardHeader
                subTitle='USES'
                text='Check out my favorite tools'
            />
            <div className='absolute -bottom-4 -right-2 grid gap-2 items-end'>
                <ToolsUse
                    skills={getFavoriteTools('docker')}
                    description='Building reactive interfaces with strong architectural patterns, minimizing attack surface while maintaining smooth UX.'
                />
                <ToolsUse
                    skills={getFavoriteTools('obsidian')}
                    description='Write notes and documents in a distraction-free environment.'
                    customClass='translate-x-10'
                />
                <ToolsUse
                    skills={getFavoriteTools('vite')}
                    description='Main development framework for building web applications.'
                />
            </div>
        </article>
    )
}

function CardSecondary() {
    return (
        <article className='shadow-card lg:h-[260px] md:h-[300px] h-[300px] bg-bg1/50 border border-br3 rounded-2xl relative overflow-hidden'>
            <CardHeader
                subTitle='Guestbook'
                text='Let me know you were here'
            />
            <div className='w-full h-full flex items-center justify-center gap-2 border-b border-br2 relative overflow-hidden'>
                <TwitterCard
                    className='w-52 bg-bg0/50 backdrop-blur-md absolute lg:-bottom-5 bottom-5 right-15 -rotate-12'
                    name='Andrea'
                    username='andrev'
                    banner='/banners/blogs/mountain-2.jpg'>
                    Wow, I really like how you organized everything, it feels modern and easy to explore.
                </TwitterCard>

                <TwitterCard
                    className='w-52 bg-bg0/50 backdrop-blur-md absolute lg:bottom-10 bottom-20 -right-4'
                    name='Carlos'
                    username='carl_dev'
                    banner='/banners/blogs/mountain-4.jpg'>
                    This portfolio is awesome, great animations and a very smooth user experience!
                </TwitterCard>
            </div>

            <Grainient
                className="absolute top-0 lef-0 w-full h-full -z-10"
                color1="#a57fff"
                color2="#080808"
                color3="#ff7f96"
                timeSpeed={0.25}
                colorBalance={-0.72}
                warpStrength={1}
                warpFrequency={5}
                warpSpeed={2}
                warpAmplitude={50}
                blendAngle={30}
                blendSoftness={0.05}
                rotationAmount={500}
                noiseScale={2}
                grainAmount={0.1}
                grainScale={1}
                grainAnimated={false}
                contrast={1}
                gamma={0.9}
                centerX={0}
                centerY={0}
                zoom={1}
            />
        </article>
    )
}

function CardTerciary() {
    const AlbumCoverCard = ({
        srcAlbumCover,
        name,
        text
    }: {
        srcAlbumCover: string,
        name: string,
        text: string,
    }) => (
        <article className='w-full flex items-center gap-3'>
            <picture>
                <img
                    src={`/banners/thumb/${srcAlbumCover}`}
                    alt='Music album cover'
                    className={`
                        w-10 aspect-square bg-bg0 border border-br3 rounded-lg p-px
                        saturate-50 
                        group-hover:saturate-100 transition-all
                    `}
                />
            </picture>
            <div>
                <h5 className='text-fg0 font-medium max-w-[20ch] truncate'>{name}</h5>
                <p className='text-fg2 text-sm max-w-[28ch] truncate'>{text}</p>
            </div>
        </article>
    )
    return (
        <article className={`
            shadow-card lg:h-[260px] md:h-[300px] h-[300px] bg-gradient-to-t from-rose-400/10 via-bg1 to-bg1 border border-br3 rounded-2xl
            relative overflow-hidden group
            before:absolute before:top-0 before:left-0 before:w-full before:h-full 
            before:bg-[url('/banners/squares.svg')] before:bg-[length:50px_50px]
        `}>
            <div className='grid gap-2 p-6 relative'>
                <header className='flex items-center gap-2 relative'>
                    <picture>
                        <img
                            src='/icons/brands/spotify.svg'
                            className='w-6 aspect-square'
                            alt='Spotify icon'
                        />
                    </picture>
                    <h4 className='text-fg0 text-lg font-medium'>Last played</h4>
                </header>
                <article>
                    <p className='text-fg3'>
                        My weekly update of the <strong>most played</strong> tracks right now, here are <strong>some</strong> of the best.
                    </p>
                </article>
                <footer className='grid gap-2 mt-4'>
                    <AlbumCoverCard
                        srcAlbumCover='depression.jpg'
                        name='Depression'
                        text='Dax • 62M plays'
                    />
                    <AlbumCoverCard
                        srcAlbumCover='sunflower.jpg'
                        name='Sunflower (Spider-Man: Into the Spider-Verse)'
                        text='Post Malone & Swae Lee • 3.9B plays Spider-Man: Into the Spider-Verse (Soundtrack From & Inspired by the Motion Picture)'
                    />
                    <AlbumCoverCard
                        srcAlbumCover='seven-years.jpg'
                        name='7 Years'
                        text='Lukas Graham • 3.2B plays'
                    />
                    <AlbumCoverCard
                        srcAlbumCover='red-vineyard.jpg'
                        name=' Red Vineyard'
                        text='Video • Diggy Graves • 14M views'
                    />
                </footer>
            </div>
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