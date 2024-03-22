function numIdenticalPairs(nums: number[]): number {
    let count = 0;
    const map: any = new Map<number, number>();
    nums.forEach((num) => map.set(num, map.get(num) ? map.get(num) + 1 : 1));
    map.forEach(value => count += value * (value - 1) / 2);
    return count;
};
