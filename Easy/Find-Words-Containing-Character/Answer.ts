function findWordsContaining(words: string[], x: string): number[] {
  let result: number[] = [];
  for (let i: number = 0; i < words.length; i++) {
    if (words[i].includes(x)) {
      result.push(i);
    }
  }
  return result;
}
