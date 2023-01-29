import React from "react";

const ContactForm = () => {
  return (
    <div className="container px-4 py-14 mx-auto flex">
      <div className="xl:w-1/3 lg:w-1/2 rounded-lg flex flex-col w-full mt-10 md:ml-auto relative z-10">
        <div className="rounded-lg bg-snow p-8 shadow-lg lg:p-6">
          <h1 className="text-center text-3xl font-bold pb-4">Napisz do nas</h1>
          <form action="" className="space-y-4">
            <div>
              <input
                className="w-full rounded-lg border-gray p-3 text-sm"
                placeholder="Imię"
                type="text"
                id="name"
              />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <input
                  className="w-full rounded-lg border-gray p-3 text-sm"
                  placeholder="Adres e-mail"
                  type="email"
                  id="email"
                />
              </div>

              <div>
                <input
                  className="w-full rounded-lg border-gray p-3 text-sm"
                  placeholder="Numer telefonu"
                  type="tel"
                  id="phone"
                />
              </div>
            </div>

            <div>
              <textarea
                className="w-full rounded-lg border-gray p-3 text-sm"
                placeholder="Wiadomość"
                rows="8"
                id="message"
              ></textarea>
            </div>

            <div className="mt-4">
              <button
                type="submit"
                className="bg-darkgray inline-flex w-full items-center justify-center rounded-lg bg-black px-5 py-3 text-white sm:w-auto"
              >
                Wyślij
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
