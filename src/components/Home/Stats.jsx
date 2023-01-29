import React from 'react'

const Stats = () => {
  return (
    <section className="p-4 mx-auto my-4 rounded-md shadow-md max-w-screen-2xl">
    <div className="mx-auto text-center">
      <h2 className="text-3xl font-bold sm:text-4xl">Dlaczego my?</h2>
      <p className="mt-4 sm:text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
        dolores laborum labore provident impedit esse recusandae facere libero
        harum sequi.
      </p>
    </div>
    <div className="grid grid-cols-1 gap-5 m-8 md:grid-cols-3">
      <div className="flex flex-col px-4 py-8 text-center border border-gray-100 rounded-lg">
        <dt className="text-lg font-medium">Flota ponad</dt>

        <dd className="text-4xl font-extrabold md:text-5xl">200</dd>

        <dt className="order-last text-lg font-medium">samochodów</dt>
      </div>
      <div className="flex flex-col px-4 py-8 text-center border border-gray-100 rounded-lg">
        <dt className="text-lg font-medium">Ponad</dt>
        <dt className="order-last text-lg font-medium">zadowolonych klientów</dt>

        <dd className="text-4xl font-extrabold md:text-5xl">20tyś.</dd>
      </div>
      <div className="flex flex-col px-4 py-8 text-center border border-gray-100 rounded-lg">
        <dt className="text-lg font-medium">Biura w</dt>
        <dt className="order-last text-lg font-medium">miastach w Polsce</dt>

        <dd className="text-4xl font-extrabold md:text-5xl">9</dd>
      </div>
      <div className="flex flex-col px-4 py-8 text-center border border-gray-100 rounded-lg">
        

        <dd className="text-4xl font-extrabold md:text-5xl">24h</dd>

        <dt className="order-last text-lg font-medium">Całodobowa obsługa</dt>
      </div>
      <div className="flex flex-col px-4 py-8 text-center border border-gray-100 rounded-lg">
        

        <dd className="text-4xl font-extrabold md:text-5xl">0</dd>

        <dt className="order-last text-lg font-medium">Bezpłatne odwołanie rezerwacji</dt>
      </div>
      <div className="flex flex-col px-4 py-8 text-center border border-gray-100 rounded-lg">
        

        <dd className="text-4xl font-extrabold md:text-5xl">0</dd>

        <dt className="order-last text-lg font-medium">Brak limitu kilometrów</dt>
      </div>
    </div>
  </section>
  )
}

export default Stats