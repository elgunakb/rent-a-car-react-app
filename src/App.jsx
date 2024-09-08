import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Aos from 'aos';

import 'aos/dist/aos.css';
import About from './components/About/About';
import Services from './components/Services/Services';
import CarList from './components/CarList/CarList';
import Testimonial from './components/Testimonial/Testimonial';
import AppStoreBanner from './components/AppStoreBanner/AppStoreBanner';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
const App = () => {
    // dark mode start
    const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light');
    const element = document.documentElement;

    useEffect(() => {
        if (theme === 'dark') {
            element.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            element.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [theme]);
    // dark mode end

    React.useEffect(() => {
        Aos.init({
            offset: 100,
            duration: 800,
            easing: 'ease-in-sine',
            delay: 100
        });
        Aos.refresh();
    }, []);

    return (
        <div className='bg-white dark:bg-black dark:text-white text-black overflow-x-hidden'>
            <Navbar theme={theme} setTheme={setTheme} />
            <Hero theme={theme} />
            <About />
            <Services />
            <CarList />
            <Testimonial />
            <AppStoreBanner />
            <Contact />
            <Footer />
        </div>
    );
};

export default App;
