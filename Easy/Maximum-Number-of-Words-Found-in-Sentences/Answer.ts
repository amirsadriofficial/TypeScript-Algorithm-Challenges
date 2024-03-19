function mostWordsFound(sentences: string[]): number {
  let max = 0;
  for (let idx = 0; idx < sentences.length; idx++) {
    let count = 1;
    for (const char of sentences[idx]) {
      if (char === " ") count++;
    }
    max = Math.max(count, max);
  }
  return max;
}
