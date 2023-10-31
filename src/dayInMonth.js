function IsLeapYear(year) {
  return year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
}

function dayInMonth(year, month) {
  if (typeof year !== "number" || typeof month !== "number") {
    throw new Error("Invalid input");
  }

  year = Number(year);
  month = Number(month);

  if (year < 1 || month < 1 || month > 12) {
    return 0;
  }

  const month31 = [1, 3, 5, 7, 8, 10, 12];
  const month30 = [4, 6, 9, 11];

  if (month31.includes(month)) {
    return 31;
  }
  if (month30.includes(month)) {
    return 30;
  }

  if (IsLeapYear(year)) {
    return 29;
  }
  return 28;
}

export default dayInMonth;
