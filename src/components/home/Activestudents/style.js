import styled from "styled-components";

export const Wrapper = styled.div`
      padding: 0 100px;
      h1{
        text-align: center;
        margin-bottom: 20px;
      }
      span{
        color: #812333;
      }
    .subtitle{
        text-align: center;
        color: #812333;
    }

`

export const Cards = styled.div`
    min-height: 300px;
    margin: 10px;
`
export const Card = styled.div`
    margin: 10px;
    text-align: center;
    img{
        display: block;
        margin: 0 auto;
        border-radius: 8px;
        height: 200px;
        width: 90%;
        object-fit: cover;
    }
    h3{
        margin: 10px 0px;
    }
`
