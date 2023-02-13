import React, { useState } from "react";
import {
  validateNotNull,
  validateAddress,
  validateEmail,
  validatePhoneNumber,
  validatePostalCode,
} from "../../../utils/formValidation";

const PersonalDetails = (props) => {
  const { updateFormPersonalData, formPersonalData, updateStep } = props;
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let errrors = {};

    const firstName = document.getElementById("first_name").value;
    const lastName = document.getElementById("last_name").value;
    const email = document.getElementById("email_address").value;
    const phone = document.getElementById("phone_number").value;
    const country = document.getElementById("country").value;
    const address = document.getElementById("address").value;
    const city = document.getElementById("city").value;
    const postalCode = document.getElementById("postal_code").value;

    if (validateNotNull(firstName)) {
      errrors.firstName = "Imię jest wymagane";
    }

    if (validateNotNull(lastName)) {
      errrors.lastName = "Nazwisko jest wymagane";
    }

    if (validateEmail(email)) {
      errrors.email = "Podaj prawidłowy adres email";
    }

    if (validatePhoneNumber(phone)) {
      errrors.phone = "Podaj prawidłowy numer telefonu";
    }

    if (validateNotNull(country)) {
      errrors.country = "Kraj jest wymagany";
    }

    if (validateAddress(address)) {
      errrors.address = "Adres jest wymagany";
    }

    if (validateNotNull(city)) {
      errrors.city = "Miasto jest wymagane";
    }

    if (validatePostalCode(postalCode)) {
      errrors.postalCode = "Podaj prawidłowy kod pocztowy";
    }
    setErrors(errrors);
    return errrors;
  };

  const handlerPrevButton = () => {
    updateStep(1);
  };

  const handlerSubmitForm = (event) => {
    event.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      updateFormPersonalData({
        firstName: document.getElementById("first_name").value,
        lastName: document.getElementById("last_name").value,
        email: document.getElementById("email_address").value,
        country: document.getElementById("country").value,
        address: document.getElementById("address").value,
        city: document.getElementById("city").value,
        postalCode: document.getElementById("postal_code").value,
      });
      updateStep(3);
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="mt-10 sm:mt-0 " >
      <div className="md:grid md:grid-cols-2 md:gap-6">
        <div className="mt-5 md:mt-0 md:col-span-2 mx-auto">
          <form onSubmit={handlerSubmitForm}>
            <div className="shadow overflow-hidden sm:rounded-md">
              <div className="px-4 py-5 bg-white sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="first_name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Imię
                    </label>
                    <input
                      type="text"
                      name="first_name"
                      id="first_name"
                      autoComplete="given-name"
                      
                      className="py-2 mt-1 focus:ring-blue focus:border-blue block w-full sm:text-sm border-blue rounded-md shadow-lg bg-snow"
                    />
                  </div>
                  {errors.firstName && (
                    <p className="text-medium font-bold">{errors.firstName}</p>
                  )}
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="last_name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Nazwisko
                    </label>
                    <input
                      type="text"
                      name="last_name"
                      id="last_name"
                      autoComplete="family-name"
                      
                      className="py-2 mt-1 focus:ring-blue focus:border-blue block w-full sm:text-sm border-blue rounded-md shadow-lg bg-snow"
                    />
                    {errors.lastName && <p className="text-medium font-bold">{errors.lastName}</p>}
                  </div>

                  <div className="col-span-6 sm:col-span-4">
                    <label
                      htmlFor="email_address"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Adres Email
                    </label>
                    <input
                      type="text"
                      name="email_address"
                      id="email_address"
                      autoComplete="email"
                      required
                      className="py-2 mt-1 focus:ring-blue focus:border-blue block w-full sm:text-sm border-blue rounded-md shadow-lg bg-snow"
                    />
                    {errors.email && (
                    <p className="text-medium font-bold">{errors.email}</p>
                  )}
                  </div>

                  <div className="col-span-6 sm:col-span-4">
                    <label
                      htmlFor="phone_number"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Numer telefonu:
                    </label>
                    <input
                      type="text"
                      name="phone_number"
                      id="phone_number"
                      autoComplete="phone"
                      required
                      className="py-2 mt-1 focus:ring-blue focus:border-blue block w-full sm:text-sm border-blue rounded-md shadow-lg bg-snow"
                    />
                    {errors.phone && (
                    <p className="text-medium font-bold">{errors.phone}</p>
                  )}
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="country"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Kraj
                    </label>
                    <select
                      id="country"
                      name="country"
                      autoComplete="country"
                      required
                      className="mt-1 block w-full py-2 px-3 border border-blue bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue focus:border-blue sm:text-sm"
                    >
                      <option>Polska</option>
                      <option>Niemcy</option>
                      <option>Czechy</option>
                    </select>
                    {errors.country && (
                    <p className="text-medium font-bold">{errors.country}</p>
                  )}
                  </div>

                  <div className="col-span-6">
                    <label
                      htmlFor="address"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Adres
                    </label>
                    <input
                      type="text"
                      name="address"
                      id="address"
                      autoComplete="street-address"
                      required
                      className="py-2 mt-1 focus:ring-blue focus:border-blue block w-full sm:text-sm border-blue rounded-md shadow-lg bg-snow"
                    />
                    {errors.address && (
                    <p className="text-medium font-bold">{errors.address}</p>
                  )}
                  </div>

                  <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                    <label
                      htmlFor="city"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Miasto
                    </label>
                    <input
                      type="text"
                      name="city"
                      id="city"
                      required
                      className="py-2 mt-1 focus:ring-blue focus:border-blue block w-full sm:text-sm border-blue rounded-md shadow-lg bg-snow"
                    />
                    {errors.city && (
                    <p className="text-medium font-bold">{errors.city}</p>
                  )}
                  </div>

                  <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                    <label
                      htmlFor="postal_code"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Kod pocztowy
                    </label>
                    <input
                      type="text"
                      name="postal_code"
                      id="postal_code"
                      autoComplete="postal-code"
                      required
                      className="py-2 mt-1 focus:ring-blue focus:border-blue block w-full sm:text-sm border-blue rounded-md shadow-lg bg-snow"
                    />
                    {errors.postalCode && (
                    <p className="text-medium font-bold">{errors.postalCode}</p>
                  )}
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 flex justify-around bg-snow text-right sm:px-6">
                <button
                  onClick={handlerPrevButton}
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue"
                >
                  Poprzedni
                </button>
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue"
                >
                  Podsumowanie
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {console.log(formPersonalData)}
    </div>
  );
};

export default PersonalDetails;
