function scoreOfString(s: string): number {
    let ans: number = 0;
    if (s) {
        let sArray: string[] = s.split("");
        for (let i = 0; i < sArray.length - 1; i++) {
            ans += Math.abs(sArray[i].charCodeAt(0) - sArray[i + 1].charCodeAt(0));
        }
    }
    return ans;
};
