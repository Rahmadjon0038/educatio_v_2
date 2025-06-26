import styled from "styled-components";

export const Container = styled.div`
  padding: 50px 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
  color: rgb(129, 35, 51);
  text-align: center;
`;

export const Description = styled.p`
  font-size: 18px;
  text-align: center;
  max-width: 800px;
  color: #555;
`;

export const BranchList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  width: 100%;
`;

export const BranchCard = styled.div`
  background-color: #f9f9f9;
  border-radius: 14px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.08);
  overflow: hidden;
`;

export const MapWrapper = styled.div`
  width: 100%;
  iframe {
    border-radius: 14px 14px 0 0;
  }
`;

export const Info = styled.div`
  padding: 20px;

  h3 {
    font-size: 20px;
    color: #2c3e50;
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
    color: #444;
    margin: 5px 0;
  }
`;
