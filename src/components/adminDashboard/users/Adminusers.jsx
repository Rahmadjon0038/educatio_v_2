import React, { useState } from 'react'
import { Container, ContainerItem, ContainerItemDesc, ModalButtons, ModalDesc, UsersData } from './style'
import { useUser } from '../../../context/roleContext'
import { AiOutlineUserDelete } from "react-icons/ai";

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Tooltip from '@mui/material/Tooltip';
import Modal from '@mui/material/Modal';
import { getNotify } from '../../../hooks/notify';
import { useGetAllUsers } from '../../../hooks/users/useUsers';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: "4px",
  p: 2,
  outline: 'none',
};

function Adminusers() {

  // -----  get all users -----------
  const { data: allusers, isLoading: alluserLoading, error: allusersError } = useGetAllUsers();
  const { role, setRole, data, isLoading, error } = useUser();

  const notify = getNotify();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [roleValue, setRoleValue] = useState();


  const handleRoleChange = (event) => {
    console.log(event.target.value)
  };

  const handleDelete = () => {
    notify('ok', 'Foydalanuvchi mofaqqiyatli o\'chirildi')
    handleClose()
  }



  return (
    <Container>
      <ContainerItem>
        {allusers?.map((item) => (
          <UsersData key={item.id}>
            <div className='info'>
              <img src={item?.avatar} alt="img" />
              <strong>{item?.username} {item?.lastname}</strong>
              <p>{item?.email}</p>
            </div>

            <div className='info'>
              <label htmlFor="">
                {item.role}
              <select name="" id="" onChange={handleRoleChange}>
                <option value={item?.id}>admin</option>
                <option value={item?.id}>user</option>
                <option value={item?.id}>ticher</option>
              </select>
              </label>


              <Tooltip title="Delete" placement='right'>
                <AiOutlineUserDelete onClick={handleOpen} className='userDelete' />
              </Tooltip>

            </div>


          </UsersData>
        ))}


      </ContainerItem>

      <ContainerItemDesc>
        <p>
          Platformamizda uchta asosiy rol mavjud: <strong>Admin</strong>, <strong>Teacher</strong> va <strong>User</strong>.
          Har birining vazifalari va imkoniyatlari quyidagicha:
        </p>
        <ul>
          <li>
            <strong>Admin</strong> — tizimning to‘liq boshqaruvchisidir. Quyidagilarni amalga oshiradi:
            <ul>
              <li>Yangi kurslar va yangiliklar yaratadi</li>
              <li>Foydalanuvchilarni o‘chirish, ularning rollarini o‘zgartirish</li>
              <li>Barcha foydalanuvchilar ustidan monitoring olib borish</li>
            </ul>
          </li>
          <li>
            <strong>Teacher</strong> — o‘quv jarayonini tashkil qiladi:
            <ul>
              <li>Yangi kurslar yaratish</li>
              <li>Active studentlarni kursga qo‘shish</li>
              <li>O‘zi haqida ma’lumot kiritish</li>
            </ul>
          </li>
          <li>
            <strong>User</strong> — platformadan foydalanuvchi oddiy foydalanuvchi:
            <ul>
              <li>Kurslarni ko‘rish va ulardan foydalanish</li>
              <li>Kurslarga izoh (fikr) bildirish</li>
            </ul>
          </li>
        </ul>
        <p>
          E’tibor bering: <strong>har bir foydalanuvchi o‘z profilingi ma’lumotlarini yangilay oladi</strong>.
        </p>
      </ContainerItemDesc>
    </Container>
  )
}

export default Adminusers