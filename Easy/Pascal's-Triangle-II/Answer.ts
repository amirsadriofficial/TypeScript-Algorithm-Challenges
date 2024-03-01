function getRow(rowIndex: number): number[] {
  if (rowIndex === 0) {
    return [1];
  }
  let triangle: number[][] = [[1]];
  for (let i = 0; i < rowIndex; i++) {
    let lastRow: number[] = triangle[triangle.length - 1];
    let newRow: number[] = [1];
    for (let j = 1; j < lastRow.length; j++) {
      newRow.push(lastRow[j - 1] + lastRow[j]);
    }
    newRow.push(1);
    triangle.push(newRow);
  }
  return triangle[triangle.length - 1];
}
