import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Custommodal, Custommodalitem } from './style';
import { FaEye, FaEyeSlash } from "react-icons/fa";

import login from '../../assets/regis.png'
import { useState } from 'react';
import { getNotify } from '../../hooks/notify';

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

export default function Register() {
    const notify = getNotify()
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [aye, setAye] = useState(false)

    const [registerData, setRegisterdata] = useState({
        email: "",
        name: "",
        password: "",
    })

    const onchange = (e) => {
        let { name, value } = e.target;
        setRegisterdata({ ...registerData, [name]: value })
    }

    const handleSumbit = (e) => {
        e.preventDefault();
        if (registerData?.password.length >= 6) {
            console.log(registerData)
            notify('ok',"Ro'yhatdan o'tish mofaqqiyatli")
            setRegisterdata({ ...registerData, email: "", name: "", password: '' })
        }
        else notify('err', 'parol kamida 6 ta belgidan koproq bolishi kerak')
    }

    return (
        <>
            <button onClick={handleOpen} className='btn'>Registratsiya</button>
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
                                <h2>Ro'yxatdan o'tish</h2>
                                <p>Ro'yxatdan o'ting va uz kurslaringizni joylang</p>
                                <label>
                                    <span>Email manzil</span>
                                    <input name='email' onChange={onchange} required type="email" placeholder='email manzil kiriting' value={registerData?.email} />
                                </label>
                                <label>
                                    <span>Foydalanuvchi nomi</span>
                                    <input name='name' onChange={onchange} required type="text" placeholder='Foydalanuvchi nomi' value={registerData?.name} />
                                </label>
                                <label>
                                    <span>Parol</span>
                                    <div className='aye'>
                                        <input name='password' onChange={onchange} required type={aye ? "text" : 'password'} placeholder='Parol' value={registerData?.password} />
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
