import styled from "styled-components";

export const Container = styled.div`
  
`
export const ImgContainer = styled.div`
        display: flex;
        align-items: center;
        gap: 10px;
        cursor: pointer;
  img{
        width: 48px;
        height: 48px;
        object-fit: cover;
        border: 1px solid white;
        border-radius: 50%;
        background-color: rgb(240, 248, 255);
    }
`
export const Glass = styled.div`
  height: 60px;
  background:linear-gradient(90deg,rgb(180, 211, 240),rgb(253, 247, 225));
`

export const ModalContent = styled.div`
    padding: 20px;
  .profileimg{
    display: flex;
    align-items: center;
    justify-content: space-between;

    img{
      width: 100px;
      border-radius: 50%;
      background-color: aliceblue;
    }

    .info{
      display: flex;
      align-items: center;
      gap: 20px;

    }
    .infotext p{
      margin-top: 5px;
      color: rgb(128, 128, 128);
    }
    button{
      background-color: rgb(65, 130, 249);
      color: white;
      padding: 10px 20px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    button:hover{
      background-color: rgb(44, 111, 236);
    }
    button:active{
      transform: scale(0.97);
    }
  }
`;

export const UserInfoContainer = styled.div`
  margin-top:10px;
  padding: 10px;

  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(300px,1fr));
  gap: 100px;

  .userInput{
    background-color: rgb(229, 229, 229);
    border-radius: 4px;
    margin-top: 10px;
  }
`
export const UserInfo = styled.div`
  .userInfo{
    margin-top: 20px;
  }
  .userInfo .title{
  }
  .userInput p{
    padding: 14px;
    color: rgb(128, 128, 128);
  }
`
export const CreateAt = styled.p`
  margin: 20px 10px;
  color: rgb(71, 69, 69);
`
export const CustomInput = styled.input`
  width: 100%;
    padding: 14px;
    border: none;
    background-color: rgb(229, 229, 229);
    outline: none;
    border-radius: 4px;
    border: 1px solid rgb(44, 111, 236);
`
export const Logoutbtn = styled.button`
  padding: 8px 20px;
  color: white;
  background:red;
  border: none;
  border-radius: 4px;
  margin-left: 10px;
`
export const File = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  input{
    position: absolute;
    cursor: pointer;
    position: absolute;
    left: 30px;
    bottom: -5px;
    z-index: 100;
    opacity: 0;
  }
  img{
    width: 90px;
    height: 94px;
    object-fit: cover;
    object-position: center;
  }

  .renameicon{
    position: absolute;
    bottom: -5px;
    right: -5px;
    font-size: 20px;
    color:rgb(71, 69, 69);
    
  }
`