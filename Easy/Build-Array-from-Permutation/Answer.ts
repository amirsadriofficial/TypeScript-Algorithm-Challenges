function buildArray(nums: number[]): number[] {
  const arr: number[] = [];
  nums.forEach((i) => {
    arr[i] = nums[nums[i]];
  });
  return arr;
}
