
import styled from "styled-components";

export const Container = styled.div`
    padding: 130px 50px;

  background-color: #f8f8f8;
  padding: 60px 100px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

export const Title = styled.h2`
  font-size: 28px;
  color: #333;
  font-weight: 700;
  margin-bottom: 40px;
`;

export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
`;

export const Card = styled.div`
  background: ${({ bgcolor }) => bgcolor ? bgcolor : 'white'};
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0,0,0,0.08);
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-5px);
  }
  display: flex;
  gap: 20px;
  align-items: start;

  h1{
    color:#9DD5C0 ;
    font-family: 'Playfair Display', serif;
    font-size: 64px;
    transform: translateY(-20px);
  }
`;

export const Avatar = styled.img`
  width:100px;
  height: 100px;
  border-radius: 50%;
  border: 2px solid white;
  object-fit: cover;
`;

export const Comment = styled.p`
  font-style: italic;
    color: white;

  font-size: 18px;
  margin: 10px 0px;
`;

export const Name = styled.h4`
  font-size: 24px;
  color: white;;
  font-weight: 600;
`;
