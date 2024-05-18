function maxArea(height: number[]): number {
  let low = 0;
  let high = height.length - 1;
  let ans = 0;
  while (low <= high) {
    const length = Math.min(height[low], height[high]);
    const breadth = high - low;
    const area = length * breadth;
    ans = Math.max(ans, area);
    if (height[low] < height[high]) low++;
    else high--;
  }
  return ans;
}
