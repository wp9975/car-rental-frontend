import React from "react";
import PropTypes from 'prop-types';

const SelectFilter = ({ options, selectedOption, handleChange, label }) => {
  return (
    <div className="p-2">
      <label className="text-lg">
        {label}
        <select
          className="block px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm w-52 focus:outline-none focus:ring-blue focus:border-blue focus:ring-2"
          onChange={handleChange}
          value={selectedOption}
        >
          <option defaultValue={"Wszystkie"}>Wszystkie</option>
          {options.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

SelectFilter.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  selectedOption: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default SelectFilter;