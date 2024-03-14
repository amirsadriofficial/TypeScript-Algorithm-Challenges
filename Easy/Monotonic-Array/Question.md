896. **Monotonic Array**

An array is monotonic if it is either monotone increasing or monotone decreasing.<br>

An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j]. An array nums is monotone decreasing if for all i <= j, nums[i] >= nums[j].<br>

Given an integer array nums, return true if the given array is monotonic, or false otherwise.<br>

Example 1:<br>
Input: nums = [1,2,2,3]<br>
Output: true<br>

Example 2:<br>
Input: nums = [6,5,4,4]<br>
Output: true<br>

Example 3:<br>
Input: nums = [1,3,2]<br>
Output: false<br>

Constraints:<br>
1 <= nums.length <= 105<br>
-105 <= nums[i] <= 105
