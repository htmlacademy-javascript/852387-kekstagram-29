// Функция для проверки длины строки
function checkStringLength (str, length) {
  return str.length <= length;
}

console.log('ответ = ', checkStringLength('проверяемая строка', 20));
console.log(checkStringLength('проверяемая строка', 18));
console.log(checkStringLength('проверяемая строка', 10));
