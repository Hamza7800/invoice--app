import { useState, useEffect, useRef } from "react";
import arrowDown from "../assets/icon-arrow-down.svg";
import iconPlus from "../assets/icon-plus.svg";
import { Section } from "../styles/HomePageStyles/acttionBarStyles";
import { FlexContainer } from "../styles/reusableStyles";
import { useDispatch, useSelector } from "react-redux";
import { filterInvoices } from "../slices/invoiceSlice";
import SelectFilterStatus from "./SelectFilterStatus";

const ActionBar = ({ setShowForm }) => {
  const [showSelectFilter, setShowSelectFilter] = useState(false);
  const [checkboxStates, setCheckboxStates] = useState({
    paid: false,
    draft: false,
    pending: false,
  });

  const { invoices } = useSelector((s) => s.invoices);
  const filterRef = useRef(null);
  const dispatch = useDispatch();

  const handleCheckboxChange = (checkboxName) => {
    const updatedStates = {
      ...checkboxStates,
      [checkboxName]: !checkboxStates[checkboxName],
    };
    setCheckboxStates(updatedStates);
    const selectedFilters = Object.keys(updatedStates).filter(
      (key) => updatedStates[key]
    );
    filterInvoice(selectedFilters);
  };

  const filterInvoice = (...args) => {
    if (!showSelectFilter) {
      dispatch(filterInvoice(null));
      return;
    }
    dispatch(filterInvoices(...args));
  };

  const handleClickOutside = (event) => {
    if (filterRef.current && !filterRef.current.contains(event.target)) {
      setShowSelectFilter(false);
    }
  };

  useEffect(() => {
    dispatch(filterInvoices([]));
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [dispatch]);

  return (
    <Section>
      <FlexContainer
        justify={"space-between"}
        align={"center"}
        className="action-bar"
      >
        <div className="title">
          <h2>Invoices</h2>
          <p>{invoices?.length} invoices</p>
        </div>
        <FlexContainer justify={"space-between"} align={"center"}>
          <FlexContainer align={"center"} className="filter">
            <h2
              onClick={(e) => {
                e.stopPropagation();
                setShowSelectFilter(!showSelectFilter);
              }}
            >
              Filter
              <img src={arrowDown} alt="arrow-down" />
            </h2>
            {showSelectFilter && (
              <div ref={filterRef} className="filterSelect">
                <SelectFilterStatus
                  checkboxStates={checkboxStates}
                  handleCheckboxChange={handleCheckboxChange}
                  // filterInvoice={filterInvoice}
                />
              </div>
            )}
          </FlexContainer>
          <FlexContainer
            onClick={() => setShowForm(true)}
            align={"center"}
            className="addNewInvoice"
          >
            <img src={iconPlus} alt="" />
            <h2>New</h2>
          </FlexContainer>
        </FlexContainer>
      </FlexContainer>
    </Section>
  );
};

export default ActionBar;
