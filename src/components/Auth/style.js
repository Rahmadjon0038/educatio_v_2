import styled from "styled-components";

export const Custommodal = styled.div`
    display: grid;
    /* grid-template-columns: repeat(auto-fit,minmax(300px,1fr)); */
    grid-template-columns: repeat(2,1fr);

    gap: 20px;
`
export const Custommodalitem = styled.div`
    padding: 10px;
    min-height: 400px;
    form {
        display: flex;
        flex-direction: column;
        color: #333;
    }
    form p{
        font-size: 18px;
        margin-top: 30px;
        text-align: center;
    }
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    @media(max-width:1024px){
     
    }
    form h2{
        text-align: center;
        
    }
    form label{
        margin-top: 20px;
    }
    form label span{
        margin-left: 10px;
    }
    form input{
        width: 100%;
        padding: 10px;
        margin-top: 10px;
        font-size: 18px;
        border-radius: 30px;
        border: 1px solid rgb(73, 187, 189);
        outline: none;
    }
    form input:focus{
        border: 1px solid rgb(0, 46, 230);
    }
     form button{
        font-size: 18px;
        margin-top: 24px;
        padding: 10px 50px;
        border: none;
        border-radius: 30px;
        background-color: rgb(73, 187, 189);
        color: aliceblue;
     }
      form button:hover{
        cursor: pointer;
      }
      .btnbox{
        display: flex;
        justify-content: end;
      }

      form .aye{
        position: relative;
      }
      form .ayechild{
        position: absolute;
        right: 16px;
        top: 48%;
        cursor: pointer;
      }
`