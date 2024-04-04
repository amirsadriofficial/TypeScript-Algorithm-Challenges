function numberOfEmployeesWhoMetTarget(hours: number[], target: number): number {
    let count: number = 0;
    for (let i = 0; i < hours.length; i++) {
        if (hours[i] >= target) count++;
    }
    return count;
};
