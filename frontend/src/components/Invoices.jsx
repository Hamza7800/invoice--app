import InvoiceItem from "./InvoiceItem";
import { useSelector } from "react-redux";

const Invoices = () => {
  const { invoices } = useSelector((state) => state.invoices);

  const renderInvoices = invoices?.map((invoice) => (
    <InvoiceItem key={invoice._id} invoice={invoice} />
  ));

  return <div style={{ color: "white" }}>{renderInvoices}</div>;
};

export default Invoices;
