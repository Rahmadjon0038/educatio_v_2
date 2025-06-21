import { useState } from 'react';
import avatar from '../../assets/avatar.png'
import { Container, CreateAt, CustomInput, File, Glass, ImgContainer, Logoutbtn, ModalContent, UserInfo, UserInfoContainer } from './style'
import { FaAngleDown } from "react-icons/fa";
import { Box, Modal } from '@mui/material';
import Loader from '../loader/Loader';
import { useGetuser, useUpdateUser, useUpdateUserAvatar } from '../../hooks/users/useUsers';
import Cookies from 'js-cookie'
import { useUser } from '../../context/roleContext';
import { MdDriveFileRenameOutline } from "react-icons/md";
import MiniLoader from '../loader/miniLoader/MiniLoader';
import { FaUserSlash } from 'react-icons/fa';

function UserProfile() {
    const id = Cookies.get('userid');

    const { role, setRole } = useUser()

    const [edit, setEdit] = useState(true)
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true)
        setEdit(true)
    };
    const handleClose = () => setOpen(false);


    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '70%',
        bgcolor: 'background.paper',
        boxShadow: 24,
        borderRadius: '10px',
        // p: 2,
        minHeight: '400px',
        overflow: "hidden"
    };

    const { data, isLoading, error } = useGetuser(id ?? null); // null bersang, yuqoridagi `enabled` uni bloklaydi



    const updateMuattion = useUpdateUser(id)
    const [userUpdate, setUserUpdate] = useState({
        firstname: "",
        lastname: "",
        username: "",
    });

    const onchange = (e) => {
        let { name, value } = e.target;
        setUserUpdate({ ...userUpdate, [name]: value })
    }

    const saveUpdate = () => {
        updateMuattion.mutate({ id, userUpdate });
        setEdit(true);
    }

    const [avatarLoading, setAvatarLoading] = useState(false)
    const updateMuattionAvatar = useUpdateUserAvatar()
    const handleChange = (e) => {
        setAvatarLoading(true)
        const file = e.target.files[0];
        const formdata = new FormData()
        formdata.append('avatar', file)
        updateMuattionAvatar.mutate({
            id, formdata, onSuccess: (data) => {
                setAvatarLoading(false)
            }
        })
    }

    const logout = () => {
        Cookies.remove('role')
        Cookies.remove('token');
        Cookies.remove('userid')
        setRole('guest')
    }

    if (isLoading) {
        return <MiniLoader />
    }
    if (error) {
        return (
            <FaUserSlash size={30} />
        );
    }
    if (!data) return null;

    return (
        <Container>
            <ImgContainer onClick={handleOpen}>
                <img src={data?.avatar ? data?.avatar : avatar} alt="avatar" />
                <p>{data?.username}</p>
                <FaAngleDown />
            </ImgContainer>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Box sx={style}>
                    {isLoading ? <Loader /> :
                        <>
                            <Glass></Glass>
                            <ModalContent>
                                <div className='profileimg'>
                                    <div className='info'>
                                        <File >
                                            {avatarLoading ? <div style={{ position: 'relative', display: 'inline-block' }}>
                                                <img src={data?.avatar || avatar} alt="avatar" />
                                                {avatarLoading && <MiniLoader className="absolute" />}
                                            </div>


                                                : <img src={data?.avatar ? data.avatar : avatar} alt="avatar" />}

                                            <input type="file" onChange={handleChange} />
                                            <MdDriveFileRenameOutline className='renameicon' />
                                        </File>

                                        <div className="infotext">
                                            <h2>{data?.firstname} {data?.lastname}</h2>
                                            <p>{data?.email}</p>
                                        </div>
                                    </div>
                                    {edit ? < button onClick={() => setEdit(!edit)}>Yangilash</button> : <button onClick={saveUpdate}>Saqlash</button>}
                                </div>

                                <UserInfoContainer>
                                    <UserInfo>
                                        <div className='userInfo'>
                                            <p className='title'>Ismi</p>
                                            <div className='userInput'>
                                                {edit ? <p>{data.firstname}</p> : <CustomInput onChange={onchange} name="firstname" type="text" defaultValue={data?.firstname} />}
                                            </div>
                                        </div>
                                        <div className='userInfo'>
                                            <p className='title'>Familiya</p>
                                            <div className='userInput'>
                                                {edit ? <p>{data.lastname}</p> : <CustomInput name='lastname' onChange={onchange} type="text" defaultValue={data?.lastname} />}
                                            </div>
                                        </div>
                                    </UserInfo>
                                    <UserInfo>
                                        <div className='userInfo'>
                                            <p className='title'>Foydalanuvchi nomi</p>
                                            <div className='userInput'>
                                                {edit ? <p>{data.username}</p> : <CustomInput name='username' onChange={onchange} type="text" defaultValue={data?.username} />}
                                            </div>
                                        </div>
                                        <div className='userInfo'>
                                            <p className='title'>Email</p>
                                            <div className='userInput'>
                                                <p>{data.email}</p>
                                            </div>
                                        </div>
                                    </UserInfo>
                                </UserInfoContainer>
                                <CreateAt>Yaratildi {data.createdAt.slice(0, data.createdAt.indexOf('T'))}</CreateAt>
                                <Logoutbtn onClick={logout}>Accountdan Chiqish</Logoutbtn>
                            </ModalContent>
                        </>
                    }
                </Box>
            </Modal>
        </Container >
    )
}

export default UserProfile