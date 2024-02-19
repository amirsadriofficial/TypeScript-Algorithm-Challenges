function dayOfYear(date: string): number {
  const [year, month, day] = date.split("-").map(Number);
  const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  const daysInMonth = {
    1: 31,
    2: isLeapYear ? 29 : 28,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31,
  };
  let days = 0;
  for (let i = 1; i < month; i++) {
    days += daysInMonth[i];
  }
  return days + day;
}

// Example
const date = "2019-01-09";
console.log(dayOfYear(date));
