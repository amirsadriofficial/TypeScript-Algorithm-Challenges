function dayOfTheWeek(day: number, month: number, year: number): string {
  const dayName = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let date = new Date(`${month} ${day}, ${year}`).getDay();
  return dayName[date];
}