import React from "react";
import { Container, Content, Logo, Links, LinkColumn, LinkTitle, StyledLink, SocialIcons, Icon, Copyright } from "./style";

const Footer = () => {
  return (
    <Container>
      <Content>
        <Logo>Taraqqiyot</Logo>

        <Links>
          <LinkColumn>
            <LinkTitle>Tezkor havolalar</LinkTitle>
            <StyledLink href="/">Asosiy</StyledLink>
            <StyledLink href="/courses">Yo‘nalishlar</StyledLink>
            <StyledLink href="/news">Blog</StyledLink>
            <StyledLink href="/contact">Aloqa</StyledLink>
          </LinkColumn>

          <LinkColumn>
            <LinkTitle>Ijtimoiy tarmoqlar</LinkTitle>
            <SocialIcons>
              <Icon href="https://t.me/taraqqiyot" target="_blank">
                <i className="fab fa-telegram-plane" />
              </Icon>
              <Icon href="https://instagram.com/taraqqiyot" target="_blank">
                <i className="fab fa-instagram" />
              </Icon>
              <Icon href="https://youtube.com/@taraqqiyot" target="_blank">
                <i className="fab fa-youtube" />
              </Icon>
            </SocialIcons>
          </LinkColumn>
        </Links>
      </Content>
      <Copyright>
        © 2025 Taraqqiyot o‘quv markazi. Barcha huquqlar himoyalangan.
      </Copyright>
    </Container>
  );
};

export default Footer;
