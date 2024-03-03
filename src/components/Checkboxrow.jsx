import { useState } from "react";

const CheckboxRow = ({ name, min, max, children }) => {
    const [selected, setSelected] = useState([]);
  
    const handleChange = (value) => {
      if (selected.includes(value)) {
        setSelected(selected.filter((item) => item !== value));
      } else {
        setSelected([...selected, value]);
      }
    };
  
    const isValid = selected.length >= min && selected.length <= max;
  
    return (
      <div>
        <div>{name}</div>
        {children.map((child) => (
          <label key={child.value}>
            <input
              type="checkbox"
              value={child.value}
              checked={selected.includes(child.value)}
              onChange={() => handleChange(child.value)}
            />
            {child.label}
          </label>
        ))}
        {!isValid && <div>Выберите от {min} до {max} элементов</div>}
      </div>
    );
  };

  export default CheckboxRow;