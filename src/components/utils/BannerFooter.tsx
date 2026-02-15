import Grainient from '@/components/utils/Grainient'
import ShinyText from '@/components/utils/ShinyText'
import { TitleSection } from '@/components/utils/TitleSection'
import { Link } from 'react-router-dom'

export const BannerFooterX = () => (
    <section>
        <TitleSection
            headSubtitle='Contact me'
            title="I'ts time to "
            highLight='connect'
        />

        <hr />

        <section className='grid gap-2 p-2'> 
            <div className='grid place-items-center gap-6 border border-br3 rounded-lg py-10 relative overflow-hidden'>
                <picture>
                    <img src='/banners/cards/fly.svg' className='brightness-200 saturate-0' />
                </picture>

                <i className='fa-brands fa-flutter text-fg0 text-4xl absolute top-24 left-1/2 -translate-x-1/2 -rotate-90'></i>

                <ShinyText
                    text='Try hard, and never stop exploring'
                    speed={3}
                    delay={0}
                    shineColor='#ffffff'
                    spread={120}
                    direction='left'
                    yoyo={false}
                    pauseOnHover={false}
                    disabled={false}
                    className='text-5xl font-1 text-center -mt-10'
                />

                <Grainient
                    className='absolute top-0 lef-0 w-full h-full -z-10'
                    color1='#252525'
                    color2='#080808'
                    color3='#151515'
                    timeSpeed={0.25}
                    colorBalance={-0.72}
                    warpStrength={1}
                    warpFrequency={5}
                    warpSpeed={2}
                    warpAmplitude={50}
                    blendAngle={20}
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

                <Link
                    to='/contact'
                    className='flex items-center gap-4 bg-bg1 border border-br3 rounded-xl py-2 pl-4 pr-2 mt-2'>
                    <span className='text-fg0'>Get in touch, book a call</span>
                    <span className='w-7 aspect-square flex items-center justify-center bg-white rounded-lg'>
                        <i className='fa-solid fa-arrow-right text-black text-sm'></i>
                    </span>
                </Link>

                <footer className='grid gap-4'>
                    <h3 className='text-fg0 text-xl font-semibold text-center'>
                        I'm available for full-time roles & freelance projects
                    </h3>

                    <h4 className='max-w-[40ch] m-auto text-fg2 text text-center'>
                        I thrive on crafting dynamic web applications, and
                        delivering seamless user experiences
                    </h4>
                </footer>
            </div>

            <div className='flex items-center justify-between'>
                <code className='text-fg3 text-sm font-mono'>{`{\\}`}</code>
                <span className='text-fg3 text-sm font-mono'>&copy 2026</span>
            </div>
        </section>
    </section>
)