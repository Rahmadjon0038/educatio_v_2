import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const NotFoundContainer = styled.div`
  min-height: 100vh;
  background-color: rgb(73, 187, 189);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  padding: 50px;
  text-align: center;
`

const NotFoundTitle = styled.h1`
  font-size: 96px;
  margin: 0;
  color: rgb(255, 165, 0);
`

const NotFoundText = styled.p`
  font-size: 24px;
  max-width: 600px;
  margin-top: 20px;
  color: #fff;
  line-height: 1.6;
`

const HomeButton = styled(Link)`
  margin-top: 40px;
  background-color: white;
  color: rgb(73, 187, 189);
  padding: 14px 28px;
  border-radius: 30px;
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgb(255, 165, 0);
    color: white;
  }
`

const NotFound = () => {
  return (
    <NotFoundContainer>
      <NotFoundTitle>404</NotFoundTitle>
      <NotFoundText>Sahifa topilmadi. Balki noto‘g‘ri yo‘l kiritilgandir yoki sahifa o‘chirilgan.</NotFoundText>
      <HomeButton to="/home">Bosh sahifaga qaytish</HomeButton>
    </NotFoundContainer>
  )
}

export default NotFound
