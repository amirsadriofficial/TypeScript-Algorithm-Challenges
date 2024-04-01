function finalValueAfterOperations(operations: string[]): number {
    let sum: number = 0;
    operations.forEach((el) => {
        el.includes('+') ? sum++ : sum--;
    })
    return sum;
};
