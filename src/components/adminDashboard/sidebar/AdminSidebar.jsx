import { SidebarContainer, SidebarTitle, SidebarList, SidebarItem, SidebarLink } from './style';
import { MdDashboard } from "react-icons/md";
import { FaBook, FaUsersLine, FaUsersViewfinder } from "react-icons/fa6";
import { FaCommentDots } from "react-icons/fa";
import UserProfile from '../../usersProfile/UserProfile';
import { useUser } from '../../../context/roleContext';

function AdminSidebar() {
    const { role, setRole } = useUser()
    return (
        <SidebarContainer>
            <SidebarTitle>Admin Panel</SidebarTitle>
            <SidebarList>
                <SidebarItem>
                    <SidebarLink to={'/admin'}><MdDashboard /> Dashboard</SidebarLink>
                </SidebarItem>
                {/* <SidebarItem>
                    <SidebarLink to="/admin/courses"><FaUsersLine/> Tiachers</SidebarLink>
                </SidebarItem> */}
                <SidebarItem>
                    <SidebarLink to="/admin/users"><FaUsersViewfinder /> Foydalanuvchilar</SidebarLink>
                </SidebarItem>
                <SidebarItem>
                    <SidebarLink to="/admin/courses"><FaBook /> Kurslarimiz</SidebarLink>
                </SidebarItem>
                <SidebarItem>
                    <SidebarLink to="/admin/comments"><FaCommentDots /> Kommentlar</SidebarLink>
                </SidebarItem>
                {role != 'guest' && <UserProfile />}
                {/* Boshqa menyular */}
            </SidebarList>
        </SidebarContainer>
    );
}

export default AdminSidebar;
