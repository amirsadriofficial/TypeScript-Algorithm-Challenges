function maxSatisfaction(satisfaction: number[]): number {
  let sorted = satisfaction.sort((a, b) => a - b);
  let total = sorted.reduce((a, b) => a + b);
  let remove = 0;
  while (total < 0) {
    total -= sorted[remove];
    remove++;
  }
  let result = 0;
  for (let i = remove; i < sorted.length; i++) {
    result += sorted[i] * (i - remove + 1);
  }
  return result;
}
