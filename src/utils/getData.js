import axios from "axios";
const url = 'https://api.jsonbin.io/v3/b/63eb1ae8ace6f33a22ddfc27/latest';

export const getCarsList = async () => {
  try {
    const response = await axios.get(url, {
      headers: {
        'X-Master-Key': '$2b$10$HSxPHqX/BixFAIQ9dRx4RO8ftOOyjbYWfFGKyz5VKZ4nr1lgMI9IS'
      }
    });
    const carData = response.data.record.cars;
    return carData;
  } catch (error) {
    console.error(error);
  }
};

// export const getCarsListWithFilteringAndSorting = async (
//   type = "Wszystkie",
//   brand = "Wszystkie",
//   priceCategory = "Wszystkie",
//   sortBy = "default"
// ) => {
//   const response = await axios.get(`./data/cars.json`);
//   let filteredData = response.data.cars;

//   if (type !== "Wszystkie") {
//     filteredData = filteredData.filter((car) => car.type === type);
//   }

//   if (brand !== "Wszystkie") {
//     filteredData = filteredData.filter((car) => car.brand === brand);
//   }

//   if (priceCategory !== "Wszystkie") {
//     filteredData = filteredData.filter((car) => car.category === priceCategory);
//   }

//   let sortedData = [];
//   if (sortBy === "fuelAsc") {
//     sortedData = filteredData.sort((a, b) =>
//       a.fuelConsumption > b.fuelConsumption ? 1 : -1
//     );
//   } else if (sortBy === "fuelDesc") {
//     sortedData = filteredData.sort((a, b) =>
//       a.fuelConsumption > b.fuelConsumption ? -1 : 1
//     );
//   } else if (sortBy === "default") {
//     sortedData = filteredData.sort(() => Math.random() - 0.5);
//   }
//   return sortedData;
// };

export const getCarItemBySlug = async slug => {
  try {
    const response = await axios.get(url, {
      headers: {
        'X-Master-Key': '$2b$10$HSxPHqX/BixFAIQ9dRx4RO8ftOOyjbYWfFGKyz5VKZ4nr1lgMI9IS'
      }
    });
    const carData = response.data.record.cars;
    return carData.find((car) => car.carLink === slug);
  } catch (error) {
    console.error(error);
  }
};

