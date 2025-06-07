import { useState } from 'react';
import avatar from '../../assets/avatar.png'
import { Container, CreateAt, CustomInput, Glass, ImgContainer, ModalContent, UserInfo, UserInfoContainer } from './style'
import { FaAngleDown } from "react-icons/fa";
import { Box, Modal } from '@mui/material';
import Loader from '../loader/Loader';
import { useGetuser, useUpdateUser } from '../../hooks/users/useUsers';
import Cookies from 'js-cookie'

function UserProfile() {
    const [edit, setEdit] = useState(true)
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true)
        setEdit(true)
    };
    const handleClose = () => setOpen(false);

    const id = Cookies.get('userid')

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

    const { data, isLoading, error } = useGetuser(id);
    if (error) {
        return <h1>Token yaroqsiz</h1>
    }
    const updateMuattion = useUpdateUser()
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
        setEdit(!edit)
        updateMuattion.mutate({ id, userUpdate })
    }


    return (
        <Container>
            <ImgContainer onClick={handleOpen}>
                <img src={avatar} alt="avatar" />
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
                                        <img src={avatar} alt="avatar" />
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
                            </ModalContent>
                        </>
                    }
                </Box>
            </Modal>
        </Container >
    )
}

export default UserProfile