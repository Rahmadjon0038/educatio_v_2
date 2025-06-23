import styled from "styled-components";

export const Container = styled.footer`
  background: rgb(37, 38, 65);
  color: #eee;
  padding: 40px 60px;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: 26px;
  font-weight: bold;
  justify-content: center;
  margin-bottom: 30px;

  img {
    width: 70px;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 40px;
`;

export const Section = styled.div`
  flex: 1;
  min-width: 250px;

  h4 {
    font-size: 20px;
    margin-bottom: 20px;
    border-bottom: 2px solid #444;
    padding-bottom: 8px;
    color: #fff;
  }
`;

export const Item = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 16px;

  .icon {
    font-size: 18px;
    color: #00b894;
  }

  a {
    display: block;
    color: #bbb;
    font-size: 14px;
    text-decoration: none;

    &:hover {
      color: #00b894;
    }
  }

  span {
    color: #ccc;
  }

  strong {
    color: #fff;
    display: block;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 20px;
  font-size: 22px;
  margin-top: 10px;

  a {
    color: #bbb;
    transition: 0.3s ease;

    &:hover {
      color: #00b894;
    }
  }
`;

export const Copyright = styled.p`
  text-align: center;
  margin-top: 40px;
  font-size: 14px;
  color: #666;
`;
