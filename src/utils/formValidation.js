export const validatePhoneNumber = (value) => {
  const phoneRegex = /^[0-9\-\+\s\(\)]*$/;
  return !phoneRegex.test(value);
};

export const validatePostalCode = (value) => {
  const postalCodeRegex = /^[0-9]{2}-[0-9]{3}$/;
  return !postalCodeRegex.test(value);
};

export const validateEmail = (value) => {
  const emailRegex =
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return !emailRegex.test(value);
};
export const validateNotNull = (value) => {
  return !value || value.trim() === "";
};

export const validateAddress = (value) => {
  return !value || value.trim() === "";
};
