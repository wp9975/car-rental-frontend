const priceCategories = {
  Basic: 1,
  Standard: 1.3,
  Medium: 1.6,
  Premium: 2,
};

const basePrice = 100;
const vat = 1.23;
const fuelPrices = {
  petrol: 6.67,
  diesel: 7.67,
};

const calculateRental = (
  category,
  fuel,
  fuelConsumption,
  quantity,
  dateStart,
  dateEnd,
  driverLicenseYear,
  distance
) => {
  let dailyRentalPrice = parseInt(basePrice);
  let driverDiscount = false;
  let fuelPrice = 0;
  let rentalDays =
    (new Date(dateEnd).getTime() - new Date(dateStart).getTime()) / 86400000 +
    1;

  switch (category) {
    case "basic":
      dailyRentalPrice *= priceCategories.Basic;
      break;
    case "standard":
      dailyRentalPrice *= priceCategories.Standard;
      break;
    case "medium":
      dailyRentalPrice *= priceCategories.Medium;
      break;
    case "premium":
      dailyRentalPrice *= priceCategories.Premium;
      break;
    default:
      return dailyRentalPrice;
  }

  if (quantity < 3) {
    dailyRentalPrice *= 1.15;
  }

  if (new Date().getFullYear() - driverLicenseYear > 5) {
    driverDiscount = true;
  } else {
    dailyRentalPrice *= 1.2;
  }

  switch (fuel) {
    case "benzyna":
      fuelPrice = fuelPrices.petrol * (fuelConsumption / 100) * distance;
      break;
    case "diesel":
      fuelPrice = fuelPrices.diesel * (fuelConsumption / 100) * distance;
      break;
  }

  const nettoPrice = dailyRentalPrice * rentalDays + fuelPrice;
  const bruttoPrice = nettoPrice * vat;

  return {
    dailyRentalPrice,
    rentalDays,
    distance,
    driverDiscount,
    fuelPrice,
    nettoPrice,
    bruttoPrice,
  };
};

export default calculateRental;
