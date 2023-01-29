import React from "react";

const BlogCard = (props) => {
  return (
    <div className="mt-3 overflow-hidden border rounded-lg shadow-md border-blackCoffee hover:scale-105">
      <img alt="" src={props.imgSrc} class="h-56 w-full object-cover" />
      <div className="p-4">
        <h3 className="text-lg text-blackCoffee">{props.header}</h3>
        <p className="mt-3 mb-5 text-sm">{props.description}</p>
        <a
          href="/"
          class="p-3 text-md font-bold text-blue border-2 border-blackCoffee rounded-xl hover:shadow-xl hover:shadow-blue"
        >
          Czytaj dalej...
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
