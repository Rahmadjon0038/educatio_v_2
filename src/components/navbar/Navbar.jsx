import Login from '../Auth/Login'
import Register from '../Auth/Register'
import { NavContainer, Navigate, Logo } from './style'
import { NavLink, useRoutes } from 'react-router-dom'
import Cookies from 'js-cookie'
import { useUser } from '../../context/roleContext'
import UserProfile from '../usersProfile/UserProfile'
import logo from '../../assets/logo.png'

function Navbar() {
    const { role, setRole } = useUser()

    return (
        <NavContainer>
            <NavLink className='homenav' to={'/'}>
                <Logo>
                <img src={logo} alt="logo" />
                {/* <div className='cube'></div> */}
                <h1>Taraqqiyot</h1>
            </Logo></NavLink>
            <Navigate className='navigate'>
                <NavLink className='a' to={'/'}>Bosh sahifa</NavLink>
                <NavLink className='a' to={'/about'}>Biz haqimizda</NavLink>
                <NavLink className='a' to={'/cources'}>Kurslarimiz</NavLink>
                <NavLink className='a'>Yangiliklar</NavLink>
                {role == 'guest' ?
                    <div>
                        <Login />
                        <Register />
                    </div>
                    :
                    <UserProfile />
                }
            </Navigate>
        </NavContainer>
    )
}

export default Navbar