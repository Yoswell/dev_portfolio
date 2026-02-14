import { Tooltip } from '@/components/nav/Tooltip'
import { Link } from 'react-router-dom'

interface TabProps {
    to: string
    tabText: string
    icon?: string
    toolText: string
    toolCustomClass: string
}

interface NavArticleProps {
    children: React.ReactNode
}

const Tab = ({ to, tabText, icon, toolText, toolCustomClass }: TabProps) => {
    return (
        <Link
            to={to}
            className='tooltip-content flex items-center gap-2'>
            {icon &&
                <i className={`${icon} text-fg0`}></i>
            }
            <span className='text-fg0 font-medium'>{tabText}</span>
            <Tooltip customClass={toolCustomClass}>{toolText}</Tooltip>
        </Link>
    )
}

const NavArticle = ({ children }: NavArticleProps) => {
    return (
        <div className='flex items-center gap-6'>
            {children}
        </div>
    )
}

const ThemeToggle = () => {
    return (
        <button
            className='tooltip-content flex items-center justify-center rounded-lg'
            aria-label='Switch theme'>
            <i className='fa-solid fa-circle-half-stroke text-fg0 text-xl' aria-hidden="true"></i>
            <Tooltip customClass='-bottom-[45px] right p-right p-bottom'>
                Switch theme
            </Tooltip>
        </button>
    )
}

const leftNavItems: TabProps[] = [
    {
        to: '/',
        tabText: 'Home',
        icon: 'fa-regular fa-house',
        toolText: 'Go to home page',
        toolCustomClass: '-bottom-[45px] left p-left p-bottom'
    },
    {
        to: '/about',
        tabText: 'About',
        icon: 'fa-regular fa-circle-user',
        toolText: 'Go to about page',
        toolCustomClass: '-bottom-[45px] center p-center p-bottom'
    },
    {
        to: '/work',
        tabText: 'Work',
        icon: 'fa-solid fa-dolly',
        toolText: 'Go to work page',
        toolCustomClass: '-bottom-[45px] center p-center p-bottom'
    },
    {
        to: '/blog',
        tabText: 'Blog',
        icon: 'fa-regular fa-note-sticky',
        toolText: 'Go to blog page',
        toolCustomClass: '-bottom-[45px] center p-center p-bottom'
    }
]

const rightNavItems: TabProps[] = [
    {
        to: '/contact',
        tabText: 'Book a Call',
        toolText: 'Go to contact page',
        toolCustomClass: '-bottom-[45px] right p-right p-bottom'
    }
]

export function Navigation() {
    return (
        <header className={`
            w-full m-auto backdrop-blur-sm border-b border-br1/30 
            py-4 fixed top-0 left-1/2 -translate-x-1/2 z-50
        `}>
            <div className='w-full max-w-7xl m-auto flex items-center justify-between'>
                <span 
                    className='grid place-content-center place-items-center w-[18px] md:w-[26px] lg:w-[28px]' 
                    aria-label='Site logo'>
                    <i className='fa-brands fa-flutter text-fg0 text-xl -rotate-90' aria-hidden="true" />
                </span>

                <nav className='w-full max-w-2xl bg-bg4/50 backdrop-blur-md border border-br4 rounded-xl py-2 px-4'>
                    <div className='flex justify-between items-center relative z-10'>
                        <NavArticle>
                            {leftNavItems.map((item, index) => (
                                <Tab key={`left-nav-${index}`} {...item} />
                            ))}
                        </NavArticle>
                        <NavArticle>
                            {rightNavItems.map((item, index) => (
                                <Tab key={`right-nav-${index}`} {...item} />
                            ))}
                        </NavArticle>
                    </div>
                </nav>
                
                <span className='grid place-content-center place-items-center w-[18px] md:w-[26px] lg:w-[28px]'>
                    <ThemeToggle />
                </span>
            </div>
        </header>
    )
}