function generateParenthesis(n: number): string[] {
  const allCombos: string[] = [];
  function recurse(openParens: number, closedParens: number, combo: string) {
    if (openParens === 0 && closedParens === 0) {
      allCombos.push(combo);
      return;
    }
    if (openParens < closedParens) {
      recurse(openParens, closedParens - 1, combo + ")");
    }
    if (openParens > 0) {
      recurse(openParens - 1, closedParens, combo + "(");
    }
  }
  recurse(n, n, "");
  return allCombos;
}
