export const TitleGradientCard = ({
    title,
    subtitle,
    titleColor
}: {
    title: string
    subtitle: string
    titleColor?: string
}) => (
    <div className='flex flex-col gap-4 border-b border-br2 p-6'>
        <h3 className={`text-3xl font-1 ${titleColor}`}>{title}</h3>
        <p className='text-fg3'>
            {subtitle}
        </p>
    </div>
)