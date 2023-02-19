import React, { useState } from "react";


const Select = () => {
  const [selected, setSelected] = useState("");
  const options = [
    { value: "Option 1", label: "Option 1" },
    { value: "Option 2", label: "Option 2" },
    { value: "Option 3", label: "Option 3" }
  ];

  const handleChange = e => setSelected(e.target.value);

  return (
    <div className={`bg-gradient-to-r from-lightgray to-white`}>
      <select
        className={`w-full py-2 px-4 text-lg font-bold bg-transparent border-2 border-gray-200 focus:outline-none`}
        onChange={handleChange}
        value={selected}
      >
        {options.map(option => (
          <option
            className={`transition duration-500 ease-in-out transform origin-left`}
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;