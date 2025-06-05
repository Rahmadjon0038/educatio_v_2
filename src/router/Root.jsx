import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { Navigate, Route, Routes } from 'react-router-dom'
import Homepage from '../pages/Homepage'
import About from '../pages/About'
import Courses from '../pages/Courses'

function Root() {
    return (
        <>
         <Navbar/>
            <Routes>
                <Route path='/' element={<Navigate to={'/Homepage'}/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/cources' element={<Courses/>}/>


                <Route path='/homepage' element={<Homepage/>} />
            </Routes>
        </>
    )
}

export default Root