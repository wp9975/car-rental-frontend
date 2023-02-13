import React, {
  useEffect,
  useRef,
  useState,
  useCallback,
  useMemo,
} from "react";
import { getCarsList } from "../../utils/getData";
import CarsData from "../../assets/data/CarsData";
import Cars from "./Cars";
import SelectFilter from "./subcomponents/SelectFilter";
import {Loading} from "./subcomponents/Loading";

const Filters = () => {
  const [data, setData] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  const [sort, setSort] = useState(false);
  const [sortedData, setSortedData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const clearFiltersButtonRef = useRef(null);

  const [selectedCarType, setSelectedCarType] = useState("Wszystkie");
  const [selectedCarBrand, setSelectedCarBrand] = useState("Wszystkie");
  const [selectedCarPriceCategory, setSelectedCarPriceCategory] =
    useState("Wszystkie");

  const carTypes = useMemo(
    () => Array.from(new Set(originalData.map((item, index) => item.type))),
    [originalData]
  );
  const PriceCategories = useMemo(
    () => Array.from(new Set(originalData.map((item, index) => item.category))),
    [originalData]
  );
  const carBrands = useMemo(
    () => Array.from(new Set(originalData.map((item, index) => item.brand))),
    [originalData]
  );

  useEffect(() => {
    let timeout = null;
    const fetchData = async () => {
      timeout = setTimeout(() => setIsLoading(true), 500);
      const data = await getCarsList();
      clearTimeout(timeout); 
      setIsLoading(false);
      setData(data);
      setOriginalData(data);
    };
    fetchData();
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    applyFilters();
  }, [selectedCarBrand, selectedCarPriceCategory, selectedCarType]);

  useEffect(() => {
    clearFiltersButtonRef.current.addEventListener("click", () => {
      setSelectedCarType("Wszystkie");
      setSelectedCarBrand("Wszystkie");
      setSelectedCarPriceCategory("Wszystkie");
    });
  }, []);

  const applyTypeFilter = useCallback(
    (current) => current.type === selectedCarType,
    [selectedCarType]
  );
  const applyBrandFilter = useCallback(
    (current) => current.brand === selectedCarBrand,
    [selectedCarBrand]
  );
  const applyPriceCategoryFilter = useCallback(
    (current) => current.category === selectedCarPriceCategory,
    [selectedCarPriceCategory]
  );

  const applyFilters = () => {
    let updatedCarsData = sortedData.length > 0 ? sortedData : data;
    if (selectedCarType !== "Wszystkie") {
      updatedCarsData = updatedCarsData.filter(applyTypeFilter);
    }
    if (selectedCarBrand !== "Wszystkie") {
      updatedCarsData = updatedCarsData.filter(applyBrandFilter);
    }
    if (selectedCarPriceCategory !== "Wszystkie") {
      updatedCarsData = updatedCarsData.filter(applyPriceCategoryFilter);
    }
    setData(updatedCarsData);
  };

  const handleCarTypeChange = (event) => {
    setSelectedCarType(event.target.value);
  };
  const handleCarBrandChange = (event) => {
    setSelectedCarBrand(event.target.value);
  };
  const handleCarPriceCategoryChange = (event) => {
    setSelectedCarPriceCategory(event.target.value);
  };

  const handleSortData = (e) => {
    const value = e.target.value;
    let sortedCarsData = [];
    if (value === "fuelAsc") {
      sortedCarsData = originalData.sort((a, b) =>
        a.fuelConsumption > b.fuelConsumption ? 1 : -1
      );
    } else if (value === "fuelDesc") {
      sortedCarsData = originalData.sort((a, b) =>
        a.fuelConsumption > b.fuelConsumption ? -1 : 1
      );
    } else if (value === "default") {
      sortedCarsData = originalData.slice();
      sortedCarsData.sort(() => Math.random() - 0.5);
    }
    setSort(!sort);
    setSortedData(sortedCarsData)
    setData(sortedCarsData);
  };
  console.log(data);



  return (
    <div>
      <div className=" py-3 border-b-2 mb-2">
        <div className="mx-auto flex flex-wrap items-center justify-center gap-1 max-w-screen-2xl">
          <SelectFilter
            label="Typ nadwozia"
            options={carTypes}
            selectedOption={selectedCarType}
            handleChange={handleCarTypeChange}
          />
          <SelectFilter
            label="Marka"
            options={carBrands}
            selectedOption={selectedCarBrand}
            handleChange={handleCarBrandChange}
          />
          <SelectFilter
            label="Kategoria cenowa"
            options={PriceCategories}
            selectedOption={selectedCarPriceCategory}
            handleChange={handleCarPriceCategoryChange}
          />
          <div className="p-2 mt-auto">
            <button
              ref={clearFiltersButtonRef}
              className="px-6 py-3 bg-blue rounded-lg text-white"
            >
              Wyczyść filtry
            </button>
          </div>
        </div>
      </div>
      {isLoading ? <Loading/> : <Cars data={data} handleSortData={handleSortData} />}
      
    </div>
  );
};

export default Filters;
