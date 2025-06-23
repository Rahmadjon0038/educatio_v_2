import styled from "styled-components";

export const Wrapper = styled.section`
  padding: ${({ padding }) => padding || "160px 100px 50px 100px"};
  background-color: ${({ bg }) => bg || "rgb(245, 249, 252)"};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  align-items: center;
  gap: 50px;

  h2 {
    font-size: 30px;
    font-weight: 600;
    color: #812333;
  }

  p {
    margin-top: 10px;
    line-height: 24px;
    color: rgb(75, 76, 76);
    text-align: justify;
  }

  @media (max-width: 768px) {
    padding: ${({ padding }) => padding || "80px 20px 40px 20px"};
    grid-template-columns: 1fr;
    gap: 50px;

    h2 {
      font-size: 24px;
    }

    p {
      font-size: 15px;
      line-height: 22px;
    }
  }

  @media (max-width: 480px) {
    padding: 60px 16px 30px 16px;

    h2 {
      font-size: 20px;
    }

    p {
      font-size: 14px;
    }
  }
`;

export const HeaderCard = styled.div`
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    object-position: center;
    border-radius: 4px;
  }
`;
