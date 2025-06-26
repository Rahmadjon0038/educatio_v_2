import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 130px 100px 30px 100px;
`
export const NewsTitle = styled.div`
    background-color: rgb(246, 246, 246);
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    line-height: 40px;
    span{
        color: #812333;
    }
`

export const Newest = styled.div`
    margin-top: 30px;
    border-radius: 10px;
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(300px,1fr));
    gap: 50px;

    .banner{
        width: 100%;
        border-radius: 10px;
        object-fit: cover;
    }
    .right{
        padding: 16px 0px;
    }
    .avatar{
        width: 36px;
        height: 36px;
        object-fit: cover;
        border-radius: 50%;
        border: 1px solid #812333;
    }

    .answers{
        display: flex;
        align-items: center;
        color: #333;
        gap: 10px;
    }

    .title{
        line-height: 36px;
        font-family: 'Times New Roman', Times, serif;
        margin-top: 10px;

    }
    .desc{
        line-height: 24px;
        margin-top: 10px;
    }
`
