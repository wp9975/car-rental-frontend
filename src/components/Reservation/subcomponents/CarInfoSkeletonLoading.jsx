import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CarInfoSkeletonLoading = () => {
  return (
    <section className="flex flex-col md:flex-row items-center my-8">
      <div className="lg:w-1/2 h-full flex items-center justify-center">
        <Skeleton width={200} height={200} />
      </div>
      <div className="p-8 lg:w-1/2 bg-white rounded-lg shadow-lg">
        <Skeleton />
        <div className="grid grid-cols-1 gap-4 mb-4">
          <div>
            <Skeleton />
          </div>
          <div>
            <Skeleton />
          </div>
          <div>
            <Skeleton />
          </div>
          <div>
            <Skeleton />
          </div>
          <div>
            <Skeleton />
          </div>
        </div>
        <div>
          <Skeleton />
        </div>
      </div>
    </section>
  );
};

export default CarInfoSkeletonLoading;
