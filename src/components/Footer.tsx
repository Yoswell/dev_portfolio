export function Footer() {
    return (
        <footer className='border-t border-br3'>
            <div className='flex items-center justify-center gap-4 p-4'>
                <div className='flex items-center gap-2'>
                    <span className='text-fg3 text-xs'>&copy;</span>
                    <span className='text-fg3 text-xs'>2025</span>
                    <span className='text-fg0 font-medium text-xs'>Yoswel B</span>
                </div>

                <div className='flex items-center gap-2'>
                    <a href='/privacy' className='text-fg3 hover:text-fg2 text-xs transition-colors duration-200'>
                        Privacy Policy
                    </a>
                    <a href='/terms' className='text-fg3 hover:text-fg2 text-xs transition-colors duration-200'>
                        Terms of Use
                    </a>
                    <a href='/cookies' className='text-fg3 hover:text-fg2 text-xs transition-colors duration-200'>
                        Cookies
                    </a>
                </div>
            </div>

            <div className='w-full h-[20px] border-t border-br3 bg-[url("/Lines.svg")] bg-[length:60px_60px]'></div>
        </footer>
    )
}