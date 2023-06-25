// Функция для проверки длины строки
const checkStringLength = (str, length) => str.length <= length;

checkStringLength('проверяемая строка', 20); // true
checkStringLength('проверяемая строка', 18); // true
checkStringLength('проверяемая строка', 10); // false

// Функция для проверки, является ли строка палиндромом.
const checkStringPolyndrom = (str) => {
  if (str && str.length === 0) {
    return true;
  }

  const newStr = str.replaceAll(' ', '').toLowerCase();

  return [...newStr].reverse().join('') === newStr;
};

checkStringPolyndrom('топот'); // true
checkStringPolyndrom('ДовОд'); // true
checkStringPolyndrom('Кекс'); // false
checkStringPolyndrom('Лёша на полке клопа нашёл '); // true

// Функция извлекает число из строки
const extractNumber = (str) => {
  if (str && str.length === 0) {
    return NaN;
  }

  return parseInt(str.toString().replace(/\D+/g, ''), 10);
};

extractNumber('2023 год'); // 2023
extractNumber('ECMAScript 2022'); // 2022
extractNumber('1 кефир, 0.5 батона'); // 105
extractNumber('агент 007'); // 7
extractNumber('а я томат'); // NaN
extractNumber(2023); // 2023
extractNumber(-1); // 1
extractNumber(1.5); // 15
