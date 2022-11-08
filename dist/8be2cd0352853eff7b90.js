import { diffDates, diffToHtml } from "./datecalc.js"; // Импортируем 2 функции из файла src/datecalc.js.

import { formatError } from "./utils.js"; // Импортируем функцию из файла src/utils.js

import { isChecked } from "./switch.js";
import { getStart } from "./timer.js";
export var dateCalcForm = document.getElementById("datecalc");
var dateCalcResult = document.getElementById("datecalc__result");
dateCalcForm.addEventListener("submit", handleCalcDates);

function handleCalcDates(event) {
  dateCalcResult.innerHTML = "";
  event.preventDefault();
  var _event$target$element = event.target.elements,
      firstDate = _event$target$element.firstDate,
      secondDate = _event$target$element.secondDate;
  firstDate = firstDate.value, secondDate = secondDate.value;

  if (firstDate && secondDate) {
    var diff = diffDates(firstDate, secondDate); // Вычитаем промежуток между датами.

    dateCalcResult.innerHTML = diffToHtml(diff); // Форматируем промежуток, как html и вставляем в DOM.
  } else dateCalcResult.innerHTML = formatError("Для расчета промежутка необходимо заполнить оба поля"); // Если одно из полей не заполнено (или оба), выводим ошибку

}