import arrowDown from "../assets/icon-arrow-down.svg";
import iconPlus from "../assets/icon-plus.svg";
import { Section } from "../styles/HomePageStyles/acttionBarStyles";
import { FlexContainer } from "../styles/reusableStyles";

const ActionBar = () => {
  return (
    <Section>
      <FlexContainer
        justify={"space-between"}
        align={"center"}
        className="action-bar"
      >
        <div className="title">
          <h2>Invoices</h2>
          <p>6 invoices</p>
        </div>
        <FlexContainer justify={"space-between"} align={"center"}>
          <FlexContainer align={"center"} className="filter">
            <h2>Filter</h2>
            <img src={arrowDown} alt="arrow-down" />
          </FlexContainer>
          <FlexContainer align={"center"} className="addNewInvoice">
            <img src={iconPlus} alt="" />
            <h2>New</h2>
          </FlexContainer>
        </FlexContainer>
      </FlexContainer>
    </Section>
  );
};

export default ActionBar;
