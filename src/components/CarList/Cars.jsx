import React, { useState, useEffect, useRef, useMemo } from "react";

import CarCard from "./subcomponents/CarCard";
import clsx from "clsx";
import { LoadingPosts } from "./subcomponents/Loading";
import useLazyLoad from "../../hooks/useLoadMoreOnScroll";
const NUM_PER_PAGE = 10;
const TOTAL_PAGES = 10;
const Cars = (props) => {

  useEffect(()=>{
      setDataCars(props.dataFiltered);
  },[props.dataFiltered])

  const filtered = props.data;
  const [dataCars, setDataCars] = useState(props.data)
  const triggerRef = useRef(null);
  const onGrabData = (currentPage) => {
    return new Promise((resolve) => {
    setTimeout(() => {
        const data = filtered.slice(
        ((currentPage - 1)%TOTAL_PAGES) * NUM_PER_PAGE,
        NUM_PER_PAGE * (currentPage%TOTAL_PAGES)
        );
        console.log(data);
        resolve(data);
    }, 300);
    });
};

  const {data, loading} = useLazyLoad({triggerRef, onGrabData});
  console.log(props.dataFiltered)

  return (
    <section className="bg-snow">
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-[2000px] gap-4 mx-auto mt-8">
        {data.map((item, index) => (
            <CarCard item={item} key={index}/>
        ))}
      </div>
      <div ref={triggerRef} className={clsx("trigger", { visible: loading })}>
            <LoadingPosts />
        </div>
    </section>
  );
};

export default Cars;
