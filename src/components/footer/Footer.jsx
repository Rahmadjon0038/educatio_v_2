import { Container, Logo, Content, Section, Item, Copyright, SocialIcons } from "./style";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <Container>
      <Logo>
        <img src={logo} alt="logo" />
        Taraqqiyot
      </Logo>

      <Content>
        <Section>
          <h4>Manzillar</h4>
          <Item>
            <i className="fa-solid fa-location-dot icon"></i>
            <div>
              <strong>Namangan</strong>
              <a href="https://maps.app.goo.gl/Wzhb8N4sfxKfx4yW9">Davlatobod</a>
            </div>
          </Item>
          <Item>
            <i className="fa-solid fa-location-dot icon"></i>
            <div>
              <strong>Namangan</strong>
              <a href="#">Boburshox</a>
            </div>
          </Item>
          <Item>
            <i className="fa-solid fa-location-dot icon"></i>
            <div>
              <strong>Namangan</strong>
              <a href="#">Chorsu</a>
            </div>
          </Item>
        </Section>

        <Section>
          <h4>Aloqa</h4>
          <Item>
            <i className="fa-solid fa-phone icon"></i>
            <span>+998 99 909 55 50 </span>
          </Item>
          <Item>
            <i className="fa-solid fa-phone icon"></i>
            <span>+998 99 695 55 50 </span>
          </Item>
          <Item>
            <i className="fa-solid fa-phone icon"></i>
            <span> +998 99 511 55 50 </span>
          </Item>
        </Section>

        <Section>
          <h4>Ijtimoiy tarmoqlar</h4>
          <SocialIcons>
            <a href="https://www.instagram.com/taraqqiyot_namangan?igsh=MWZiMWx6ODRpanJsYg==">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://t.me/taraqqiyot_natijalar">
              <i className="fa-brands fa-telegram"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-facebook"></i>
            </a>
          </SocialIcons>
        </Section>
      </Content>

      <Copyright>
        © 2025 Taraqqiyot o‘quv markazi. Barcha huquqlar himoyalangan.
      </Copyright>
    </Container>
  );
};

export default Footer;
