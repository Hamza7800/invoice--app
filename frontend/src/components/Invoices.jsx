import InvoiceItem from "./InvoiceItem";
import { useSelector } from "react-redux";

const Invoices = () => {
  const { invoices } = useSelector((state) => state.invoices);

  const renderInvoices =
    invoices?.length === 0 ? (
      <div
        style={{
          textAlign: "center",
          fontSize: "1.3rem",
          marginTop: "2rem",
          lineHeight: "3rem",
        }}
      >
        <h2>No Invoices</h2>
        <p>Click on the New button to create one</p>
      </div>
    ) : (
      invoices?.map((invoice) => (
        <InvoiceItem key={invoice._id} invoice={invoice} />
      ))
    );

  return <div style={{ color: "white" }}>{renderInvoices}</div>;
};

export default Invoices;
