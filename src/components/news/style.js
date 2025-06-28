import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 130px 100px 30px 100px;

  .avatar {
    width: 36px;
    height: 36px;
    object-fit: cover;
    border-radius: 50%;
    border: 1px solid #812333;
  }

  .answers {
    display: flex;
    align-items: center;
    color: #333;
    gap: 10px;
  }

  .title {
    line-height: 36px;
    font-family: 'Times New Roman', Times, serif;
    margin-top: 10px;
    font-size: 20px;
  }

  .desc {
    line-height: 24px;
    margin-top: 10px;
  }

  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`;

export const NewsTitle = styled.div`
  background-color: rgb(246, 246, 246);
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  line-height: 40px;

 
  span {
    color: #812333;
    font-weight: bold;
  }

  h2 {
    font-size: 24px;
  }
`;

export const Newest = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  margin-bottom: 50px;
  gap: 20px;

  .banner {
    width: 100%;
    max-height: 400px;
    object-fit: cover;
    border-radius: 12px;
  }

  .right {
    padding: 10px;
  }

  @media (min-width: 768px) {
    flex-direction: row;

    .right {
      padding: 0 20px;
    }
  }
    .title {
    font-size: 30px;
    font-family: 'Times New Roman', Times, serif;
    margin-top: 10px;
  }
`;

export const NewsCards = styled.div`
  column-count: 4;
  column-gap: 20px;
  

  @media (max-width: 1024px) {
    column-count: 2;
  }

  @media (max-width: 768px) {
    column-count: 1;
  }
`;

export const Card = styled.div`
  break-inside: avoid;
  background-color:rgb(245, 238, 238);
  border-radius: 12px;
  margin-bottom: 20px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0,0,0,0.05);

  .banner {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  .right {
    padding: 15px;
  }
`;
