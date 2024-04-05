function maxWidthOfVerticalArea(points: number[][]): number {
  let xCoords: number[] = [],
    ans = 0;
  for (const point of points) xCoords.push(point[0]);
  xCoords.sort((a, b) => a - b);
  for (let i = 0; i < xCoords.length - 1; i++)
    ans = Math.max(ans, xCoords[i + 1] - xCoords[i]);
  return ans;
}
