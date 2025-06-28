import React, { useState } from 'react'
import axios from 'axios'
import Header from '../components/about/Header'
// import Team from '../components/about/Team/Team'
// import Branch from '../components/about/branch/Branch'

function About() {
  const [formData, setFormData] = useState({
    username: '',
    firstname: '',
    desc: '',
    images: null
  });

  const handleChange = (e) => {
    if (e.target.name === 'images') {
      setFormData({ ...formData, images: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('username', formData.username);
    data.append('firstname', formData.firstname);
    data.append('desc', formData.desc);
    data.append('images', formData.images); // file

    try {
      const res = await axios.post('http://localhost:5000/api/students', data);
      console.log('Yangi student qo‘shildi:', res.data);
      alert('Muvaffaqiyatli qo‘shildi!');
    } catch (err) {
      console.error('Xatolik:', err);
      alert('Xatolik yuz berdi!');
    }
  };

  return (
    <>
      <Header />
      {/* <Team /> */}
      {/* <Branch /> */}

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mx-auto mt-10">
        <input
          type="text"
          name="username"
          placeholder="Foydalanuvchi nomi"
          value={formData.username}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="firstname"
          placeholder="Ismi"
          value={formData.firstname}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="desc"
          placeholder="Qisqacha ma'lumot"
          value={formData.desc}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          type="file"
          name="images"
          accept="image/*"
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Yuborish
        </button>
      </form>
    </>
  )
}

export default About
