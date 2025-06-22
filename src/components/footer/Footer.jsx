import { Container, Logo, Copyright, Content, Content_items } from "./style";
import { MdPlace } from "react-icons/md";
import logo from '../../assets/logo.png'
import { FaPhoneVolume } from "react-icons/fa";
const Footer = () => {
  return (
    <Container>
      <Logo>
        <img src={logo} alt="logo" />
        Taraqqiyot
      </Logo>
      <Content>
        <Content_items>
          <div className="item">
            <MdPlace className="icon" />
            <div>
              <h4>Namangan</h4>
              <p>Otchopar tegen market ro'parasi</p>
            </div>

          </div>
          <div className="item">
            <FaPhoneVolume className="icon" />
            <h4>+99897 212 00 38</h4>
          </div>
          <div>

          </div>
        </Content_items>

        <Content_items>Ishtimoiy tarmoqlar</Content_items>
      </Content>


      <Copyright>
        © 2025 Taraqqiyot o‘quv markazi. Barcha huquqlar himoyalangan.
      </Copyright>
    </Container>
  );
};

export default Footer;
