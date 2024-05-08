function permute(nums: number[]): number[][] {
  const answer: any = [];
  function backtrack(current: number[], num: number) {
    if (current.includes(num)) return;
    current.push(num);
    if (current.length === nums.length) {
      answer.push(current);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      backtrack([...current], nums[i]);
    }
  }
  for (let i = 0; i < nums.length; i++) {
    backtrack([], nums[i]);
  }
  return answer;
}
