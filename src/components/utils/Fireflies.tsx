export const Fireflies = () => {
    const count = 40
    const particles = Array.from({ length: count })

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {particles.map((_, i) => {
                const size = Math.random() * 1
                const duration = Math.random() * 20 + 10
                const left = Math.random() * 100
                const bottom = Math.random() * 100

                return (
                    <span
                        key={i}
                        className="firefly absolute rounded-full bg-white"
                        style={{
                            width: size,
                            height: size,
                            left: `${left}%`,
                            bottom: `${bottom}%`,
                            animationDuration: `${duration}s`,
                        }}
                    />
                )
            })}
        </div>
    )
}