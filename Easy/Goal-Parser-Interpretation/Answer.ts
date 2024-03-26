function interpret(command: string): string {
    let ans = '';
    let prev = false;
    for(let i = 0; i < command.length; i++) {
        const char = command[i];
        if(char === '(') prev = true;
        else if(char === ')' && prev) ans += "o";
        else if(char !== ')' && char !== '(') {
            prev = false;
            ans += char;
        }
    }
    return ans;
};
