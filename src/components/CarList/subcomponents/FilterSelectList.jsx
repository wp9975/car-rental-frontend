import React from 'react'

const FilterSelectList = (props) => {
    const {change, item, value} = props;
  return (
    <select  onChange={change} value={value}>
        {items.map((item, index) => (
        <option key={index}>{item}</option>
      ))}
    </select>
  )
}

export default FilterSelectList