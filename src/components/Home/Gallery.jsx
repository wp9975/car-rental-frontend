import React from 'react'

const Gallery = () => {
  return (
    <div className="flex flex-wrap md:-m-2 -m-1 bg-snow py-6">
      <div className="flex flex-wrap md:w-1/2">
        <div className="md:p-2 p-1 w-1/2 hidden md:block">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://images.unsplash.com/photo-1582639510494-c80b5de9f148?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1743&q=80"/>
        </div>
        <div className="md:p-2 p-1 w-1/2 hidden md:block">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://images.unsplash.com/photo-1482227227392-7a93c6fea65d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"/>
        </div>
        <div className="md:p-2 p-1 w-full">
          <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://images.unsplash.com/photo-1585336261176-3e8d838e86e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"/>
        </div>
      </div>
      <div className="flex flex-wrap md:w-1/2">
        <div className="md:p-2 p-1 w-full">
          <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://images.unsplash.com/photo-1526626607369-f89fe1ed77a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"/>
        </div>
        <div className="md:p-2 p-1 w-1/2 hidden md:block">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80"/>
        </div>
        <div className="md:p-2 p-1 w-1/2 hidden md:block">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://images.unsplash.com/photo-1546614042-7df3c24c9e5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"/>
        </div>
      </div>
    </div>
  )
}

export default Gallery