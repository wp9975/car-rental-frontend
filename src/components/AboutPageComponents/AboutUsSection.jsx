import React from 'react';
import { motion } from 'framer-motion';

const AboutUsSection = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const childVariants = {
    hidden: {
      y: -50,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <section className="pt-20 py-8">
      <motion.div
        className="container m-auto px-3 md:px-8 text-blackCoffee"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className=" rounded-xl my-5 pace-y-6 py-5 md:flex md:gap-6 lg:items-center lg:gap-12"
          variants={childVariants}
        >
          <div className="md:w-5/12">
            <img
              className="w-full h-auto rounded-tl-xl rounded-tr-xl md:rounded-tr-none md:rounded-bl-xl object-cover"
              src="https://img.freepik.com/free-photo/stylish-elegant-woman-car-salon_1157-20980.jpg?w=1800&t=st=1675015533~exp=1675016133~hmac=e4b38bc6aeb866aac60798e661601edad9c9f746436fea28391486219234f21e"
              alt=""
              loading="lazy"
            />
          </div>
          <motion.div className="md:w-6/12 m-2 md:m-5" variants={childVariants}>
            <h2 className="text-2xl text-gray-600 font-bold md:text-4xl">
              20 lat na polskim rynku
            </h2>
            <p className="mt-6 text-gray-600">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
              omnis voluptatem accusantium nemo perspiciatis delectus atque
              autem! Voluptatum tenetur beatae unde aperiam, repellat expedita
              consequatur! Officiis id consequatur atque doloremque!
            </p>
            <p className="mt-4 text-gray-600">
              {' '}
              Nobis minus voluptatibus pariatur dignissimos libero quaerat iure
              expedita at? Asperiores nemo possimus nesciunt dicta veniam
              aspernatur quam mollitia.
            </p>
          </motion.div>
        </motion.div>
        <motion.div
          className=" rounded-xl space-y-6 py-5 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12"
          variants={childVariants}
        >
          <motion.div className="md:w-6/12 m-2 md:m-5" variants={childVariants}>
            <h2 className="text-2xl text-gray-600 font-bold md:text-4xl">
              Profesjonalna obsługa
            </h2>
            <p className="mt-6 text-gray">
              Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Eum
          omnis voluptatem accusantium nemo perspiciatis delectus atque
          autem! Voluptatum tenetur beatae unde aperiam, repellat expedita
          consequatur! Officiis id consequatur atque doloremque!
        </p>
        <p className="mt-4 text-gray">
          {' '}
          Nobis minus voluptatibus pariatur dignissimos libero quaerat iure
          expedita at? Asperiores nemo possimus nesciunt dicta veniam
          aspernatur quam mollitia.
        </p>
      </motion.div>
      <div className="md:w-5/12">
        <motion.img
          className="w-full h-auto rounded-tl-xl md:rounded-tl-none md:rounded-tr-xl rounded-br-xl object-cover"
          src="https://images.unsplash.com/photo-1579356687668-cbdd5a551c18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80"
          alt=""
          loading="lazy"
          variants={childVariants}
        />
      </div>
    </motion.div>
  </motion.div>
</section>

);
};

export default AboutUsSection;