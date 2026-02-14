export const TitleSection = ({
    headSubtitle,
    title,
    highLight,
    customClass
}: {
    headSubtitle: string
    title: string
    highLight: string
    customClass?: string
}) => {
    return (
        <div className='grid place-content-center place-items-center gap-2 p-10'>
            <span className='text-fg3 font-mono text-sm uppercase'>{headSubtitle}</span>
            <h2 className={`${customClass} text-fg0 font-1 text-5xl text-center`}>
                {title}
                <em className='title-gradient-r text-5xl'>{highLight}</em>
            </h2>
        </div>
    )
}