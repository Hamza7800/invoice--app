import { useState, useEffect } from "react";
import ActionBar from "../components/ActionBar";
import Invoices from "../components/Invoices";
import InvoiceForm from "../components/InvoiceForm";
import { Home } from "../styles/HomePageStyles/homestyles";
import Overlay from "../components/Overlay";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setInvoices } from "../slices/invoiceSlice";
import { useGetAllInvoicesQuery } from "../slices/invoicesApiSlice";
import FullScreenLoader from "../components/Loader";

const HomePage = () => {
  const { data: invoices, isLoading, error } = useGetAllInvoicesQuery();
  const dispatch = useDispatch();

  const [showForm, setShowForm] = useState(false);
  const { userInfo } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (invoices) {
      dispatch(setInvoices(invoices));
    }
  }, [invoices, dispatch]);

  useEffect(() => {
    if (showForm) {
      document.body.classList.add("overflow");
    } else {
      document.body.classList.remove("overflow");
    }
  }, [showForm]);

  return (
    <Home>
      {error ? <>Error</> : isLoading ? <FullScreenLoader /> : null}
      {/* {userInfo ? (
        <> */}
      <ActionBar setShowForm={setShowForm} />
      <Invoices />
      <InvoiceForm showForm={showForm} setShowForm={setShowForm} />
      {showForm && <Overlay onClose={() => setShowForm(false)} />}
      {/* </> 
       ) : ( */}
      {/* <div className="no_invoices">
          <p>Please Login to get your invoices</p>
          <Link to={"/login"}>Login</Link>
        </div> */}
      {/* )} */}
    </Home>
  );
};

export default HomePage;
