function minPartitions(n: string): number | undefined {
  for (let i = 9; i > 0; i--) {
    if (n.indexOf(i.toString()) != -1) return i;
  }
}
