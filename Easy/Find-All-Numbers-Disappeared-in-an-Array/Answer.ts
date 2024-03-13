function findDisappearedNumbers(nums: number[]): number[] {
  let set = new Set(nums);
  let res: number[] = [];
  for (let i = 1; i < nums.length + 1; i++) {
    if (!set.has(i)) {
      res.push(i);
    }
  }
  return res;
}
