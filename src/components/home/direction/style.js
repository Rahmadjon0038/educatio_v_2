import styled from "styled-components";
export const Wrapper = styled.div`
    padding: 50px 100px;
    p{
    margin-top: 10px;
    font-size: 18px;
    line-height: 30px;
    color: rgb(46, 44, 44);
   }
`
export const Info = styled.div`
    margin: 0px 160px;
    text-align: center;
    h1 span{
        color: rgb(0, 203, 184);
    }
`
export const Cards = styled.div`
    margin-top: 100px;
    padding: 10px;
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(300px,1fr));
    gap: 30px;
`
export const Card = styled.div`
    box-shadow: 0 0 10px silver;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
    border-top: 5px solid rgb(0, 203, 184);
    min-height: 200px;
    transition: 0.5s;
    h2{
        color: rgb(47, 50, 125);
        margin: 10px 0px;
    }
    p{
        font-size: 16px;
        
    }
    &:hover{
        transform: translateY(-10px);
    }
`
export const News = styled.div`
    
`