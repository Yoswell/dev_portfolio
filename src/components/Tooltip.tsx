export function Tooltip({customClass, children}: {customClass: string, children: any}) {
    return (
        <span className={`
            absolute z-10 tooltip ${customClass} bg-bg1 border border-br3 text-fg0 text-sm
            whitespace-nowrap rounded py-1 px-3 pointer-events-none`
        }>
            {children}
            <span className="w-3 h-3 absolute -top-[6px] left-[50%] translate-x-[-50%] rotate-[45deg] -z-10 bg-bg1 border-l border-t border-br3"></span>
        </span>
    )
}