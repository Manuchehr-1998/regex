function isValidPostalCode(postalCode) {
  const regex = /^\d{5}$/;
  return regex.test(postalCode);
}

const postalCodes = [
  "12345",
  "12345-6789",
  "1234",
  "123456",
  "12345-678",
  "ABCDE",
];

postalCodes.forEach((code) => {
  console.log(
    `Почтовый индекс: "${code}", Соответствует формату: ${isValidPostalCode(
      code
    )}`
  );
});
