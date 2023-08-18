import { Outlet, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Home } from "../styles/HomePageStyles/homestyles";

const PrivateRoute = () => {
  const { userInfo } = useSelector((state) => state.auth);
  return userInfo ? (
    <Outlet />
  ) : (
    <Home>
      <div className="no_invoices">
        <p>Please Login to get your invoices</p>
        <Link to={"/login"}>Login</Link>
      </div>
    </Home>
  );
};

export default PrivateRoute;
