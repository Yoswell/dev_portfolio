import { CodeLine } from "@/components/CodeLine"
import { HashTag } from "@/components/HashTag"
import { TitleTag } from "@/components/TitleTag"
import { Tooltip } from "@/components/Tooltip"
import { useEffect, useState } from "react"

export const About = () => {
    function PageInfo() {
        function BannerImage() { return <div className="banner-image"></div> }

        return (
            <div>
                <BannerImage />
                <TitleTag>About page</TitleTag>
            </div>
        )
    }

    function Section_1() {
        return (
            <section className='grid gap-4'>
                <div className='flex gap-2'>
                    <HashTag>About me</HashTag>
                    <HashTag>Experience</HashTag>
                    <HashTag>Pages</HashTag>
                </div>

                <h1>I'm Yoswel, you can call me VISh0k</h1>

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

                    <div className='flex gap-4'>
                        <img src='/banners/about/profile.png' alt='' className='w-12 border border-br3 rounded-xl' />
                        
                        <div className="grid">
                            <strong>Yoswel B</strong>
                            <em>Let's connect to discuss how I can contribute to your next project.</em>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    function Section_2() {
        interface JobCardProps {
            joinedDate: string
            brandImgPath: string
            companyName: string
            jobTitle: string
            listText: string[]
            skillsLearned: string[]
        }
        
        const JobCard: React.FC<(JobCardProps)> = ({joinedDate, brandImgPath, companyName, jobTitle, listText, skillsLearned}) => {
            return (
                <article className='flex flex-col items-start gap-4'>
                    <span className='text-fg3 uppercase text-sm'>{joinedDate}</span>

                    <div className='flex items-center gap-3'>
                        <img src={brandImgPath} alt={companyName} className='img-w-30 border border-br3 rounded-lg' />
                        <h3>{companyName}</h3>
                    </div>

                    <div className='flex items-center justify-between relative'>
                        <h4>{jobTitle}</h4>
                    </div>

                    <div>
                        <ul className='grid gap-2'>
                            {listText.map((item, index) => (
                                <li key={index} dangerouslySetInnerHTML={{ __html: item}}></li>
                            ))}
                        </ul>
                    </div>

                    <div className='flex gap-2'>
                        {skillsLearned.map((item) => (
                            <HashTag>{item}</HashTag>
                        ))}
                    </div>
                </article>
            )
        }

        return (
            <section className='grid gap-4'>
                <h2>Professional Experience</h2>

                <div className='grid gap-8'>
                    <JobCard
                        joinedDate='May/2025 - present'
                        brandImgPath='/logos/ibm.svg'
                        companyName='IBM'
                        jobTitle='X-Force Red Penetration Tester Intern'
                        listText={[
                            `As a <strong>Penetration Tester Intern</strong> at IBM's <strong>X-Force Red</strong> team,
                            I conduct comprehensive penetration tests on web applications, internal networks,
                            and IT infrastructure. I regularly use industry-standard tools such as <strong>Burp Suite</strong>, <strong>Kali Linux</strong>,
                            and <strong>Metasploit</strong> to simulate real-world attack scenarios and provide actionable recommendations.`,

                            `Developed a <strong>desktop</strong> application to streamline common penetration testing <strong>workflows</strong> and serve 
                            as an educational tool for understanding <strong>attack vectors<strong/>`,

                            `Identify and exploit vulnerabilities in computer systems and applications.`
                        ]}
                        skillsLearned={[
                            'Kali',
                            'Slack',
                            'Java',
                            'Salesforce',
                            'Github',
                            'Burp Suite'
                        ]}>
                    </JobCard>

                    <JobCard
                        joinedDate='Jan/2025 - present'
                        brandImgPath='/logos/uned.png'
                        companyName='Distance State University'
                        jobTitle='Volunteer Univerity Tutor'
                        listText={[
                            `As a <strong>University Tutor</strong>, I provide personalized <strong>virtual support sessions</strong> to students across
                            various <strong>programming</strong> languages, helping them grasp complex concepts and complete coding assignments effectively.`,
                            `Help students understand complex concepts and complete practical exercises.`
                        ]}
                        skillsLearned={[
                            'OBS',
                            'C Sharp',
                            'Visual Studio',
                            'Dotnet',
                            'Outlook',
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

    interface YearlyTotals {
  [year: string]: number;
}

    function GitHubStatsSimple() {
  const [totals, setTotals] = useState<YearlyTotals>({});
  const [loading, setLoading] = useState(true);
  const username = "Yoswell";

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        const response = await fetch(
          `https://github-contributions-api.jogruber.de/v4/${username}`
        );
        const data = await response.json();
        setTotals(data.total); // Solo guardamos la parte de "total"
      } catch (error) {
        console.error("Error fetching GitHub stats:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubStats();
  }, [username]);

  if (loading) return <div>Cargando estadísticas...</div>;
  if (Object.keys(totals).length === 0) return <div>Error al cargar estadísticas</div>;

  const currentYear = new Date().getFullYear().toString();
  const currentYearTotal = totals[currentYear] || 0;

  return (
    <div>
      <h2>Contribuciones de {username}</h2>
      <p>Total {currentYear}: {currentYearTotal} contribuciones</p>
      
      <div>
        <h3>Historial:</h3>
        {Object.entries(totals)
          .sort(([yearA], [yearB]) => parseInt(yearB) - parseInt(yearA))
          .map(([year, total]) => (
            <div key={year}>
              {year}: {total}
            </div>
          ))}
      </div>
    </div>
  );
}

    return (
        <div className='flex flex-col gap-8'>
            <PageInfo />
            <Section_1 />
            <hr></hr>
            <Section_2 />
            <GitHubStatsSimple />
        </div>
    )
}