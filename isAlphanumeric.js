function containsOnlyLettersAndDigits(str) {
  return /^[A-Za-z0-9]+$/.test(str);
}

const strings = ["Hello123", "Hello 123", "Hello!", "12345", "abcABC", ""];

strings.forEach((s) => {
  console.log(
    `Строка: "${s}", Содержит только буквы и цифры: ${containsOnlyLettersAndDigits(
      s
    )}`
  );
});
