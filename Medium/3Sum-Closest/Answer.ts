function threeSumClosest(nums: number[], target: number): number {
  const n = nums.length;
  let ans = 0;
  let diff: number = Number.MAX_SAFE_INTEGER;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < n - 2; i++) {
    let left = i + 1;
    let right = n - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === target) {
        return target;
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
      const diffrence = Math.abs(sum - target);
      if (diffrence < diff) {
        ans = sum;
        diff = diffrence;
      }
    }
  }
  return ans;
}
