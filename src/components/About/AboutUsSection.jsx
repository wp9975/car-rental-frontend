import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-snow">
      <div className="container m-auto px-3 py-5 md:px-8 text-blackCoffee">
        <div className="space-y-6 py-5 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img
              src="https://img.freepik.com/free-photo/stylish-elegant-woman-car-salon_1157-20980.jpg?w=1800&t=st=1675015533~exp=1675016133~hmac=e4b38bc6aeb866aac60798e661601edad9c9f746436fea28391486219234f21e"
              alt=""
              loading="lazy"
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray font-bold md:text-4xl">
            20 lat na polskim rynku
            </h2>
            <p className="mt-6 text-gray-600">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
              omnis voluptatem accusantium nemo perspiciatis delectus atque
              autem! Voluptatum tenetur beatae unde aperiam, repellat expedita
              consequatur! Officiis id consequatur atque doloremque!
            </p>
            <p className="mt-4 text-gray-600">
              {" "}
              Nobis minus voluptatibus pariatur dignissimos libero quaerat iure
              expedita at? Asperiores nemo possimus nesciunt dicta veniam
              aspernatur quam mollitia.
            </p>
          </div>
        </div>
        <div className="space-y-6 py-5 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray font-bold md:text-4xl">
            Profesjonalna obsługa
            </h2>
            <p className="mt-6 text-gray">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
              omnis voluptatem accusantium nemo perspiciatis delectus atque
              autem! Voluptatum tenetur beatae unde aperiam, repellat expedita
              consequatur! Officiis id consequatur atque doloremque!
            </p>
            <p className="mt-4 text-gray">
              {" "}
              Nobis minus voluptatibus pariatur dignissimos libero quaerat iure
              expedita at? Asperiores nemo possimus nesciunt dicta veniam
              aspernatur quam mollitia.
            </p>
          </div>
          <div className="md:5/12 lg:w-5/12">
            <img
              src="https://images.unsplash.com/photo-1579356687668-cbdd5a551c18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80"
              alt=""
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
