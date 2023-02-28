import React, { useState } from 'react'
import { AiOutlineArrowDown } from "react-icons/ai";
const FaqCard = (props) => {
    const [openToggle, setOpenToggle] = useState(false);
  return (
    <div className={` border-2 border-gray-100 rounded-lg dark:border-gray-700`}>
    <button onClick={()=>setOpenToggle(!openToggle)} className="flex items-center justify-between w-full  p-8" >
      <h1 className="font-semibold text-gray-700 dark:text-blackCoffee">
        {props.question}
      </h1>

      <span className="text-gray-400 bg-gray-200 rounded-full" >
        <AiOutlineArrowDown size={28} className={`${openToggle ? 'rotate-180' : ''} transition duration-500 bg-silver shadow-lg rounded-lg`}/>
      </span>
    </button>
    <div className={`overflow-hidden ${openToggle ? 'h-auto opacity-100 scale-y-100' : 'h-0 opacity-0 scale-y-0'} transition-all duration-500 transform-height origin-top`}>
    <hr className="border-gray-200 dark:border-gray-700" />

    <p className={`p-8 text-sm text-gray-500 dark:text-gray-300`}>
      {props.answer}
    </p>
    </div>
  </div>
  )
}

export default FaqCard