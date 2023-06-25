import { useState } from "react";

const Select = ({ name, list, onChange }) => {
  const [active, setActive] = useState("");
  const handleActiveChange = (event) => {
    onChange(event.target.value);
    setActive(event.target.value);
  };
  return (
    <div className="selectWrapper">
      <div className="selectLabel">{name}</div>
      <select onChange={handleActiveChange} name="" id="" value={active}>
        {list.map((el, index) => {
          return (
            <option key={index} value={el}>
              {el}
            </option>
          );
        })}
      </select>
    </div>
  );
};
export default Select;
