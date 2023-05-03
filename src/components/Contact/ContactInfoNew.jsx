import React from 'react';
import { Phone, Mail, Room } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const ContactInfoNew = () => {
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
    <motion.div
      className="space-y-4 bg-slategray-100 m-auto rounded-lg p-7 h-full"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 className="text-2xl font-bold" variants={childVariants}>
        Contact Us
      </motion.h1>
      <motion.p className="text-gray-600" variants={childVariants}>
        Award-winning, family-owned dealership of new and pre-owned vehicles with several locations across the city. Lowest prices and the best customer service guaranteed.
      </motion.p>
      <motion.div className="flex items-center space-x-2" variants={childVariants}>
        <Room />
        <span>123 Main St, Miasto, Kod pocztowy</span>
      </motion.div>
      <motion.div className="flex items-center space-x-2" variants={childVariants}>
        <Phone />
        <span>+48 123 456 789</span>
      </motion.div>
      <motion.div className="flex items-center space-x-2" variants={childVariants}>
        <Mail />
        <span>kontakt@carrentalio.com</span>
      </motion.div>
      <motion.div className="flex py-8 items-center justify-center space-x-14" variants={childVariants}>
        <a href="#" className='hover:bg-slategray-300 p-2 rounded-lg' title="Facebook" target="_blank" rel="noreferrer">
          <FaFacebookF size={32}/>
        </a>
        <a href="#" className='hover:bg-slategray-300 p-2 rounded-lg' title="Twitter" target="_blank" rel="noreferrer">
          <FaTwitter size={32}/>
        </a>
        <a href="#" className='hover:bg-slategray-300 p-2 rounded-lg' title="Instagram" target="_blank" rel="noreferrer">
          <FaInstagram size={32}/>
        </a>
      </motion.div>
    </motion.div>
  );
};

export default ContactInfoNew;
