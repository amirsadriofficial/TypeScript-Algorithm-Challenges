1512. **Number of Good Pairs**

Given an array of integers nums, return the number of good pairs.<br>

A pair (i, j) is called good if nums[i] == nums[j] and i < j.<br>

Example 1:<br>
Input: nums = [1,2,3,1,1,3]<br>
Output: 4<br>
Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.<br>

Example 2:<br>
Input: nums = [1,1,1,1]<br>
Output: 6<br>
Explanation: Each pair in the array are good.<br>

Example 3:<br>
Input: nums = [1,2,3]<br>
Output: 0<br>

Constraints:<br>
1 <= nums.length <= 100<br>
1 <= nums[i] <= 100
