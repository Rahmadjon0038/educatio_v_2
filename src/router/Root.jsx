import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation, useParams } from 'react-router-dom'
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
import News from '../pages/News'
import Admin from '../pages/Admin'
import Statistik from '../components/adminDashboard/statistik/Statistik'
import AdminDirection from '../components/adminDashboard/derection/AdminDirection'
import AdminSidebar from '../components/adminDashboard/sidebar/AdminSidebar'

function Root() {

  const { pathname } = useLocation()
  const { role, setRole } = useUser()

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })

    const cookieRole = Cookies.get('role') || 'guest'
    setRole(cookieRole)

    window.scrollTo(0, 0)
  }, [setRole, pathname])

  console.log(role)

  const showNavbar = role === 'guest' || role === 'user' || role == 'ticher' || role == 'admin'
  const isAdminPage = role === 'admin' && pathname.startsWith('/admin');

  return (
    <>
      {showNavbar && !isAdminPage && <Navbar />}

      <Routes>
        {role === 'user' && (
          <>
            <Route path='/' element={<Navigate to='/home' />} />
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/cources' element={<Courses />} />
            <Route path='/news' element={<News />} />
          </>
        )}

        {role === 'ticher' && (
          <>
            <Route path='/' element={<Navigate to='/home' />} />
            <Route path='/tichers' element={<Tichers />} />
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/cources' element={<Courses />} />
            <Route path='/news' element={<News />} />

          </>
        )}

        {role == 'admin' && (
          <>
            <Route path='/' element={<Navigate to='/home' />} />
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/cources' element={<Courses />} />
            <Route path='/news' element={<News />} />

            <Route path="/admin" element={<Admin />}>
              <Route index element={<h1>default page</h1>} />
              <Route path="statistik" element={<Statistik />} />
              <Route path="courses" element={<AdminDirection />} />
              {/* boshqa admin sahifalarni ham shu yerga qo‘sh */}
            </Route>
          </>
        )

        }

        {role === 'guest' && (
          <>
            <Route path='/' element={<Navigate to='/home' />} />
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/cources' element={<Courses />} />
            <Route path='/news' element={<News />} />
          </>
        )}

        <Route path='*' element={<NotFound />} />
      </Routes>
      {showNavbar && !isAdminPage && <Footer />}
    </>
  )
}

export default Root
