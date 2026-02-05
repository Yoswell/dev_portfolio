export const TitleTag = ({children}: any) => {
    return (
        <div className="flex items-center gap-2">
            <i className="fa-solid fa-wand-magic-sparkles text-fg3"></i>
            <p className="text-fg3">{children}</p>
        </div>
    )
}