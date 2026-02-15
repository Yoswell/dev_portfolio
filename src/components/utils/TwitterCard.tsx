import type { ReactNode } from 'react'

export const TwitterCard = ({
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
        <article className={`border border-br2 rounded-2xl flex flex-col overflow-hidden ${className}`}>
            {/* Phone inset border */}
            <div className='absolute top-0 left-1/2 -translate-x-1/2 w-10 h-2 bg-bg1 rounded-b-xl z-10'></div>
            {/* Banner background */}
            <picture>
                <img
                    src={banner}
                    alt={banner.split('.')[0]}
                    className='w-full h-20 object-cover border-b border-br2 brightness-90'
                />
            </picture>
            {/* User info */}
            <div className='grid p-4 -mt-12'>
                <span
                    className={`
                        w-14 aspect-square grid place-content-center border-2 border-br1 rounded-lg mb-2
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