import logo from "../assets/logo.svg";
import imgAvatar from "../assets/image-avatar.jpg";
// styles
import {
  Nav,
  Header,
  ImageContainer,
  LogoContainer,
} from "../styles/HomePageStyles/navBarStyles";
import { useNavigate } from "react-router-dom";
import { useLogoutMutation } from "../slices/userAuthApiSlice";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../slices/authSlice";
import { toast } from "react-toastify";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);

  const [logoutUser] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutUser();
      dispatch(logout());
      navigate("/login");
      toast.success("Logged out successfully");
    } catch (err) {
      console.log("Something went wrong");
    }
  };

  return (
    <Header>
      <Nav>
        <LogoContainer onClick={() => navigate("/")}>
          <img src={logo} alt="Logo" />
          <div className="behind-logo"></div>
        </LogoContainer>
        <ImageContainer>
          {userInfo ? (
            <button onClick={logoutHandler}>Logout</button>
          ) : (
            <button onClick={() => navigate("/login")}>Login</button>
          )}
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
