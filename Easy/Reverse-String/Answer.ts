/**
 Do not return anything, modify s in-place instead.
 */
 function reverseString(s: string[]): void {
    let counter: number = 0;
    for(let i = s.length - 1; i >= counter; i--) {
        let temporary: string = s[i];
        s[i] = s[counter];
        s[counter] = temporary;
        counter++;
    }
};
