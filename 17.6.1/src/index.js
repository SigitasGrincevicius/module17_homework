// Напишите функцию validatePhoneNumber(str), которая возвращает true, если str — это номер телефона в формате +7 (987) 654-32-10 или +7 (4212) 53-53-53.

export const validatePhoneNumbers = (str) => {
  const phoneRegex = /^(\+7\s\(\d{3,4}\)\s\d{2,3}-\d{2}-\d{2})$/;

  return phoneRegex.test(str);
}

console.log(validatePhoneNumbers("+7 (987) 654-32-10"));

console.log(validatePhoneNumbers("+7 (2222) 55-32-10"));