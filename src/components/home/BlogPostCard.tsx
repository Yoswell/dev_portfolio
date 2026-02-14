import { Link } from 'react-router-dom'
import BounceCards from '@/components/utils/BounceCards'

interface BlogPost {
    date: string
    title: string
    excerpt: string
    images: string[]
    category: string
    hashtags: string[]
    readTime: number
}

const transformStyles = [
    "rotate(-5deg) translate(-150px, 10px)",
    "rotate(0deg) translate(-70px, -20px)",
    "rotate(-5deg)",
    "rotate(5deg) translate(70px, 20px)",
    "rotate(-5deg) translate(150px, 0)"
]

export const BlogPostCard = ({ post }: { post: BlogPost }) => (
    <article className='flex flex-col'>
        <div className='grid gap-2 p-4'>
            <div className='flex items-center gap-2'>
                <span className='text-fg3 font-mono text-sm uppercase'>01</span>
                <span className='w-6 h-px bg-bg3'></span>
                <span className='text-fg3 font-mono text-sm uppercase'>{post.category}</span>
            </div>

            <h3 className=' text-fg0 font-1 text-3xl'>{post.title}</h3>
        </div>

        <article className='grid gap-4 border-t border-dashed border-br3 p-4'>
            <div className={`
                bg-bg1/50 border border-br3 rounded-xl p-1 relative overflow-hidden
                mask-x-before before:absolute before:top-0 before:left-0 before:w-full before:h-px before:bg-white before:z-10
                after:absolute after:top-0 after:left-1/2 after:-translate-x-1/2 after:w-1/2 after:h-1 after:bg-white after:blur-lg after:-z-10
            `}>
                <div className='w-full md:h-[250px]'>
                    <BounceCards
                        className="custom-bounceCards w-[160px] z-10"
                        classNameImage='w-full h-full border border-br3 rounded-xl brightness-75'
                        images={post.images}
                        animationDelay={0.1}
                        animationStagger={0.14}
                        easeType="elastic.out(1, 0.5)"
                        transformStyles={transformStyles}
                        enableHover={true}
                    />
                    <div className='absolute top-0 left-0 w-full h-full bg-[url("/banners/squares.svg")] bg-[length:70px_70px] -z-10'></div>
                </div>
            </div>

            <div className='flex items-center justify-between'>
                <span className='text-neutral-300 font-2 text-lg ml-1'>{post.readTime} min read</span>
                <Link to='/about'>
                    <i className='fa-solid fa-angle-right text-neutral-50 text-sm'></i>
                </Link>
            </div>

            <p className='text-neutral-500 line-clamp-3 text-ellipsis'>
                {post.excerpt}
            </p>
        </article>
    </article>
)
