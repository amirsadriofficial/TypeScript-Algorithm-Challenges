function intersect(nums1: number[], nums2: number[]): number[] {
    const counts: {} = {};
    const result: number[] = [];
    nums1.forEach(el => counts[el] = ++counts[el] || 1);
    for (let el of nums2) {
        if (counts[el]) {
            result.push(el);
            counts[el]--;
        }
    }
    return result;
};
