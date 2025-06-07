import Login from '../Auth/Login'
import Register from '../Auth/Register'
import { NavContainer, Navigate, Logo } from './style'
import { NavLink } from 'react-router-dom'
import Cookies from 'js-cookie'
import { useUser } from '../../context/roleContext'
import UserProfile from '../usersProfile/UserProfile'


function Navbar() {
    const { role ,setRole} = useUser()
    console.log('context',role)

    return (
        <NavContainer>
            <Logo>
                <div className='cube'></div>
                <h1>Taraqqiyot</h1>
            </Logo>
            <Navigate className='navigate'>
                <NavLink className='a' to={'/'}>Bosh sahifa</NavLink>
                <NavLink className='a' to={'/about'}>Biz haqimizda</NavLink>
                <NavLink className='a' to={'/cources'}>Kurslarimiz</NavLink>
                {role == 'guest' ?
                    <div>
                        <Login />
                        <Register />
                    </div>
                    :
                    <UserProfile/>
                }
            </Navigate>
        </NavContainer>
    )
}

export default Navbar