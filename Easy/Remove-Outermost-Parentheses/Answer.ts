// function removeOuterParentheses(s: string): string {
//     let level = 0
//     let built: string = ""
//     for (const c of s) {
//         if (c === "(" && level++ === 0) continue
//         if (c === ")" && level-- === 1) continue
//         built += c
//     }
//     return built
// };

function removeOuterParenthesesRec(s: string, index: number, count: number, output: string): string {
    if (index === s.length) {
        return output;
    }
    const currentChar: string = s.charAt(index);
    if (currentChar === "(") {
        count++;
        if (count > 1) {
            output += currentChar;
        }
    } else {
        if (count > 1) {
            output += currentChar;
        }
        count--;
    }
    return removeOuterParenthesesRec(s, index + 1, count, output);
}
function removeOuterParentheses(s: string): string {
    return removeOuterParenthesesRec(s, 0, 0, "");
};
