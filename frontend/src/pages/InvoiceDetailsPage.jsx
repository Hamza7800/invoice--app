import { useParams } from "react-router-dom";
import { useGetInvoiceByIdQuery } from "../slices/invoicesApiSlice";
import FullScreenLoader from "../components/Loader";
import InvoiceDetails from "../components/InvoiceDetails";

const InvoiceDetailsPage = () => {
  const { id: invoiceId } = useParams();

  const { data: invoice, isLoading, error } = useGetInvoiceByIdQuery(invoiceId);
  console.log(invoice);

  return (
    <div style={{ color: "white" }}>
      {error ? (
        <h2>Error</h2>
      ) : isLoading ? (
        <FullScreenLoader />
      ) : invoice ? (
        <>
          <InvoiceDetails invoice={invoice} />
        </>
      ) : null}
    </div>
  );
};

export default InvoiceDetailsPage;
