import { Link } from 'react-router-dom'

const GENERAL_LINKS = [
    { to: '/', text: 'Home' },
    { to: '/projects', text: 'Projects' },
    { to: '/about', text: 'About' },
    { to: '/blog', text: 'Blog' },
    { to: '/contact', text: 'Contact' }
]

const PROJECT_LINKS = [
    { to: '/projects/boofuzz', text: 'Boofuzz' },
    { to: '/projects/zsh_tsark_autocomplete', text: 'zsh_tsark_autocomplete' },
    { to: '/projects/cute-pets', text: 'Cute Pets' },
    { to: '/projects/se-lo-chaneo', text: 'Se Lo Chaneo' }
]

const SOCIAL_LINKS = [
    { href: 'https://linkedin.com', text: 'LinkedIn' },
    { href: 'https://github.com', text: 'Github' },
    { href: 'https://discord.com', text: 'Discord' }
]

const AnchorLink = ({ href, children }: { href: string; children: React.ReactNode }) =>
    <a href={href} target='_blank' rel='noopener noreferrer'>{children}</a>

const GridSectionLinks = ({ titleSection, children }: { titleSection: string; children: React.ReactNode[] }) => (
    <div className='flex flex-col items-start gap-3'>
        <h5 className='text-fg0'>{titleSection}</h5>
        <ul className='grid gap-1 text-fg3'>{children.map((item, i) => <li key={i}>{item}</li>)}</ul>
    </div>
)

export function Footer() {
    return (
        <footer className='max-w-7xl m-auto grid border-t border-x border-br2'>
            <div className='grid grid-cols-[auto_1fr]'>
                <div className='flex flex-col items-start gap-4 border-r border-br2 p-4 md:p-6'>
                    <i className='fa-brands fa-flutter text-fg0 text-xl -rotate-90'></i>
                    <p className='max-w-[30ch] text-fg2'>Full-Stack and Penetration Tester specializing in building robust, secure, and high-performance web applications from concept to deployment.</p>
                </div>
                <div className='grid grid-cols-3 gap-4 md:p-6 p-4'>
                    <GridSectionLinks titleSection='General Pages'>
                        {GENERAL_LINKS.map((l, i) => (
                            <Link key={`g-${i}`} to={l.to}>{l.text}</Link>
                        ))}
                    </GridSectionLinks>

                    <GridSectionLinks titleSection='Made Projects'>
                        {PROJECT_LINKS.map((l, i) => (
                            <Link key={`p-${i}`} to={l.to}>{l.text}</Link>
                        ))}
                    </GridSectionLinks>

                    <GridSectionLinks titleSection='Social Medias'>
                        {SOCIAL_LINKS.map((l, i) => (
                            <AnchorLink key={`s-${i}`} href={l.href}>{l.text}</AnchorLink>
                        ))}
                    </GridSectionLinks>
                </div>
            </div>

            <div className='flex items-center justify-center gap-1 border-t border-br2 p-4'>
                <span className='text-fg3 text-sm'>Built with curiosity by</span>
                <a href='#' className='text-sky-300 text-sm'>@me</a>
            </div>

            <div className='hr-full' />
            <div className='w-full h-10 bg-[url("/banners/lines.svg")] bg-[length:60px_60px]' />
        </footer>
    )
}

