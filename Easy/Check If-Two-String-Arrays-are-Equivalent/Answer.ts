function arrayStringsAreEqual(word1: string[], word2: string[]): boolean {
  const str1 = word1.join("");
  const str2 = word2.join("");
  if (str1 === str2) {
    return true;
  }
  return false;
}
