function search(nums: number[], target: number): number {
    let result: number = -1;
    let start: number = 0;
    let end: number = nums.length - 1;
    let firstNumber: number = nums[0];
    while (start <= end) {
        const middle: number = Math.ceil((start + end) / 2);
        if (nums[middle] === target) {
            return middle
        }
        if (firstNumber > target) {
            if (nums[middle] > target && nums[middle] < firstNumber) {
                end = middle - 1;
            } else {
                start = middle + 1;
            }
        } else {
            if (nums[middle] < target && nums[middle] > firstNumber) {
                start = middle + 1;
            } else {
                end = middle - 1
            }
        }
    }
    return result;
};
