import React from 'react'

const PersonalDetails = () => {
  return (
    <div className="mt-10 sm:mt-0">
  <div className="md:grid md:grid-cols-2 md:gap-6">
    <div className="mt-5 md:mt-0 md:col-span-2 mx-auto">
      <form action="#" method="POST">
        <div className="shadow overflow-hidden sm:rounded-md">
          <div className="px-4 py-5 bg-white sm:p-6">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">Imię</label>
                <input type="text" name="first_name" id="first_name" autoComplete="given-name" className="py-2 mt-1 focus:ring-blue focus:border-blue block w-full sm:text-sm border-blue rounded-md shadow-lg bg-snow"/>
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">Nazwisko</label>
                <input type="text" name="last_name" id="last_name" autoComplete="family-name" className="py-2 mt-1 focus:ring-blue focus:border-blue block w-full sm:text-sm border-blue rounded-md shadow-lg bg-snow"/>
              </div>

              <div className="col-span-6 sm:col-span-4">
                <label htmlFor="email_address" className="block text-sm font-medium text-gray-700">Adres Email</label>
                <input type="text" name="email_address" id="email_address" autoComplete="email" className="py-2 mt-1 focus:ring-blue focus:border-blue block w-full sm:text-sm border-blue rounded-md shadow-lg bg-snow"/>
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="country" className="block text-sm font-medium text-gray-700">Kraj</label>
                <select id="country" name="country" autoComplete="country" className="mt-1 block w-full py-2 px-3 border border-blue bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue focus:border-blue sm:text-sm">
                  <option>Polska</option>
                  <option>Niemcy</option>
                  <option>Czechy</option>
                </select>
              </div>

              <div className="col-span-6">
                <label htmlFor="street_address" className="block text-sm font-medium text-gray-700">Adres</label>
                <input type="text" name="street_address" id="street_address" autoComplete="street-address" className="py-2 mt-1 focus:ring-blue focus:border-blue block w-full sm:text-sm border-blue rounded-md shadow-lg bg-snow"/>
              </div>

              <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                <label htmlFor="city" className="block text-sm font-medium text-gray-700">Miasto</label>
                <input type="text" name="city" id="city" className="py-2 mt-1 focus:ring-blue focus:border-blue block w-full sm:text-sm border-blue rounded-md shadow-lg bg-snow"/>
              </div>


              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <label htmlFor="postal_code" className="block text-sm font-medium text-gray-700">Kod pocztowy</label>
                <input type="text" name="postal_code" id="postal_code" autoComplete="postal-code" className="py-2 mt-1 focus:ring-blue focus:border-blue block w-full sm:text-sm border-blue rounded-md shadow-lg bg-snow"/>
              </div>
            </div>
          </div>
          <div className="px-4 py-3 bg-snow text-right sm:px-6">
            <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue">
              Podsumowanie
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>
  )
}

export default PersonalDetails