import { HashTag } from '@/components/HashTag'
import { TitleTag } from '@/components/TitleTag'
import { useEffect, useState } from 'react'

// === DATA ===
const SKILLS = [
    { path: "Bash.svg", name: "Bash" }, { path: "CS.svg", name: "C#" },
    { path: "Discord.svg", name: "Discord" }, { path: "Docker.svg", name: "Docker" },
    { path: "DotNet.svg", name: ".NET" }, { path: "Github.svg", name: "Github" },
    { path: "GitLab.svg", name: "GitLab" }, { path: "Git.svg", name: "Git" },
    { path: "GoLang.svg", name: "Go" }, { path: "HTML.svg", name: "HTML" },
    { path: "JavaScript.svg", name: "JavaScript" }, { path: "Java.svg", name: "Java" },
    { path: "Kali.svg", name: "Kali" }, { path: "LinkedIn.svg", name: "LinkedIn" },
    { path: "Linux.svg", name: "Linux" }, { path: "Powershell.svg", name: "Powershell" },
    { path: "Python.svg", name: "Python" }, { path: "React.svg", name: "React" },
    { path: "TailwindCSS.svg", name: "Tailwind" }, { path: "TypeScript.svg", name: "TypeScript" },
    { path: "Windows.svg", name: "Windows" }, { path: "CSS.svg", name: "CSS" },
    { path: "Gmail.svg", name: "Gmail" }, { path: "Idea.svg", name: "Idea" },
    { path: "Markdown.svg", name: "Markdown" }, { path: "VisualStudio.svg", name: "Visual Studio" },
    { path: "Vite.svg", name: "Vite" }, { path: "VSCode.svg", name: "VS Code" },
]

interface JobData {
    workJoinedDate: string; brandIcon: string; workCompany: string;
    workTitle: string; workParagraph: string[]; skillsLearned: string[];
}

const JOBS: JobData[] = [
    {
        workJoinedDate: 'May/2025 - present', brandIcon: '/logos/ibm-logo.svg', workCompany: 'IBM',
        workTitle: 'X-Force Red Penetration Tester Intern',
        workParagraph: [
            `As a <strong>Penetration Tester Intern</strong> at IBM's <strong>X-Force Red</strong> team,
            I conduct comprehensive penetration tests on web applications, internal networks,
            and IT infrastructure. I regularly use industry-standard tools such as <strong>Burp Suite</strong>, <strong>Kali Linux</strong>,
            and <strong>Metasploit</strong> to simulate real-world attack scenarios and provide actionable recommendations.`,
            `Developed a <strong>desktop</strong> application to streamline common penetration testing <strong>workflows</strong> and serve 
            as an educational tool for understanding <strong>attack vectors</strong>`,
            `Identify and exploit vulnerabilities in computer systems and applications.`
        ],
        skillsLearned: ['Kali', 'Slack', 'Java', 'Salesforce', 'Github', 'Burp Suite']
    },
    {
        workJoinedDate: 'Jun/2025 - present', brandIcon: '/logos/punisher-logo.svg', workCompany: 'Distance State University',
        workTitle: 'Volunteer University Tutor',
        workParagraph: [
            `As a <strong>University Tutor</strong>, I provide personalized <strong>virtual support sessions</strong>
            to students across various <strong>programming</strong> languages, helping them grasp complex concepts and
            complete coding assignments effectively.`,
            `Help students understand complex concepts and complete practical exercises.`
        ],
        skillsLearned: ['OBS', 'C Sharp', 'Visual Studio', 'Dotnet', 'Outlook']
    },
]

const EXPERIENCES: JobData[] = [
    {
        workJoinedDate: 'Jun/2025 - present', brandIcon: '/logos/github-logo.svg', workCompany: 'Github',
        workTitle: 'Open Source Contributor',
        workParagraph: [
            `Contributed to open-source projects with <strong>5K+ Github stars</strong>, improving code quality and documentation.`,
            `Engaged with collaborating on innovative solutions.`
        ],
        skillsLearned: ['Go', 'Bash', 'React', 'Python']
    },
]

interface GithubStatsTotals { [year: string]: number }

// === COMPONENTS ===
const Section = ({ children }: { children: React.ReactNode }) => <section className="grid gap-4 p-6 md:p-10">{children}</section>

const BannerImage = () => <div className="banner-image grid place-content-start grid-cols-[repeat(auto-fill,2px)] gap-[2px]" />

const PageInfo = () => (
    <div className="mt-40">
        <BannerImage />
        <TitleTag>About page</TitleTag>
    </div>
)

