import '@/css/App.css'
import '@/css/Tailwind.css'

import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import { Home } from '@/pages/home/Home'
import { Footer } from '@/components/Footer'
import { Navigation } from '@/components/Navigation'
import { About } from '@/pages/about/About'

export const App = () => {
    return (
        <section>
            <BrowserRouter>
                <Navigation />

                <div className='max-w-content m-auto grid grid-cols-[auto_1fr_auto] px-10'>
                    <div className='lines-svg-column w-10 h-full bg-[url("/Lines.svg")] bg-[length:60px_60px] border-x border-br2'></div>
                    
                    <div className='max-w-content grid p-20'>
                        <Routes>
                            <Route path='/' element={<Home />}></Route>
                            <Route path='/about' element={<About />}></Route>
                        </Routes>
                        <Footer />
                    </div>

                    <div className='lines-svg-column w-10 h-full bg-[url("/Lines.svg")] bg-[length:60px_60px] border-x border-br2'></div>
                </div>

            </BrowserRouter>
        </section>
    )
}