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
  display: flex;
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap: 30px;

`;

export const Card = styled.div`
    border: 2px solid #812333;
    border-radius: 8px;
    box-shadow: 0 8px 0px  #812333;
    overflow: hidden;
  

  .imgcard{
    height: 200px;
    overflow: hidden;
    img{
      transition:.3s;
      width: 100%;
      height: 100%;
      object-fit: cover;
      &:hover{
        transform: scale(1.1);
      }
    }
  }
  .data{
    padding: 10px;

  }
  .data p{
    line-height: 24px;
  }

  .data button{
    margin-top: 10px;
    padding: 6px 30px;
    background: linear-gradient(135deg, #6a1d28, #8c2b3c);
    color: white;
    border-radius: 4px;
    border: none;
    cursor: pointer;
  }
`;


export const News = styled.div``;


