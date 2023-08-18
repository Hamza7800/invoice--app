import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useDispatch } from "react-redux";
import { setInvoices } from "./slices/invoiceSlice";
import { useGetAllInvoicesQuery } from "./slices/invoicesApiSlice";
import FullScreenLoader from "./components/Loader";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  // const { data: invoices, isLoading, error } = useGetAllInvoicesQuery();
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   if (invoices) {
  //     dispatch(setInvoices(invoices));
  //   }
  // }, [invoices, dispatch]);

  return (
    <div className="App">
      {/* <Navbar />
      {error ? (
        <>Error</>
      ) : isLoading ? (
        <FullScreenLoader />
      ) : invoices ? (
        <>{<Outlet />}</>
      ) : null}
      <ToastContainer /> */}
      <Navbar />

      {<Outlet />}
      <ToastContainer />
    </div>
  );
}

export default App;
