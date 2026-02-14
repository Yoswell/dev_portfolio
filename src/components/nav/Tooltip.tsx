export function Tooltip({customClass, children}: {customClass: string, children: any}) {
    let arrowClass = ''

    if (customClass.includes('p-left') && customClass.includes('p-bottom'))
        arrowClass = 'left-5 -top-[6px] rotate-[45deg]'
    
    if (customClass.includes('p-center') && customClass.includes('p-bottom'))
        arrowClass = 'left-[calc(50%-5px)] transform:translate-x-[-50%] -top-[6px] rotate-[45deg]'
    
    if (customClass.includes('p-right') && customClass.includes('p-bottom'))
        arrowClass = 'right-5 -top-[6px] rotate-[45deg]'

    if (customClass.includes('p-left') && customClass.includes('p-top'))
        arrowClass = 'left-5 -bottom-[6px] -rotate-[135deg]'
    
    if (customClass.includes('p-center') && customClass.includes('p-top'))
        arrowClass = 'left-[calc(50%-5px)] transform:translate-x-[-50%] -bottom-[6px] -rotate-[135deg]'
    
    if (customClass.includes('p-right') && customClass.includes('p-top'))
        arrowClass = 'right-5 -bottom-[6px] -rotate-[135deg]'

    return (
        <span className={`
            tooltip pointer-events-none ${customClass} bg-bg1 border border-br3 text-fg0 text-sm whitespace-nowrap rounded py-1 px-3
            absolute z-10
        `}>
            {children}
            <span className={`w-3 h-3 absolute ${arrowClass} -z-10 bg-bg1 border-l border-t border-br3`}></span>
        </span>
    )
}