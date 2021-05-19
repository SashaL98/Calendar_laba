const DAYS_IN_WEEK = 7;

const DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const WEEK_DAYS_FROM_MONDAY = [6, 0, 1, 2, 3, 4, 5];

const Month = {
  January: 0,
  February: 1,
  March: 2,
  April: 3,
  May: 4,
  June: 5,
  July: 6,
  August: 7,
  September: 8,
  October: 9,
  Novermber: 10,
  December: 11
};

const Holiday = [
  [1, 0, "Новый год"],
  [7, 0, "Рождество Христово"],
  [23, 1, "День защитника Отечества"],
  [8, 2, "Международный женский день"],
  [1, 4, "Праздник Весны и Труда"],
  [9, 4, "День Победы"],
  [1, 5, "Международный день защиты детей"],
  [12, 5, "День России"],
  [1, 8, "День Знаний"],
  [4, 10, "День народного единства"]
];

export function areEqual(a, b) {
  if (!a || !b) return false;

  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

export function isLeapYear(year) {
  return !(year % 4 || (!(year % 100) && year % 400));
}

export function isholiday(date) {
  const day = date.getDate();
  const month = date.getMonth();

  for (let i = 0; i < 10; i++) {
    if (day === Holiday[i][0] && month === Holiday[i][1]) {
      return true;
    }
  }
  return false;
}

export function isdayoff(date) {
  const monthStartsOn = getDayOfWeek(date);

  if (monthStartsOn === 5 || monthStartsOn === 6) {
    return true;
  }
  return false;
}

export function isholiday_Name(date) {
  const day = date.getDate();
  const month = date.getMonth();

  for (let i = 0; i < 10; i++) {
    if (day === Holiday[i][0] && month === Holiday[i][1]) {
      return Holiday[i][2];
    }
  }
  return false;
}

export function getDaysInMonth(date) {
  const month = date.getMonth();
  const year = date.getFullYear();
  const daysInMonth = DAYS_IN_MONTH[month];

  if (isLeapYear(year) && month === Month.February) {
    return daysInMonth + 1;
  } else {
    return daysInMonth;
  }
}

export function getDayOfWeek(date) {
  const dayOfWeek = date.getDay();

  return WEEK_DAYS_FROM_MONDAY[dayOfWeek];
}

export function getMonthData(year, month) {
  const result = [];
  const date = new Date(year, month);
  const daysInMonth = getDaysInMonth(date);
  const monthStartsOn = getDayOfWeek(date);
  let day = 1;

  for (let i = 0; i < (daysInMonth + monthStartsOn) / DAYS_IN_WEEK; i++) {
    result[i] = [];

    for (let j = 0; j < DAYS_IN_WEEK; j++) {
      if ((i === 0 && j < monthStartsOn) || day > daysInMonth) {
        result[i][j] = undefined;
      } else {
        result[i][j] = new Date(year, month, day++);
      }
    }
  }

  return result;
}
