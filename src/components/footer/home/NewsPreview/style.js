import styled from "styled-components";

export const Container = styled.div`
  padding: 60px 80px;
  background-color: #fefefe;

  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 40px;
  color: #2d2d2d;
`;

export const NewsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const NewsCard = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.05);
  padding: 12px;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 20px rgba(0,0,0,0.08);
  }

  .imgBox {
    width: 160px;
    height: 100px;
    flex-shrink: 0;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
`;

export const Info = styled.div`
  flex: 1;
`;

export const DateText = styled.p`
  font-size: 13px;
  color: #999;
  margin-bottom: 5px;
`;

export const NewsTitle = styled.h3`
  font-size: 17px;
  font-weight: 600;
  margin-bottom: 5px;
  color: #222;
`;

export const Summary = styled.p`
  font-size: 15px;
  color: #555;
  line-height: 1.4;

  span {
    color: #812333;
    font-weight: 500;
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const Button = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(135deg, #812333, #a23544);
  color: white;
  padding: 10px 20px;
  border-radius: 10px;
  font-weight: 500;
  margin-top: 30px;
  text-decoration: none;
  transition: background 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, #6a1d28, #8c2b3c);
  }
`;

export const SelectedNews = styled.div`
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.06);
  overflow: hidden;

  img {
    width: 100%;
    height: 280px;
    object-fit: cover;
    border-radius: 4px;
  }

  padding: 20px;
  transition: all 0.3s ease;
`;
