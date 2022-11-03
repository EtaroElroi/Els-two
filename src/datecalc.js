import { DateTime } from "./luxon.js"; // Загружаем локально сохранённый исходный код luxon
export function diffDates(firstDate, secondDate) {
  firstDate = DateTime.fromISO(firstDate);
  secondDate = DateTime.fromISO(secondDate);
  if (firstDate > secondDate)
    secondDate = [firstDate, (firstDate = secondDate)][0]; // Меняем даты, если первая дата больше второй. Это нужно, чтобы не появились цифры с    минусами.
  return secondDate.diff(firstDate, ["years", "months", "days"]).toObject();
}
// Функция diffToHtml форматирует объект как html. Она имеет вид стрелочки, чтобы показать разные варианты экспорта. Придерживаемся одинакового синтаксиса объявления функций в проекте.
export const diffToHtml = diff => `
  <span>
  ${diff.years ? "Лет: " + diff.years : ""}
  ${diff.months ? "Месяцев: " + diff.months : ""}
  ${diff.days ? "Дней: " + diff.days : ""}
  </span>
  `;
