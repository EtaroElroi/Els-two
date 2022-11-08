import { diffDates, diffToHtml } from "./datecalc.js"; // Импортируем 2 функции из файла src/datecalc.js.

import { formatError } from "./utils.js"; // Импортируем функцию из файла src/utils.js

import { isChecked } from "./switch.js";

import { getStart } from "./timer.js";

export const dateCalcForm = document.getElementById("datecalc");
const dateCalcResult = document.getElementById("datecalc__result");
dateCalcForm.addEventListener("submit", handleCalcDates);
function handleCalcDates(event) {
  dateCalcResult.innerHTML = "";
  event.preventDefault();
  let { firstDate, secondDate } = event.target.elements;
  (firstDate = firstDate.value), (secondDate = secondDate.value);
  if (firstDate && secondDate) {
    const diff = diffDates(firstDate, secondDate); // Вычитаем промежуток между датами.

    dateCalcResult.innerHTML = diffToHtml(diff); // Форматируем промежуток, как html и вставляем в DOM.
  } else
    dateCalcResult.innerHTML = formatError(
      "Для расчета промежутка необходимо заполнить оба поля"
    ); // Если одно из полей не заполнено (или оба), выводим ошибку
}
