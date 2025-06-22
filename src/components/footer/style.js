import styled from "styled-components";

export const Container = styled.footer`
  background-color: #111;
  color: #eee;
  padding: 30px 100px 30px;

`;


export const Logo = styled.h2`
  font-size: 26px;
  font-weight: 700;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom:30px;
  img{
    width: 84px;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  margin: 0 100px;

`
export const Content_items = styled.div`
  border: 2px solid white;
  .icon{
    font-size: 30px ;
  }

  .item{
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 16px;
  }
  p{
    color: gray;
  }
`



export const Copyright = styled.p`
  text-align: center;
  margin-top: 40px;
  font-size: 14px;
  color: #666;

`;

