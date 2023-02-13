import axios from "axios";

export const getCarsList = async () => {
  const response = await axios.get(`./data/cars.json`);
  return response.data.cars;
};

export const getCarsListWithFilteringAndSorting = async (
  type = "Wszystkie",
  brand = "Wszystkie",
  priceCategory = "Wszystkie",
  sortBy = "default"
) => {
  const response = await axios.get(`./data/cars.json`);
  let filteredData = response.data.cars;

  if (type !== "Wszystkie") {
    filteredData = filteredData.filter((car) => car.type === type);
  }

  if (brand !== "Wszystkie") {
    filteredData = filteredData.filter((car) => car.brand === brand);
  }

  if (priceCategory !== "Wszystkie") {
    filteredData = filteredData.filter((car) => car.category === priceCategory);
  }

  let sortedData = [];
  if (sortBy === "fuelAsc") {
    sortedData = filteredData.sort((a, b) =>
      a.fuelConsumption > b.fuelConsumption ? 1 : -1
    );
  } else if (sortBy === "fuelDesc") {
    sortedData = filteredData.sort((a, b) =>
      a.fuelConsumption > b.fuelConsumption ? -1 : 1
    );
  } else if (sortBy === "default") {
    sortedData = filteredData.sort(() => Math.random() - 0.5);
  }
  return sortedData;
};

export const getCarItemBySlug = async (slug) => {
  const response = await axios.get("./data/cars.json");
  const cars = response.data;
  return cars.find((car) => car.carLink === slug);
};