const JobCard = ({ workJoinedDate, brandIcon, workCompany, workTitle, workParagraph, skillsLearned }: JobData) => (
    <article className="flex flex-col items-start gap-4">
        <span className="text-fg3 uppercase text-sm">{workJoinedDate}</span>
        <div className="flex items-center gap-3">
            <img src={brandIcon} alt={workCompany} className="w-11 bg-bg0 border border-br3 object-cover rounded-lg p-2" />
            <h3 className="text-fg0 font-1 text-2xl">{workCompany}</h3>
        </div>
        <h3 className="text-fg0 text-lg font-medium">{workTitle}</h3>
        <ul className="grid gap-2 list-disc text-fg3 ml-6">
            {workParagraph.map((item, i) => <li key={i} dangerouslySetInnerHTML={{ __html: item }} />)}
        </ul>
        <div className="flex gap-2 flex-wrap">
            {skillsLearned.map((item, i) => <HashTag key={i}>{item}</HashTag>)}
        </div>
    </article>
)

const Section1 = () => (
    <Section>
        <div className="flex gap-2 flex-wrap">
            <HashTag>About me</HashTag><HashTag>Experience</HashTag><HashTag>Pages</HashTag>
        </div>
        <h1 className="text-fg0 font-1 text-5xl font-semibold">I'm Yoswel, you can call me VIsh0k</h1>
        <div className="grid gap-4">
            <p className="text-fg2">Full-Stack and Penetration Tester specializing in building robust, secure, and high-performance web applications from concept to deployment. Driven by a passion for solving complex problems, I thrive on transforming intricate requirements into elegant, user-centric solutions. I am always eager to face new challenges and am deeply committed to my continuous growth as both a developer and a security professional in the ever-evolving world of secure software engineering.</p>
            <p className="text-fg2">With strong experience in React, .NET and Python, I combine software development with cybersecurity expertise to design solutions that are scalable, efficient, and resilient against modern threats.</p>
            <em className="text-fg2">Let's connect to discuss how I can contribute to your next project.</em>
        </div>
    </Section>
)

const Section2 = () => (
    <Section>
        <h2 className="text-fg0 font-1 text-4xl font-semibold">Professional Work Experience</h2>
        <div className="grid gap-10">{JOBS.map((job, i) => <JobCard key={i} {...job} />)}</div>
    </Section>
)

const Section3 = () => (
    <Section>
        <h2 className="text-fg0 font-1 text-4xl font-semibold">Particular Experience</h2>
        <div className="grid gap-8">{EXPERIENCES.map((job, i) => <JobCard key={i} {...job} />)}</div>
    </Section>
)

const Section4 = () => {
    const [totalContributions, setTotalContributions] = useState<GithubStatsTotals>({})
    const username = 'Yoswell'

    useEffect(() => {
        const fetchGitHubStats = async () => {
            try {
                const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}`)
                const data = await res.json()
                setTotalContributions(data.total || {})
            } catch (error) { console.error('Error fetching GitHub stats:', error) }
        }
        fetchGitHubStats()
    }, [username])

    const currentContributions = [2024, 2025, 2026].reduce((sum, year) => sum + (totalContributions[year] || 0), 0)

    const StatCard = ({ icon, title = "", subtitle, desc, atName }: { icon: string; title?: string; subtitle: string; desc: string; atName?: string }) => (
        <article className="grid gap-2 bg-bg1 border border-br3 rounded-xl p-1">
            <div className="flex items-center justify-between bg-bg2 border border-br2 rounded-lg p-3">
                <div className="flex items-center gap-3">
                    <span className="w-10 h-10 grid place-content-center bg-bg2 border border-br3 rounded-lg">
                        <i className={`${icon} text-fg0 text-2xl`} />
                    </span>
                    <div className="grid gap-px">
                        <strong className="text-fg0"><i className="fa-solid fa-at text-fg0 text-xs mr-1" /><span>{atName || username}</span></strong>
                        <span className="text-fg3 text-xs">{subtitle}</span>
                    </div>
                </div>
                {title && (
                    <div className="grid gap-px">
                        <h3 className="text-fg0 font-bold text-right">{title}</h3>
                        <span className="text-fg3 text-xs">Total of Contributions</span>
                    </div>
                )}
            </div>
            <div className="grid gap-2 py-2 px-3">
                <h5 className="text-fg0 font-semibold">{atName || subtitle}</h5>
                <em className="text-fg2">{desc}</em>
            </div>
        </article>
    )

    return (
        <section className="p-4 grid grid-cols-2 gap-4">
            <StatCard icon="fa-brands fa-github-alt" title={String(currentContributions)} subtitle="Code & Contribution" desc="To bridge the gap between offensive security research and defensive implementations, creating more resilient digital ecosystems through education, automation, and ethical hacking." />
            <StatCard icon="fa-solid fa-cube" subtitle="Capture The Flag (CTF) Competitor" desc="As an active CTF competitor, I focus on developing practical cybersecurity skills through hands-on challenges, specializing in digital forense, reverse engineering, and we exploitation." atName="VIsh0k" />
        </section>
    )
}

// === MAIN ===
export const About = () => (
    <div>
        <PageInfo />
        <Section1 />
        <hr />
        <Section2 />
        <hr />
        <Section3 />
        <hr />
        <Section4 />
        <hr />
    </div>
)

