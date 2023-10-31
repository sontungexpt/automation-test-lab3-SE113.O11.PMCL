import { describe, expect, test } from "@jest/globals";
import dayInMonth from "../src/dayInMonth";

describe("dayInMonth", () => {
  const invalidType = ["1", "", undefined, null, true, false, {}, []];
  const invalidMonth = [13, 0];
  const month31 = [1, 3, 5, 7, 8, 10, 12];
  const month30 = [4, 6, 9, 11];
  const month2829 = 2;
  const year = 2021;

  const yearDividedBy400 = 400; // leap year expected 29 days
  const notDividedBy400butdividedBy100 = 500; // not leap year expected 28 days
  const notDividedBy400and100butdividedBy4 = 204; // leap year expected 29 days
  const notDividedBy400and100and4 = 2003; // not leap year expected 28 days

  test("return 31 for months:" + month31.join(", "), () => {
    month31.forEach((month) => {
      expect(dayInMonth(year, month)).toBe(31);
    });
  });

  test("return 30 for months:, " + month30.join(", ") + ", " + year, () => {
    month30.forEach((month) => {
      expect(dayInMonth(year, month)).toBe(30);
    });
  });

  test("return 28 for month 2 in not leap year", () => {
    expect(dayInMonth(notDividedBy400and100and4, month2829)).toBe(28);
  });

  test("return 28 for month 2 in not leap year", () => {
    expect(dayInMonth(notDividedBy400butdividedBy100, month2829)).toBe(28);
  });

  test("return 29 for month 2 in leap year", () => {
    expect(dayInMonth(notDividedBy400and100butdividedBy4, month2829)).toBe(29);
  });

  test("return 29 for month 2 in leap year", () => {
    expect(dayInMonth(yearDividedBy400, month2829)).toBe(29);
  });

  test("returns 0 if year less than 1", () => {
    expect(dayInMonth(0, 3)).toBe(0);
  });

  test("return 0 if month is out of range [1,12]", () => {
    invalidMonth.forEach((month) => {
      expect(dayInMonth(2023, month)).toBe(0);
    });
  });

  test("throws an error for invalid month type", () => {
    invalidType.forEach((type) => {
      expect(() => dayInMonth(type, 1)).toThrow(new Error("Invalid input"));
    });
  });

  test("throws an error for invalid year type", () => {
    invalidType.forEach((type) => {
      expect(() => dayInMonth(2002, type)).toThrow(new Error("Invalid input"));
    });
  });
});
