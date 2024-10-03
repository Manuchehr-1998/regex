function isValidMultilineText(text) {
  const regex = /^\s*#.*\.$/gm;
  const matches = text.match(regex);
  return (
    matches &&
    matches.length ===
      text.split("\n").filter((line) => line.trim() !== "").length
  );
}

const text1 = `
    # Заголовок 1.
    # Заголовок 2.
    # Заголовок 3.
  `;

const text2 = `
    # Заголовок 1
    # Заголовок 2.
    Заголовок 3.
  `;

console.log(isValidMultilineText(text1)); // true
console.log(isValidMultilineText(text2)); // false
