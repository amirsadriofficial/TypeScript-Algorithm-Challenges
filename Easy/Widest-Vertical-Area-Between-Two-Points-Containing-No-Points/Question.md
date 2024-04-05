1637. **Widest Vertical Area Between Two Points Containing No Points**

Given n points on a 2D plane where points[i] = [xi, yi], Return the widest vertical area between two points such that no points are inside the area.<br>

A vertical area is an area of fixed-width extending infinitely along the y-axis (i.e., infinite height). The widest vertical area is the one with the maximum width.<br>

Note that points on the edge of a vertical area are not considered included in the area.<br>

Example 1:<br>
Input: points = [[8,7],[9,9],[7,4],[9,7]]<br>
Output: 1<br>
Explanation: Both the red and the blue area are optimal.<br>

Example 2:<br>
Input: points = [[3,1],[9,0],[1,0],[1,4],[5,3],[8,8]]<br>
Output: 3<br>

Constraints:<br>
n == points.length<br>
2 <= n <= 105<br>
points[i].length == 2<br>
0 <= xi, yi <= 109
