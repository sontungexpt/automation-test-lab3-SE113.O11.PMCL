import dayInMonth from "../src//dayInMonth";

function checkDate(year, month, day) {
  if (
    typeof year !== "number" ||
    typeof month !== "number" ||
    typeof day !== "number"
  ) {
    throw new Error("Invalid input");
  }

  if (year < 1 || month < 1 || month > 12) {
    return false;
  }

  return day > 0 && day <= dayInMonth(year, month);
}

export default checkDate;
