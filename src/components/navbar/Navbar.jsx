import Login from '../Auth/Login'
import Register from '../Auth/Register'
import { NavContainer, Navigate,Logo } from './style'
import { NavLink } from 'react-router-dom'


function Navbar() {
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
                <div>
                    <Login/>
                    <Register/>
                </div>
            </Navigate>
        </NavContainer>
    )
}

export default Navbar