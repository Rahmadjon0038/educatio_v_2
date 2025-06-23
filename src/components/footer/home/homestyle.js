import styled from "styled-components";

const Container = styled.div`
    padding: 130px 50px;
    min-height: 700px;
    position: relative;
    overflow: hidden;
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(40%,1fr));
    gap: 100px;
    align-items: center;
`
export const Bgmodal = styled.div`
    background-color:#812333;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    z-index: -1;
    border-bottom-left-radius: 130%;
    border-bottom-right-radius: 130%;
    transform: scale(2,1);
`
const Title = styled.h1`
    font-size: 48px;
    color: white;
    span{
        color: rgb(255, 165, 0);
    }
  
`
export const ContainerItem = styled.div`
    img{
        width: 70%;
        transform: scale(1.1) translate(50px,50px);
        top: 0;
    }
    padding: 20px;
    p{
    margin-top: 10px;
    font-size: 18px;
    line-height: 30px;
    color: rgb(250, 242, 242);
   }
   button{
    background-color: white;
    border-radius: 30px;
    padding: 14px 24px;
    font-size: 18px;
    margin-top: 30px;
    border: none;
   }
`

export const OurSucces = styled.div`
margin: 100px;
    
`
export const OurSuccesitem1 = styled.div`
    text-align: center;   
   width: 60%;
   margin: 0 auto;

   p{
    margin-top: 10px;
    font-size: 18px;
    line-height: 30px;
    color: rgb(52, 55, 67);
   }
`
export const OurSuccesitem2 = styled.div`   
   margin-top: 50px;
   padding: 10px;
   display: grid;
   grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
   gap: 10px;
   .total{    
    text-align: center;
   }
   .total h1{
    color: blue;
    font-size: 48px;
    font-weight: 200;
    background:linear-gradient(to right,rgb(129, 35, 51),rgb(212, 0, 35)) ;
    -webkit-background-clip:text;
    -webkit-text-fill-color: transparent;
    letter-spacing: 3px;
   }
   .total p{
    font-size: 18px;
    color: rgb(52, 55, 67);
   }


   
`
export const ShineText = styled.p`
  background: linear-gradient(90deg, #ff4e00, #ec9f05, #ff4e00);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shine 3s linear infinite;

  @keyframes shine {
    0% {
      background-position: 0% center;
    }
    100% {
      background-position: 200% center;
    }
  }
`




export { Container, Title }