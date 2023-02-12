import React from 'react'

const AdditionalServices = () => {
  return (
    <div className="h-screen">
    <div class="relative cursor-pointer hover:border-4 hover:border-grayLavender w-96 h-64 hover:scale-105 overflow-hidden bg-white shadow-xl rounded-2xl">
      <img
        alt="moto"
        src="https://cdn.pixabay.com/photo/2016/08/25/20/14/crash-test-1620592_960_720.jpg"
        class="absolute z-10  "
      />
      <div class="absolute w-full h-64 z-20 bg-gradient-to-tr from-grayLavender to-transparent">
        <p class="ml-2 my-4 text-2xl font-bold text-gray-800">Rozszerzone ubezpieczenie</p>
        <p class=" ml-2 text-md font-bold w-64 text-gray-400">
        Opłaciwszy go nie musisz się martwić, jeśli zdarzy Ci się niefortunnie zarysować auto lub jeśli ktoś zarysuje je na parkingu pod Twoją nieobecność.
        </p>
        <p class="ml-2 my-2 text-2xl font-medium ">Cena: $100</p>
      </div>
    </div>
  </div>
  )
}

export default AdditionalServices