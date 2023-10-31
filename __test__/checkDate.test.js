import { describe, expect, test } from "@jest/globals";
import checkDate from "../src/checkDate";

describe("checkDate", () => {
  // test month out of range
  const monthOutOfRange = [0, 13];

  monthOutOfRange.forEach((month) => {
    test("returns false for invalid month", () => {
      expect(checkDate(2020, month, 1)).toBe(false);
    });
  });

  test("returns true for valid month", () => {
    for (let month = 1; month < 13; month++) {
      expect(checkDate(2020, month, 1)).toBe(true);
    }
  });

  // test day out of range
  test("returns false for day less than 0", () => {
    for (let month = 1; month < 13; month++) {
      expect(checkDate(2020, month, 0)).toBe(false);
    }
  });

  // 31 days in month
  const monthWith31Days = [1, 3, 5, 7, 8, 10, 12];
  test("returns false for invalid day in months with 31 days", () => {
    monthWith31Days.forEach((month) => {
      expect(checkDate(2020, month, 32)).toBe(false);
    });
  });

  test("returns true for valid day in months with 31 days", () => {
    monthWith31Days.forEach((month) => {
      for (let day = 1; day < 32; day++) {
        expect(checkDate(2020, month, day)).toBe(true);
      }
    });
  });

  // 30 days in month
  const monthWith30Days = [4, 6, 9, 11];
  test("returns false for invalid day in months with 30 days", () => {
    monthWith30Days.forEach((month) => {
      expect(checkDate(2020, month, 31)).toBe(false);
    });
  });

  test("returns false for invalid day in months with 30 days", () => {
    monthWith30Days.forEach((month) => {
      for (let day = 1; day < 31; day++) {
        expect(checkDate(2020, month, day)).toBe(true);
      }
    });
  });

  // February always has 28 days
  test("returns true for valid day in February", () => {
    for (let day = 1; day < 29; day++) {
      expect(checkDate(1, 2, day)).toBe(true);
    }
  });

  test("returns false for day 29 in February and not in leap year)", () => {
    expect(checkDate(1, 2, 29)).toBe(false);
  });

  test("returns false for day 30 in February in leap year", () => {
    expect(checkDate(240, 2, 30)).toBe(false);
  });

  test("returns true for day 29 in February in leap year", () => {
    expect(checkDate(240, 2, 29)).toBe(true);
  });

  // year out of range
  test("returns false for year less than 1", () => {
    expect(checkDate(-1, 1, 1)).toBe(false);
  });
});
