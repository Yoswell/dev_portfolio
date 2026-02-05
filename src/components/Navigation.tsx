import { ThemeIcon } from '@/components/Icons'
import { Tooltip } from '@/components/Tooltip'
import { BoxThemeSetting } from '@/constants/constants'
import { Link } from 'react-router-dom'

export function Navigation () {
    function TabIcon({to, icon, tabText, toolText, toolCustomClass}: {to: string, icon: string, tabText: string, toolText: string, toolCustomClass: string}) {
        return (
            <Link to={to} className='tooltip-content flex items-center gap-2 z-10'>
                <i className={`${icon} text-fg0 text-sm font-bold`}></i>
                <span className='text-fg0'>{tabText}</span>
                <Tooltip customClass={toolCustomClass}>{toolText}</Tooltip>
            </Link>
        )
    }

    function Tab({to, tabText, toolText, toolCustomClass}: {to: string, tabText: string, toolText: string, toolCustomClass: string}) {
        return (
            <Link to={to} className='tooltip-content flex items-center gap-2 z-10'>
                <span className='text-fg0'>{tabText}</span>
                <Tooltip customClass={toolCustomClass}>{toolText}</Tooltip>
            </Link>
        )
    }

    return (
        <header className='w-full sticky top-6'>
            <div className='blur'></div>
            <nav className='max-w-nav m-auto flex justify-between bg-bg0 border border-br3 rounded-lg py-3 px-4 relative'>
                <div className='flex items-center gap-4'>
                    <TabIcon
                        to='/'
                        icon='fa-regular fa-house'
                        tabText='Home'
                        toolText='Open home box'
                        toolCustomClass='top-14 left'>
                    </TabIcon>

                    <TabIcon
                        to='/about'
                        icon='fa-regular fa-user'
                        tabText='About'
                        toolText='Go to about page'
                        toolCustomClass='top-14 center'>
                    </TabIcon>

                    <TabIcon
                        to='/blog'
                        icon='fa-solid fa-book-open'
                        tabText='Blog'
                        toolText='Go to blog page'
                        toolCustomClass='top-14 center'>
                    </TabIcon>
                </div>

                <div className='flex items-center gap-4'>
                    <Tab
                        to='/feedback'
                        tabText='Feedback'
                        toolText='Give some feedback'
                        toolCustomClass='top-14 center'>
                    </Tab>

                    <TabIcon
                        to='/contact'
                        icon='fa-regular fa-envelope-open'
                        tabText='Book a Call'
                        toolText='Go to contact page'
                        toolCustomClass='top-14 right'>
                    </TabIcon>

                    <button className='h-7 tooltip-content hidden'>
                        <span>
                            <ThemeIcon customClass='text-fg0 stroke-2 size-4' />
                        </span>

                        <div className='absolute top-12 right-0 bg-bg1 border border-br3 rounded p-2 pr-4'>
                            <ul className='grid gap-2'>
                                {BoxThemeSetting.map((item, index) => (
                                    <li key={index}>
                                        <button className='flex items-center gap-2'>
                                            <i className={`${item.icon} p w-7 min-h-6 grid place-content-center text-fg2 text-xs bg-bg1 border border-br3 rounded`}></i>
                                            <span className='whitespace-nowrap text-fg0 text-sm'>{item.text}</span>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <Tooltip customClass='top-14 right'>Switch theme</Tooltip>
                    </button>
                </div>

                <div className='lines-svg w-[200px] h-full absolute top-0 right-0 z-0 rounded-lg'>
                    <div className='w-full h-full bg-[url(/Lines.svg)] bg-[length:80px_80px] bg-repeat'></div>
                </div>
            </nav>
        </header>
    )
}