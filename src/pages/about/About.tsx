import { CodeLine } from "@/components/CodeLine"
import { Tooltip } from "@/components/Tooltip"

export const About = () => {
    function HeroSection() {
        return (
            <section className='grid gap-4 relative'>
                <div className='w-full grid gap-8'>
                    <h1 className='text-fg0 font-medium text-5xl tracking-tighter font-1'>Yoswel B</h1>
                    <div className='hr'></div>
                    <h3 className='text-fg0 font-medium text-xl'>X-Force Red Penetration Tester & Full-Stack Developer</h3>
                </div>

                <div className='grid gap-4'>
                    <p className='text-fg2'>
                        I'm a Full-Stack Developer specializing in building robust, secure, and
                        high-performance web applications from concept to deployment. Driven by
                        a passion for solving complex problems, I thrive on transforming intricate
                        requirements into elegant, user-centric solutions. I am always eager to face
                        new challenges and am deeply committed to my continuous growth as both a developer
                        and a security professional in the ever-evolving world of secure software engineering.
                    </p>

                    <p className='text-fg2'>
                        With strong experience in React, .NET and Python, I combine software development with
                        cybersecurity expertise to design solutions that are scalable, efficient, and resilient
                        against modern threats.
                    </p>

                    <p className='text-fg2 font-1 mt-8'>
                        Let's connect to discuss how I can help build or fortify your next project.
                    </p>
                </div>
            </section>
        )
    }

    function ProfessionalExperience() {
        interface JobCardProps {
            jobTitle: string
            jobDate: string
            companyName: string
            listText: string[]
        }
        
        const JobCard: React.FC<(JobCardProps)> = ({jobTitle, jobDate, companyName, listText}) => {
            return (
                <article className='grid gap-2'>
                    <div className='flex items-center justify-between relative'>
                        <h3 className='text-fg0 text-xl'>{jobTitle}</h3>
                        <span className='bg-bg1 border border-br2 rounded text-fg0 font-medium text-xs py-1 px-2'>{jobDate}</span>
                    </div>

                    <div className='flex items-center gap-1'>
                        <h4 className='text-fg0 text-lg font-medium'>Institution:</h4>
                        <span className='text-rose-400 font-medium font-1'>{companyName}</span>
                    </div>

                    <div>
                        <ul className='grid gap-2'>
                            {listText.map((item, index) => (
                                <li key={index}>
                                    <p className='text-fg2'>{item}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </article>
            )
        }

        return (
            <section className='grid gap-4'>
                <h2 className='text-fg0 font-medium text-3xl tracking-tighter font-1'>Professional Experience</h2>

                <div className='grid gap-8'>
                    <JobCard
                        jobTitle='X-Force Red Penetration Tester Intern'
                        jobDate='May/2025 - present'
                        companyName='IBM'
                        listText={[
                            `As a Penetration Tester Intern at IBM's X-Force Red team, I conduct comprehensive penetration tests on web applications, internal networks,
                            and IT infrastructure. I regularly use industry-standard tools such as Burp Suite, Kali Linux, and Metasploit to simulate real-world
                            attack scenarios and provide actionable recommendations.`,
                            `Identify and exploit vulnerabilities in computer systems and applications.`
                        ]}>
                    </JobCard>

                    <JobCard
                        jobTitle='University Tutor'
                        jobDate='Jan/2025 - present'
                        companyName='Distance State University'
                        listText={[
                            `As a University Tutor, I provide personalized virtual support sessions to students across various programming languages,
                            helping them grasp complex concepts and complete coding assignments effectively.`,
                            `Help students understand complex concepts and complete practical exercises.`
                        ]}>
                    </JobCard>
                </div>
            </section>
        )
    }

    function SkillSection() {
        const skillsImages = [
            { path: 'Bash.svg',},
            { path: 'CS.svg',},
            { path: 'Discord.svg',},
            { path: 'Docker.svg',},
            { path: 'DotNet.svg',},
            { path: 'Github.svg',},
            { path: 'GitLab.svg',},
            { path: 'Git.svg',},
            { path: 'GoLang.svg',},
            { path: 'HTML.svg',},
            { path: 'JavaScript.svg',},
            { path: 'Java.svg',},
            { path: 'Kali.svg',},
            { path: 'LinkedIn.svg',},
            { path: 'Linux.svg',},
            { path: 'Powershell.svg',},
            { path: 'Python.svg',},
            { path: 'React.svg',},
            { path: 'TailwindCSS.svg',},
            { path: 'TypeScript.svg',},
            { path: 'Windows.svg',},
        ]

        const skillTexts = skillsImages.map((x) => {
            return x.path.split('.')[0]
        })

        return (
            <section className='grid gap-4 relative'>
                <h2 className='text-fg0 font-medium text-3xl tracking-tighter font-1'>Domined Technologies</h2>
                <p className="text-fg2">
                    To keep pace with the rapid growth in development and cybersecurity, I am now focusing
                    my expertise on these core technologies:
                </p>

                <div className='grid grid-cols-[repeat(18,1fr)] gap-2 mt-4'>
                    {skillsImages.map((item, index) => (
                        <div key={index} className="tooltip-content relative">
                            <div>
                                <img src={item.path} className='rounded-lg' alt=''/>
                                <Tooltip customClass="top-14 center">{skillTexts[index]}</Tooltip>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        )
    }

    function ProjectSections() {
        return (
            <section className='grid gap-4'>
                <h2 className='text-fg0 font-medium text-3xl tracking-tighter font-1'>Projects</h2>
                <p className="text-fg2">
                    Over time, I have worked on a variety of projects that allowed me to explore different technologies, improve
                    my problem-solving skills, and turn ideas into functional, well-designed solutions.
                </p>

                <header className="mt-4">
                    <nav className='max-w-[800px] m-auto flex relative'>
                        <div className='flex items-center gap-2'>
                            <button className="text-fg0 border-x border-b-2 border-black outline outline-1 outline-br3 rounded-lg p-3 bg-gradient-to-b from-bg0 to-bg2 py-1 px-3">Boofuzz</button>
                            <button className="text-fg0 border-x border-b-2 border-black outline outline-1 outline-br3 rounded-lg p-3 bg-gradient-to-b from-bg0 to-bg2 py-1 px-3">Helbreach</button>
                            <button className="text-fg0 border-x border-b-2 border-black outline outline-1 outline-br3 rounded-lg p-3 bg-gradient-to-b from-bg0 to-bg2 py-1 px-3">Gunnar</button>
                        </div>
                    </nav>
                </header>

                <div className='flex  gap-4'>
                    <article>
                        <article className="w-full flex flex-col items-start gap-4 border-x border-b-2 border-black outline outline-1 outline-br3 rounded-xl p-5 relative overflow-hidden card-project">
                            <h3 className='text-fg0 text-3xl font-1 font-medium z-10'>Boofuzz</h3>
                            <p className="max-w-[70ch] text-fg1">
                                Boofuzz is a high-performance HTTP web fuzzer written in Go, designed for directory busting, parameter fuzzing, and vulnerability
                                discovery. It supports multiple wordlists with custom placeholders, advanced filtering options, and provides detailed response
                                analysis including body and header inspection.
                            </p>

                            <div>
                                <span className="flex items-center gap-2 bg-bg1 border border-br2 rounded py-1 px-3">
                                    <img src="go.svg" className="w-4"></img>
                                    <span className="text-fg0 text-xs uppercase">Go</span>
                                </span>
                            </div>

                            <CodeLine>git clone https://github.com/Yoswell/boofuzz</CodeLine>
                            
                            <div className="lines-down-svg w-[300px] h-[200px] absolute top-0 right-0 bg-[url('/Lines.svg')] bg-[length:80px_80px] bg-repeat"></div>
                        </article>
                    </article>
                </div>
            </section>
        )
    }

    return (
        <div className='max-w-[650px] m-auto flex flex-col gap-10 py-20'>
            <HeroSection />
            <div className='hr bg-[url("/Lines.svg")] bg-[length:50px_50px]'>
                <span className="text-fg0">h-10</span>
            </div>
            <ProfessionalExperience />
            <div className='hr'></div>
            <ProjectSections />
            <div className='hr'></div>
            <SkillSection />
        </div>
    )
}