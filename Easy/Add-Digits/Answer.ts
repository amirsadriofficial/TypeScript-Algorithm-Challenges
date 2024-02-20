function addDigits(num: number): number {
  return num === 0 ? 0 : num % 9 === 0 ? 9 : num % 9;
}
