import React from "react";
import ContactCards from "./subcomponents/ContactCards";
import ContactDescription from "./subcomponents/ContactDescription";


const ContactInfo = () => {
  return (
    <section className="py-5">
      <div className="container text-center m-auto">
      <div class="text-center">
        <h2 class="text-3xl md:text-5xl font-bold mb-5 px-6">Skontaktuj się z nami</h2>
      </div>
        <ContactDescription/>
        <ContactCards/>
      </div>
    </section>
  );
};

export default ContactInfo;
