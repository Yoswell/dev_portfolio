export const GridLines = ({children}: {children: any}) => {
    const ColumnLines = () => (
        <div className={`
            column-line-mask-t w-[18px] md:w-[26px] lg:w-[28px] bg-bg0 h-full 
            bg-[url("/banners/lines.svg")] bg-[length:60px_60px] border-x border-br2/90
        `} />
    )

    return (
        <section className='w-full max-w-7xl m-auto grid grid-cols-[auto_1fr_auto] overflow-hidde'>
            <ColumnLines />
                {children}
            <ColumnLines />
        </section>
    )
}