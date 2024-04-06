function countOperationsToEmptyArray(nums: number[]): number {
  const l = nums.length;
  let map = new Map<number, number>();
  for (let i = 0; i < l; i++) {
    map.set(nums[i], i);
  }
  nums.sort((a, b) => a - b);
  let operations = l;
  let currentIndex: any = 0;
  let nextIndex: any = l;
  for (let i = 0; i < l; currentIndex = map.get(nums[i++])) {
    if (nextIndex < currentIndex) {
      operations += l - i;
    }
    nextIndex = map.get(nums[i + 1]);
  }
  return operations;
}
