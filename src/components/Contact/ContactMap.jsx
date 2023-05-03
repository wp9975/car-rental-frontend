import React from "react";

const ContactMap = () => {
  return (
    <div className="h-[500px] w-full">
      <iframe
        className="h-full w-full"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10000!2d20.0!3d50.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDAwJzAwLjAiTiAyM8KwMDAnMDAuMCJF!5e0!3m2!1sen!2sus!4v1638460357812!5m2!1sen!2sus"
        allowFullScreen=""
        loading="lazy"
        title="Mapa lokalizacji"
      ></iframe>
    </div>
  );
};

export default ContactMap;
