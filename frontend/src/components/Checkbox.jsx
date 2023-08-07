const Checkbox = ({ checked, handleCheckboxChange, name }) => {
  return (
    <div className="input">
      <input
        id={name}
        type="checkbox"
        name={name}
        checked={checked}
        onChange={(e) => handleCheckboxChange(e.target.name)}
      />
      <label htmlFor={name}>{name.toUpperCase()}</label>
    </div>
  );
};

export default Checkbox;
