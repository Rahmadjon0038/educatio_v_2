import { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Cookies from 'js-cookie'

import Navbar from '../components/navbar/Navbar'
import NotFound from '../components/Notound'

import Home from '../pages/Home'
import About from '../pages/About'
import Courses from '../pages/Courses'
import Tichers from '../pages/Tichers'
import { useUser } from '../context/roleContext'
import Footer from '../components/footer/Footer'

function Root() {
  const { role, setRole } = useUser()

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })

    const cookieRole = Cookies.get('role') || 'guest'
    setRole(cookieRole)
  }, [setRole])

  console.log(role)

  const showNavbar = role === 'guest' || role === 'user'

  return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
        {role === 'user' && (
          <>
            <Route path='/' element={<Navigate to='/home' />} />
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/cources' element={<Courses />} />
          </>
        )}

        {role === 'ticher' && (
          <>
            <Route path='/home' element={<Navigate to='/' />} />
            <Route path='/' element={<Navigate to='/tichers' />} />
            <Route path='/tichers' element={<Tichers />} />
          </>
        )}

        {role === 'guest' && (
          <>
            <Route path='/' element={<Navigate to='/home' />} />
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/cources' element={<Courses />} />
          </>
        )}

        <Route path='*' element={<NotFound />} />
      </Routes>
      {showNavbar && <Footer />}
    </>
  )
}

export default Root
