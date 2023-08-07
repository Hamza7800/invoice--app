import Checkbox from "./Checkbox";

function SelectFilterStatus({ checkboxStates, handleCheckboxChange }) {
  return (
    <div>
      <Checkbox
        name={"paid"}
        checked={checkboxStates.paid}
        handleCheckboxChange={handleCheckboxChange}
      />
      <Checkbox
        name={"draft"}
        checked={checkboxStates.draft}
        handleCheckboxChange={handleCheckboxChange}
      />
      <Checkbox
        name={"pending"}
        checked={checkboxStates.pending}
        handleCheckboxChange={handleCheckboxChange}
      />
    </div>
  );
}

export default SelectFilterStatus;
