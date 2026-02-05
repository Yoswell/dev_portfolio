import { useEffect, useState, Suspense } from 'react'
import { MDXProvider } from '@mdx-js/react'
import { Link } from 'react-router-dom'
import type { FilePathProps } from '@/interfaces/Interfaces'
import { TitleTag } from '@/components/TitleTag'
import { HashTag } from '@/components/HashTag'

//https://github-contributions-api.jogruber.de/v4/GITHUB_USERNAME
//https://api.github.com/users/USERNAME

const mdxComponents = {
    Link: ({ to, children, ...props }: any) => (
        <Link to={to} {...props}>
            {children}
        </Link>
    ),

    TitleTag: ({ children }: any) => (
        <TitleTag>
            {children}
        </TitleTag>
    ),

    HashTag: ({ children }: any) => (
        <HashTag>
            {children}
        </HashTag>
    ),

    BannerImage: () => (
        <section className='banner-image'></section>
    ),

    GitHubStats: () => (
        <GitHubStatsSimple />
    ),
    
    a: ({ href, children, ...props }: any) => {
        if (href?.startsWith('/')) {
            return (
                <Link to={href} {...props}>
                    {children}
                </Link>
            )
        }

        return (
            <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
                {children}
            </a>
        )
    }
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


export const MDXViewer = ({ filePath }: FilePathProps) => {
    const [MdxContent, setMdxContent] = useState<any>(null)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        import(`../${filePath}`)
            .then(module => {
                setMdxContent(() => module.default)
                setError(null)
            })
            .catch(err => {
                setError(`Error loading content: ${err}`)
                setMdxContent(null)
            })
    }, [filePath])

    if (error) {
        return <div className="markdown error">{error}</div>
    }

    if (!MdxContent) {
        return <div className="markdown loading">Loading...</div>
    }

    return (
        <MDXProvider components={mdxComponents}>
            <section className='max-w-content m-auto markdown p-20'>
                <Suspense fallback={<div>Loading content...</div>}>
                    <MdxContent />
                </Suspense>
            </section>
        </MDXProvider>
    )
}