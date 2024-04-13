function convertTemperature(celsius: number): number[] {
  return [273.15 + celsius, 1.8 * celsius + 32];
}
