function reversePrefix(word: string, ch: string): string {
  let chIdx = word.indexOf(ch) + 1;
  let prefix = word.slice(0, chIdx);
  let suffix = word.slice(chIdx, word.length);
  return prefix.split("").reverse().join("") + suffix;
}
