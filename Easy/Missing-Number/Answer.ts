function missingNumber(nums: number[]): number {
    let n = nums.length;
    let total = (n * (n + 1)) / 2;
    let sum = nums.reduce((a, b) => a + b);
    return total - sum;
};
