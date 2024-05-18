11. **Container With Most Water**

You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).<br>

Find two lines that together with the x-axis form a container, such that the container contains the most water.<br>

Return the maximum amount of water a container can store.<br>

Notice that you may not slant the container.<br>

Example 1:<br>
Input: height = [1,8,6,2,5,4,8,3,7]<br>
Output: 49<br>
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.<br>

Example 2:<br>
Input: height = [1,1]<br>
Output: 1<br>

Constraints:<br>
n == height.length<br>
2 <= n <= 105<br>
0 <= height[i] <= 104
