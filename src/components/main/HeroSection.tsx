export const HeroSection = () => {
    const HeroAds = () => (
        <span className="flex items-center gap-2">
            <span className="border border-br2 px-2 rounded-full">
                <span className="text-gradient uppercase text-xs font-medium">Upcoming</span>
            </span>
            <span className="text-fg0 text-sm">More open-source projects</span>
        </span>
    )
    
    const HeroContent = () => (
        <div className="grid place-items-center gap-8">
            <h1 className="max-w-[30ch] m-auto text-fg0 font-1 text-6xl text-center">
                I help founders turn ideas<br />
                into seamless digital experiences
            </h1>
            <h2 className="max-w-[50ch] m-auto text-fg0 text-lg md:text-xl text-center">
                I thrive on crafting dynamic web applications, and delivering seamless user experiences.
            </h2>
            <button className="flex items-center gap-4 bg-bg1 border border-br3 rounded-xl py-2 pl-4 pr-2">
                <span className="text-fg0">Let's connect</span>
                <span className="w-7 h-7 grid place-content-center bg-white rounded-lg">
                    <i className="fa-solid fa-arrow-right text-black text-sm"></i>
                </span>
            </button>
        </div>
    )

    return (
        <section className="w-full flex flex-col items-center justify-center gap-4 py-80">
            <HeroAds />
            <HeroContent />
        </section>
    )
}
