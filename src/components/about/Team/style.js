import styled from "styled-components";

export const Container = styled.div`
    padding: 50px 100px;

    .desc{
        text-align: center;
        margin-top: 10px;
    }
`
export const Title = styled.h1`
    text-align: center;
    color: rgb(129, 35, 51);
`
export const Teams = styled.div`
    margin-top: 50px;
    padding: 10px;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 20px;
`
export const Card = styled.div`
    border: 2px solid #F3F1ED;
    border-radius: 10px;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    transition: .5s;
    z-index: 100;
    min-height: 300px;
    img{
        width: 100%;
        height: 300px;
        object-fit: cover;
        object-position: top;
    }

    &:hover{
        .titleinfo{
            opacity: 0;
        }
        .info{
            z-index: 100;
            transform: translateY(0%) ;

        }
    }

    .info{
        position: absolute;
        top: 0;
        left: 0;
        padding: 10px;
        background-color: #812333;
        color: white;
        z-index: 20;
        height: 100%;
        transform: translateY(100%);
         transition: .3s;
         width: 100%;
         line-height: 24px;

    }
`
export const TitleInfo = styled.div`
    transition: .5s;
    position: absolute;
    bottom: 18px;
    background-color: white;
    border-radius: 10px;
    padding: 10px;
    text-align: center;
    left: 50%;
    border: 2px solid #F3F1ED;
    transform: translateX(-50%);
    width: 90%;

`