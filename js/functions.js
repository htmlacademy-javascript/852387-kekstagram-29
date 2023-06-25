// Функция для проверки длины строки
function checkStringLength (str, length) {
  return str.length <= length;
}

// Функция для проверки, является ли строка палиндромом.
function checkStringPolyndrom (str) {
  const newStr = str.replaceAll(' ', '').toLowerCase();
  let result = '';
  for (let i = newStr.length - 1; i >= 0; i--) {
    result += newStr[i];
  }
  return result === newStr;
}
