import { useEffect, useState } from "react";
import { useGetAllInvoicesQuery } from "../slices/invoicesApiSlice";
import InvoiceItem from "./InvoiceItem";
import FullScreenLoader from "./Loader";

const Invoices = () => {
  const { data: invoices, isLoading, error } = useGetAllInvoicesQuery();
  console.log(invoices);

  const renderInvoices = invoices?.map((invoice) => (
    <InvoiceItem key={invoice._id} invoice={invoice} />
  ));

  return (
    <div style={{ color: "white" }}>
      {error ? (
        <>Error</>
      ) : isLoading ? (
        <FullScreenLoader />
      ) : invoices ? (
        <>{renderInvoices}</>
      ) : null}
    </div>
  );
};

export default Invoices;
