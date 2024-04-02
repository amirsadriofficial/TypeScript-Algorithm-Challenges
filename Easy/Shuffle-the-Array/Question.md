1470. **Shuffle the Array**

Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].<br>

Return the array in the form [x1,y1,x2,y2,...,xn,yn].<br>

 

Example 1:<br>

Input: nums = [2,5,1,3,4,7], n = 3<br>
Output: [2,3,5,4,1,7] <br>
Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].<br>
Example 2:<br>

Input: nums = [1,2,3,4,4,3,2,1], n = 4<br>
Output: [1,4,2,3,3,2,4,1]<br>
Example 3:<br>

Input: nums = [1,1,2,2], n = 2<br>
Output: [1,2,1,2]<br>
 

Constraints:<br>

1 <= n <= 500<br>
nums.length == 2n<br>
1 <= nums[i] <= 10^3
