import styled from "styled-components";

export const Container = styled.div`
    border: 2px solid red;
    display: grid;
    grid-template-columns: 2fr 1fr;
    padding: 10px;
`
export const ContainerItem = styled.div`
`
export const ContainerItemDesc = styled.div`
  padding: 28px 32px;
  font-family: 'Segoe UI', sans-serif;
  color: #333;
  line-height: 1.7;
  margin-bottom: 30px;
  transition: all 0.3s ease;


  p {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 20px;
  }

  ul {
    list-style: none;
    padding-left: 0;

    li {
      margin-bottom: 8px;
      font-size: 16px;
      background-color:rgb(244, 239, 239);
      padding: 14px 20px;
      border-radius: 12px;
      position: relative;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: #dfeaff;
      }

      & > ul {
        margin-top: 10px;

        li {
          background: none;
          padding: 6px 0 6px 18px;
          font-size: 15px;
          color: #444;
          border-radius: 0;
          &:before {
            content: '•';
            color: #007bff;
            margin-right: 8px;
          }
        }
      }
    }
  }

  strong {
    color: #0070f3;
  }
`;

export const UsersData = styled.div`
    background-color:rgb(255, 255, 255);
    border: 2px solid rgb(211, 211, 211);
    padding:10px 20px;
    border-radius: 12px;
    display: flex;
    margin-top: 5px;
    align-items: center;
    justify-content: space-between;
    .info{
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    }
    img{
        width: 44px;
        height: 44px;
        background-color: aliceblue;
        border-radius: 50%;
        object-fit: cover;
        object-position: top;
    }
    .info strong p{
        font-size: 14px;
    }
    .userDelete{
        font-size: 24px;
        cursor: pointer;
    }
`
export const ModalDesc = styled.div`
    color: red;
    margin-bottom: 20px;
`
export const ModalButtons = styled.button`
    padding:8px 30px;
    border: none;
    outline: none;
    border-radius: 4px;
    cursor: pointer;
    display: block;
    border: 1px solid red;
    background-color: white;
    margin: 10px auto 0px auto;

    &:hover{
      color: white;
      background-color: red;
    }
`
export const CustomSelect = styled.select`
  border: none;
  outline: none;
  padding: 6px;

  option{
    border: none;
  }
`