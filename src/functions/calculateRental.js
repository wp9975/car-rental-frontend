const basePrice = 100;
const categories = {
  Basic: 1,
  Standard: 1.3,
  Medium: 1.6,
  Premium: 2,
};
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
  rentalDays,
  driverLicenseYear,
  distance
) => {
 
  let dailyRentalPrice = parseInt(basePrice);
  let driverDiscount = false;
  let fuelPrice = 0;



  switch (category) {
    case "basic":
      dailyRentalPrice *= categories.Basic;
      break;
    case "standard":
      dailyRentalPrice *= categories.Standard;
      break;
    case "medium":
      dailyRentalPrice *= categories.Medium;
      break;
    case "premium":
      dailyRentalPrice *= categories.Premium;
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
        fuelPrice = fuelPrices.petrol * (fuelConsumption/100) * distance;
      break;
    case "diesel":
        fuelPrice = fuelPrices.diesel * (fuelConsumption/100) * distance;
      break;
  }

  const nettoPrice = dailyRentalPrice * rentalDays;
  const bruttoPrice = nettoPrice * vat;

  return {
    dailyRentalPrice,
    rentalDays,
    distance,
    driverDiscount,
    fuelPrice,
    nettoPrice,
    bruttoPrice
  };
};

export default calculateRental;
