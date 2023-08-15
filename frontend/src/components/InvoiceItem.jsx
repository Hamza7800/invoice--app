import { FlexContainer } from "../styles/reusableStyles";
import { Section, Status } from "../styles/HomePageStyles/invoiceItemStyles";
import { useNavigate } from "react-router-dom";
import arrowRight from "../assets/icon-arrow-right.svg";

const InvoiceItem = ({ invoice }) => {
  const navigate = useNavigate();

  return (
    <Section
      style={{ color: "white" }}
      onClick={() => navigate(`/invoice/${invoice._id}`)}
    >
      <div className="id-n-due-date">
        <FlexContainer justify={"space-between"} className="nameId">
          <div className="id">
            <span className="hash">#</span>
            <span>{invoice.customId}</span>
          </div>
        </FlexContainer>
        <div>
          <p className="due-date">
            Due{" "}
            {new Date(invoice.paymentDue).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      </div>
      <h2 className="name">{invoice.clientName}</h2>
      <div className="price-status">
        <p className="price">${invoice.total}</p>
        <Status status={invoice.status}>
          <FlexContainer justify={"center"} align={"center"}>
            <span className="circle"></span>
            <span className="status">{invoice.status}</span>
          </FlexContainer>
        </Status>
        <img src={arrowRight} className="img" alt="" />
      </div>
    </Section>
  );
};

export default InvoiceItem;
