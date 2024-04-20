function numJewelsInStones(jewels: string, stones: string): number {
    let jewelsCounter = 0;
    for (let i = 0; i < stones.length; i++) {
        if (jewels.indexOf(stones[i]) >= 0) {
            jewelsCounter++;
        }
    }
    return jewelsCounter;
};
