function balancedStringSplit(s: string): number {
    let ans = 0;
    const chars = { L: -1, R: 1 };
    let cur = 0;
    for (let right = 0; right < s.length; right++) {
        cur += chars[s[right]];
        if (cur === 0) ans++;
    }
    return ans;
};
