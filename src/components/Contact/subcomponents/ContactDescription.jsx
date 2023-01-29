import React from "react";

const ContactDescription = () => {
  return <section className="py-8">
    <div className="container mx-auto flex flex-col md:flex-row items-center">
    <div className="lg:flex-grow md:w-1/2  md:pr-16 flex flex-col md:items-start md:text-left  items-center text-center">
      <p className=" p-5 rounded-md bg-primary leading-relaxed">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded-md border-2" alt="hero" src="https://images.unsplash.com/photo-1498230870289-7561110a6e69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"/>
    </div>
    </div>
  </section>;
};

export default ContactDescription;
