import { useState, useEffect, useRef } from "react";

function Dropdown({ options, onChange, value }) {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (!divEl.current) {
        return;
      }
      if (!divEl.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handler, true);

    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  const handleClick = () => {
    setIsOpen((currentValue) => !currentValue);
  };

  const handleOptionClick = (option) => {
    setIsOpen(false);
    onChange(option);
    handleClick();
  };

  const renderList = options.map((option) => {
    return (
      <div
        className="dropdownItem"
        onClick={() => handleOptionClick(option)}
        key={option.value}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div className="dropdown" ref={divEl} onClick={handleClick}>
      <div className="option">{value?.label || "Select..."}</div>
      {isOpen && <div className="p">{renderList}</div>}
    </div>
  );
}

export default Dropdown;
