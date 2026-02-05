export function CodeLine({children}: {children: any}) {
    return (
        <div className='w-full flex items-center justify-between bg-bg1 border border-br3 rounded relative overflow-hidden pr-3'>
            <code className='codeline max-w-[calc(100%-20px)] text-fg0 text-sm tracking-tight code font-medium whitespace-nowrap overflow-scroll p-3 pr-10'>{children}</code>
            <i className='fa-regular fa-clone text-fg3 text-sm absolute top-3 right-3'></i>
        </div>
    )
}