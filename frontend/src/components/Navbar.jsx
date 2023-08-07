import logo from "../assets/logo.svg";
import sunSvg from "../assets/icon-sun.svg";
import imgAvatar from "../assets/image-avatar.jpg";
// styles
import {
  Nav,
  Header,
  ImageContainer,
  LogoContainer,
} from "../styles/HomePageStyles/navBarStyles";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <Header>
      <Nav>
        <LogoContainer onClick={() => navigate("/")}>
          <img src={logo} alt="Logo" />
          <div className="behind-logo"></div>
        </LogoContainer>
        <ImageContainer>
          <div>
            <img src={sunSvg} alt="toogle-theme" />
          </div>
          <div className="divider"></div>
          <div>
            <img src={imgAvatar} alt="imgAvater" className="avatar" />
          </div>
        </ImageContainer>
      </Nav>
    </Header>
  );
};

export default Navbar;
