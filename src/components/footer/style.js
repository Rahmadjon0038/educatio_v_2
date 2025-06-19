import styled from "styled-components";

export const Container = styled.footer`
  background-color: #111;
  color: #eee;
  padding: 60px 20px 30px;
`;

export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 40px;
`;

export const Logo = styled.h2`
  font-size: 26px;
  font-weight: 700;
  color: #fff;
`;

export const Links = styled.div`
  display: flex;
  gap: 60px;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 30px;
  }
`;

export const LinkColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LinkTitle = styled.h4`
  font-size: 16px;
  margin-bottom: 15px;
  color: #ddd;
`;

export const StyledLink = styled.a`
  color: #aaa;
  text-decoration: none;
  margin-bottom: 10px;
  font-size: 15px;

  &:hover {
    color: #fff;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 20px;
`;

export const Icon = styled.a`
  color: #aaa;
  font-size: 20px;

  &:hover {
    color: #fff;
  }
`;

export const Copyright = styled.p`
  text-align: center;
  margin-top: 40px;
  font-size: 14px;
  color: #666;
`;
