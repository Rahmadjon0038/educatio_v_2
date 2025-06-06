import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Custommodal, Custommodalitem } from './style';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import login from '../../assets/login.png'
import { useState } from 'react';
import { getNotify } from '../../hooks/notify';
import { useLogin } from '../../hooks/users/useUsers';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '70%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 2,
};

export default function Login() {
    const notify = getNotify()
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [aye, setAye] = useState(false)

    const mutationLogin = useLogin()

    const [loginData, setLoginData] = useState({
        username: "",
        password: "",
    })

    const onchange = (e) => {
        let { name, value } = e.target;
        setLoginData({ ...loginData, [name]: value })
    }

    const handleSumbit = (e) => {
        e.preventDefault();
        if (loginData?.password.length >= 6) {
            mutationLogin.mutate(loginData)
            // notify('ok', 'Kirish mofaqqiyatli')
            setLoginData({ ...loginData, username: "", password: '' })
        }
        else notify('err', `parol kamida 6 ta belgidan ko'proq bolishi kerak`)
    }

    return (
        <>
            <button onClick={handleOpen} className='btn'>Kirish</button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Box sx={style}>
                    <Custommodal>
                        <Custommodalitem>
                            <img src={login} alt="login img" />
                        </Custommodalitem>
                        <Custommodalitem>
                            <form onSubmit={handleSumbit}>
                                <h2>Tizimga kirish</h2>
                                <p>Tizimga kirish bilan foydalanishni osonlashtiring</p>
                                <label>
                                    <span>Foydalanuvchi nomi</span>
                                    <input name='username' onChange={onchange} required type="text" placeholder='Foydalanuvchi nomi' value={loginData?.username} />
                                </label>
                                <label>
                                    <span>Parol</span>
                                    <div className='aye'>
                                        <input name='password' onChange={onchange} required type={aye ? "text" : 'password'} placeholder='Parol' value={loginData?.password} />
                                        {aye ? <FaEye className='ayechild' onClick={() => setAye(!aye)} /> : <FaEyeSlash className='ayechild' onClick={() => setAye(!aye)} />}
                                    </div>
                                </label>
                                <div className="btnbox">
                                    <button>Kirish</button>
                                </div>
                            </form>
                        </Custommodalitem>
                    </Custommodal>
                </Box>
            </Modal>
        </>
    );
}
