import { FlexContainer } from "../styles/reusableStyles";
import { Status } from "../styles/HomePageStyles/invoiceItemStyles";
import {
  Section,
  ItemsContainer,
} from "../styles/InvoiceDetailsStyles/invoiceDetails";

const InvoiceDetails = ({ invoice }) => {
  return (
    <Section>
      <div className="container">
        <FlexContainer justify={"space-between"} align={"center"}>
          <div className="subtitle" style={{ marginBottom: 0 }}>
            Status
          </div>
          <Status status={invoice?.status}>
            <FlexContainer justify={"space-between"} align={"center"}>
              <span className="circle"></span>
              <span className="status">{invoice?.status}</span>
            </FlexContainer>
          </Status>
        </FlexContainer>
      </div>

      <section className="container">
        <FlexContainer direction={"column"}>
          <div>
            <div>
              <p className="id">
                <span className="hash">#</span>
                <span>{invoice.id}</span>
              </p>
              <h2 className="subtitle">{invoice?.description}</h2>
            </div>
          </div>

          <div className="subtitle">
            <p>{invoice?.senderAddress?.street}</p>
            <p>{invoice?.senderAddress?.city}</p>
            <p>{invoice?.senderAddress?.postCode}</p>
            <p>{invoice?.senderAddress?.country}</p>
          </div>
        </FlexContainer>

        <FlexContainer>
          <div className="date">
            <div>
              <h2 className="subtitle">Invoice Date</h2>
              <p className="title">
                {new Date(invoice?.createdAt).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}{" "}
              </p>
            </div>

            <div>
              <h2 className="subtitle">Payment Due</h2>
              <p className="title">
                {new Date(invoice?.paymentDue).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}{" "}
              </p>
            </div>
          </div>

          <div className="bill">
            <div>
              <h2 className="subtitle">Bill To</h2>
              <p className="title">{invoice?.clientName}</p>
            </div>
            <div className="subtitle">
              <p>{invoice?.clientAddress?.street}</p>
              <p>{invoice?.clientAddress?.city}</p>
              <p>{invoice?.clientAddress?.postCode}</p>
              <p>{invoice?.clientAddress?.country}</p>
            </div>
          </div>
        </FlexContainer>

        <div>
          <h2 className="subtitle">Sent to</h2>
          <p className="title">{invoice?.clientEmail}</p>
        </div>

        <ItemsContainer>
          {invoice?.items.map((item) => (
            <div key={item._id}>
              <FlexContainer
                justify={"space-between"}
                align={"center"}
                className="item"
              >
                <div style={{ textAlign: "left" }}>
                  <h2>{item?.name}</h2>
                  <p>
                    {item?.quantity} x ${item?.price}
                  </p>
                </div>
                <p>${Number(item?.quantity) * Number(item?.price)}</p>
              </FlexContainer>
            </div>
          ))}
          <div className="total">
            <FlexContainer justify={"space-between"} align={"center"}>
              <h2 className="" style={{ marginBottom: 0 }}>
                Grand Total
              </h2>
              <h2 className="total-amount" style={{ marginBottom: 0 }}>
                ${invoice.total}
              </h2>
            </FlexContainer>
          </div>
        </ItemsContainer>
      </section>
    </Section>
  );
};

export default InvoiceDetails;
