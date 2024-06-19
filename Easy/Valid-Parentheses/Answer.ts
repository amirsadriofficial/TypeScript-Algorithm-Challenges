function isValid(s: string): boolean {
    let openBracketsStack: any = [];
    const bracketsMap = {
        ')': '(',
        ']': '[',
        '}': '{'
    }
    for (let i = 0; i < s.length; i++) {
        const currentBracket = s[i];
        if (['(', '[', '{'].includes(currentBracket)) {
            openBracketsStack.push(currentBracket)
        } else if (openBracketsStack.pop() !== bracketsMap[currentBracket]) {
            return false;
        }
    }

    return !openBracketsStack.length;
};
