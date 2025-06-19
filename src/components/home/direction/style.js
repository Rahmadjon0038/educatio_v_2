import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 50px 100px;
  p {
    margin-top: 10px;
    font-size: 18px;
    line-height: 30px;
    color: rgb(46, 44, 44);
  }
`;

export const Info = styled.div`
  margin: 0px 160px;
  text-align: center;
  h1 span {
    color: #812333;
  }
`;

export const Cards = styled.div`
  margin-top: 100px;
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
`;

export const Card = styled.div`
  box-shadow: 0 0 10px silver;
  padding: 10px;
  border-radius: 8px;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  transition: 0.5s;

  
  img {
      width: 100%;
      height: 55%;
      border-radius: 8px;
      object-fit: cover;
    }
    .card-item{
        border: 1px solid red;
  }

  h2 {
    color: rgb(47, 50, 125);
    margin-top: 16px;
  }

  p {
    font-size: 16px;
  }

  &:hover {
    transform: translateY(-10px); // Hover bo‘lganda ko‘tariladi
  }

  button {
    background: linear-gradient(to right, rgb(129, 35, 51), rgb(212, 0, 35));
    color: white;
    width: 100%;
    padding: 16px;
    margin: auto 0px 0px 0px;
    border-radius: 8px;
    border: none;
    font-size: 16px;

    &:hover {
      background-color: rgb(166, 46, 66); // Tugma ustiga olib borilganda rangi o‘zgaradi
      cursor: pointer;
    }

    &:active {
      transform: scale(0.9); // Bosilganda kichrayadi (feedback uchun)
    }
  }
`;


export const News = styled.div``;
