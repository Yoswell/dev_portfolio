import '@/css/App.css'
import '@/css/Tailwind.css'

import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import { Footer } from '@/components/main/Footer'
import { Navigation } from '@/components/nav/Navigation'
import { HomePage } from '@/pages/Home'
import { HeroSection } from '@/components/main/HeroSection'
import { GridLines } from '@/components/main/GridLines'

export const App = () => {
    return (
        <BrowserRouter>
            <Navigation />
            <HeroSection />

            <Routes>
                <Route path='/' element={
                    <GridLines>
                        <HomePage />
                    </GridLines>
                }></Route>
            </Routes>

            <Footer />
        </BrowserRouter>
    )
}