import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useDispatch } from "react-redux";
import { setInvoices } from "./slices/invoiceSlice";
import { useGetAllInvoicesQuery } from "./slices/invoicesApiSlice";
import FullScreenLoader from "./components/Loader";

function App() {
  const { data: invoices, isLoading, error } = useGetAllInvoicesQuery();
  const dispatch = useDispatch();

  useEffect(() => {
    if (invoices) {
      dispatch(setInvoices(invoices));
    }
  }, [invoices, dispatch]);

  return (
    <h1 className="App">
      <Navbar />
      {error ? (
        <>Error</>
      ) : isLoading ? (
        <FullScreenLoader />
      ) : invoices ? (
        <>{<Outlet />}</>
      ) : null}
    </h1>
  );
}

export default App;
