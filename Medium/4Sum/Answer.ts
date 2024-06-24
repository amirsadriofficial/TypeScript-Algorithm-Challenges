function fourSum(nums: number[], target: number): number[][] {
    nums.sort((a, b) => a - b);
    const k: number = 4;
    const result: number[][] = [];
    const quadruplet: any = [];
    const kSum = (k: number, kTarget: number, startIdx: number = 0) => {
        if (k == 2) {
            let left: number = startIdx;
            let right: number = nums.length - 1;
            while (left < right) {
                const sum: number = nums[left] + nums[right];
                if (sum < kTarget) {
                    left += 1;
                } else if (sum > kTarget) {
                    right -= 1;
                } else {
                    result.push(quadruplet.concat(nums[left], nums[right]));
                    left += 1;
                    while (nums[left] == nums[left - 1] && left < right) {
                        left += 1;
                    }
                }
            }
            return;
        }
        for (let i = startIdx; i < nums.length - k + 1; i++) {
            if (i > startIdx && nums[i] == nums[i - 1]) {
                continue;
            }
            quadruplet.push(nums[i])
            kSum(k - 1, kTarget - nums[i], i + 1);
            quadruplet.pop();
        }
    };
    kSum(k, target);

    return result;
};
