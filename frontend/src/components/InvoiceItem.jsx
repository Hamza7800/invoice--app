import { FlexContainer } from "../styles/reusableStyles";
import { Section, Status } from "../styles/HomePageStyles/invoiceItemStyles";
import { useNavigate } from "react-router-dom";

const InvoiceItem = ({ invoice }) => {
  const navigate = useNavigate();

  return (
    <Section
      style={{ color: "white" }}
      onClick={() => navigate(`/invoice/${invoice._id}`)}
    >
      <FlexContainer justify={"space-between"} className="nameId">
        <div className="id">
          <span className="hash">#</span>
          <span>{invoice.id}</span>
        </div>
        <h2 className="name">{invoice.clientName}</h2>
      </FlexContainer>
      <FlexContainer justify={"space-between"} align={"center"}>
        <div>
          <p className="due-date">
            Due{" "}
            {new Date(invoice.paymentDue).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <p className="price">${invoice.total}</p>
        </div>
        <Status status={invoice.status}>
          <FlexContainer justify={"space-between"} align={"center"}>
            <span className="circle"></span>
            <span className="status">{invoice.status}</span>
          </FlexContainer>
        </Status>
      </FlexContainer>
    </Section>
  );
};

export default InvoiceItem;
