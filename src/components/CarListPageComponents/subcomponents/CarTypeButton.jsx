import React from 'react'

const CarTypeButton = (props) => {
  return (
    <button
            type="button"
            className="w-full hover:shadow-blue shadow-md  px-4 py-2 text-base font-medium text-black bg-white border-2 rounded-md hover:bg-gray-100"
          >
            {props.type}
    </button>
  )
}

export default CarTypeButton