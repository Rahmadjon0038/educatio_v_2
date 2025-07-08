import Login from '../Auth/Login'
import Register from '../Auth/Register'
import { NavContainer, Navigate, Logo } from './style'
import { NavLink } from 'react-router-dom'
import { useUser } from '../../context/roleContext'
import UserProfile from '../usersProfile/UserProfile'
import logo from '../../assets/logo.png'
import { ImgContainer } from '../usersProfile/style'
import { FaAngleDown } from 'react-icons/fa6'
import avatar from '../../assets/avatar.png'

function Navbar() {
    const { role, setRole, data, isLoading, error } = useUser()
    const customWepgImg = data?.avatar
        ? data.avatar.replace('/upload', '/upload/f_webp,q_auto')
        : '';

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
                <NavLink className='a' to={'/news'}>Yangiliklar</NavLink>
                {role == 'guest' ?
                    <div>
                        <Login />
                        <Register />
                    </div>
                    :
                    role == 'admin' ? <NavLink to={'/admin'} style={{ color: 'white', textDecoration: 'none' }}>

                        <ImgContainer >
                            <img src={customWepgImg || avatar} alt="avatar" />
                            <p>{data?.username}</p>
                            <FaAngleDown />
                        </ImgContainer>
                    </NavLink> : role == 'teacher' ? <NavLink to={'/teachers'}  style={{ color: 'white', textDecoration: 'none' }}>
                        <ImgContainer >
                            <img src={customWepgImg || avatar} alt="avatar" />
                            <p>{data?.username}</p>
                            <FaAngleDown />
                        </ImgContainer></NavLink> : <UserProfile />
                }
            </Navigate>
        </NavContainer>
    )
}

export default Navbar