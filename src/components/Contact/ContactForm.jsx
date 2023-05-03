import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const validate = () => {
    let temp = {};
    temp.name = formData.name ? "" : "To pole jest wymagane.";
    temp.email = formData.email
      ? emailRegex.test(formData.email)
        ? ""
        : "Nieprawidłowy adres e-mail."
      : "To pole jest wymagane.";
    temp.subject = formData.subject ? "" : "To pole jest wymagane.";
    temp.message = formData.message ? "" : "To pole jest wymagane.";
    setErrors({
      ...temp,
    });
    return Object.values(temp).every((x) => x === "");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Dane formularza:", formData);
    }
  };

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
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.form
      className="space-y-4 bg-slategray-100 p-7 rounded-lg"
      onSubmit={handleSubmit}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={childVariants}>
        <TextField
          fullWidth
          label="Imię i nazwisko"
          name="name"
          value={formData.name}
          onChange={handleChange}
          error={Boolean(errors.name)}
          helperText={errors.name}
        />
      </motion.div>
      <motion.div variants={childVariants}>
        <TextField
          fullWidth
          label="Adres e-mail"
          name="email"
          value={formData.email}
          onChange={handleChange}
          error={Boolean(errors.email)}
          helperText={errors.email}
        />
      </motion.div>
      <motion.div variants={childVariants}>
        <TextField
          fullWidth
          label="Temat"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          error={Boolean(errors.subject)}
          helperText={errors.subject}
        />
      </motion.div>
      <motion.div variants={childVariants}>
        <TextField
          fullWidth
          label="Wiadomość"
          name="message"
          value={formData.message}
          onChange={handleChange}
          multiline
          rows={4}
          error={Boolean(errors.message)}
          helperText={errors.message}
        />
      </motion.div>
      <motion.div variants={childVariants}>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className="w-full mt-4"
        >
          Wyślij
        </Button>
      </motion.div>
    </motion.form>
  );
};

export default ContactForm;
