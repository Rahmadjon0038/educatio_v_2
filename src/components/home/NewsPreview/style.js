import styled from "styled-components";

export const Container = styled.div`
  padding: 60px 100px;
  background-color: #fff;

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

export const Title = styled.h2`
  font-size: 28px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 40px;
  color: #333;
`;

export const NewsGrid = styled.div`
display: grid;
grid-template-columns: repeat(2,1fr);
gap: 100px;

`;

export const NewsCard = styled.div`
  background: #f8f8f8;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
  display: flex;
  align-items: center;
  margin-top: 20px;

  .imgBox{
    width: 25%;
    height: 100px;
  }
`;

export const Image = styled.img`
  object-fit: cover;
  border-radius: 10px;
  width: 100%;
  height: 100%;
`;

export const Info = styled.div`
  padding: 16px;
  flex: 1;
`;

export const DateText = styled.p`
  font-size: 14px;
  color: #888;
  margin-bottom: 8px;
`;

export const NewsTitle = styled.h3`
  font-weight: 600;
  color: #222;
  margin-bottom: 10px;
  font-size: 16px;
`;

export const Summary = styled.p`
  font-size: 15px;
  color: #555;
`;

export const Button = styled.a`
  display: inline-block;
  margin-top: 30px;
  padding: 10px 20px;
  background-color: #812333;
  color: #fff;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    background-color: #661b29;
  }
`;

export const SelectedNews = styled.div`
  padding: 20px;
  img{
    margin: 0 auto;
    width: 100%;
    border-radius: 20px;
    height: 50%;
    object-fit: cover;
  }
`