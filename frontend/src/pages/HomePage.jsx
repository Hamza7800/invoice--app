import { useState, useEffect } from "react";
import ActionBar from "../components/ActionBar";
import Invoices from "../components/Invoices";
import InvoiceForm from "../components/InvoiceForm";
import { Home } from "../styles/HomePageStyles/homestyles";
import Overlay from "../components/Overlay";
import { useDispatch } from "react-redux";
import { setInvoices } from "../slices/invoiceSlice";
import { useGetAllInvoicesQuery } from "../slices/invoicesApiSlice";
import FullScreenLoader from "../components/Loader";

const HomePage = () => {
  const { data: invoices, isLoading, error } = useGetAllInvoicesQuery();
  const dispatch = useDispatch();

  const [showForm, setShowForm] = useState(false);

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
      {error ? (
        <h2 className="error">{error?.data?.message}</h2>
      ) : isLoading ? (
        <FullScreenLoader />
      ) : null}
      <ActionBar setShowForm={setShowForm} />
      <Invoices />
      <InvoiceForm showForm={showForm} setShowForm={setShowForm} />
      {showForm && <Overlay onClose={() => setShowForm(false)} />}
    </Home>
  );
};

export default HomePage;
