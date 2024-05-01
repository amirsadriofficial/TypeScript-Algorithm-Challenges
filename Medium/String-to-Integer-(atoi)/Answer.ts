function myAtoi(s: string): number {
    const len = s.length;
    let result = 0;
    let sign = 1;
    for (let i = 0; i < len; i++) {
        if (s[i] === ' ') continue;
        if (s[i] === '+' || s[i] === '-') {
            sign = s[i] === '-' ? -1 : 1;
            if (!/[0-9]/.test(s[i + 1])) return 0;
        }
        if (/[0-9]/.test(s[i])) {
            result = result * 10 + (+s[i]);
            if (!/[0-9]/.test(s[i + 1])) break;
        }
        if (/[a-zA-Z.]/.test(s[i])) {
            return 0;
        }
    }
    return sign === -1 ? Math.max(-(2 ** 31), -result) : Math.min(2 ** 31 - 1, result);
};
