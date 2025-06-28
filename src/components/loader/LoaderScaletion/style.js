import styled from "styled-components";

export const Container = styled.div`
  width: 13;
  min-height: 200px;
  box-shadow: 0 0 10px silver;
  margin-top: 20px;
  border-radius: 10px;
  background: linear-gradient(90deg,rgb(244, 244, 244) 25%,rgb(234, 232, 232) 50%,rgb(246, 246, 246) 75%);
  background-size: 200% 100%;
  animation: loading 2.5s infinite;

  @keyframes loading {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`;
