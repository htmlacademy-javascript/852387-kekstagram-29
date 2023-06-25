// Функция для проверки длины строки
function checkStringLength (str, length) {
  return str.length <= length;
}

checkStringLength('проверяемая строка', 20); // true
// Длина строки ровно 18 символов
checkStringLength('проверяемая строка', 18); // true
// Строка длиннее 10 символов
checkStringLength('проверяемая строка', 10); // false

// Функция для проверки, является ли строка палиндромом.
function checkStringPolyndrom (str) {
  const newStr = str.replaceAll(' ', '').toLowerCase();
  let result = '';
  for (let i = newStr.length - 1; i >= 0; i--) {
    result += newStr[i];
  }
  return result === newStr;
}

// Строка является палиндромом
checkStringPolyndrom('топот'); // true
// Несмотря на разный регистр, тоже палиндром
checkStringPolyndrom('ДовОд'); // true
// Это не палиндром
checkStringPolyndrom('Кекс'); // false
// Это палиндром
checkStringPolyndrom('Лёша на полке клопа нашёл '); // true

// Функция извлекает число из строки
function extractNumber (chars) {
  const str = chars.toString();
  let result = '';
  for (let i = 0; i < str.length; i++) {
    const parsed = parseInt(str[i], 10);
    result += !isNaN(parsed) ? str[i] : '';
  }
  return parseInt(result, 10);
}

extractNumber('2023 год'); // 2023
extractNumber('ECMAScript 2022'); // 2022
extractNumber('1 кефир, 0.5 батона'); // 105
extractNumber('агент 007'); // 7
extractNumber('а я томат'); // NaN
extractNumber(2023); // 2023
extractNumber(-1); // 1
extractNumber(1.5); // 15
