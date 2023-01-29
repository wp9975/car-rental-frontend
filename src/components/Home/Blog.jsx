import React from 'react'
import BlogCard from "./subcomponents/BlogCard";

const Blog = () => {
  return (
    <section className="max-w-screen-2xl my-4 mx-auto p-4 rounded-md shadow-md">
    <div className=" p-3 md:flex md:space-x-3">
      <BlogCard
        imgSrc="https://images.unsplash.com/photo-1566933293069-b55c7f326dd4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
        header="Wypadek, co dalej?"
        description="Etiam egestas fringilla enim, id convallis lectus laoreet at Fusce purus nisi, gravida sed consectetur ut, interdum quis nisi. Quisque egestas nisl id lectus facilisis scelerisque."
      />
      <BlogCard
        imgSrc="https://images.unsplash.com/photo-1511527844068-006b95d162c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        header="Najlepszy samochód na ferie"
        description="Etiam egestas fringilla enim, id convallis lectus laoreet at Fusce purus nisi, gravida sed consectetur ut, interdum quis nisi. Quisque egestas nisl id lectus facilisis scelerisque."
      />
      <BlogCard
        imgSrc="https://images.unsplash.com/photo-1629898168297-c868a0d70ad0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2VhdCUyMGJlbHR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        header="Pasy bezpieczeństwa"
        description="Etiam egestas fringilla enim, id convallis lectus laoreet at Fusce purus nisi, gravida sed consectetur ut, interdum quis nisi. Quisque egestas nisl id lectus facilisis scelerisque."
      />
    </div>
  </section>
  )
}

export default Blog