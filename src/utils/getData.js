import axios from 'axios';

export const getCarsList = async () => {
  const response = await axios.get(`./data/cars.json`);
  return response.data.cars;
};