function maximumWealth(accounts: number[][]): number {
  let maxWealth: number = 0;
  for (let account of accounts) {
    const sum = account.reduce(
      (runningTotal, nextValue) => runningTotal + nextValue,
      0
    );
    maxWealth = Math.max(maxWealth, sum);
  }
  return maxWealth;
}
