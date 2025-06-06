import { useEffect } from 'react'
import Navbar from '../components/navbar/Navbar'
import { Navigate, Route, Routes } from 'react-router-dom'
import About from '../pages/About'
import Courses from '../pages/Courses'
import Home from '../pages/Home'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Root() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,     
        });
    }, []);
    
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<Navigate to={'/Home'} />} />
                <Route path='/about' element={<About />} />
                <Route path='/cources' element={<Courses />} />
                <Route path='/home' element={<Home />} />
            </Routes>
        </>
    )
}

export default Root