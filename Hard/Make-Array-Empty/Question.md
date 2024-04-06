2659. **Make Array Empty**

You are given an integer array nums containing distinct numbers, and you can perform the following operations until the array is empty:<br>

If the first element has the smallest value, remove it<br>
Otherwise, put the first element at the end of the array.<br>
Return an integer denoting the number of operations it takes to make nums empty.<br>

 

Example 1:<br>
Input: nums = [3,4,-1]<br>
Output: 5<br>
Operation	Array<br>
1	        [4, -1, 3]<br>
2	        [-1, 3, 4]<br>
3	        [3, 4]<br>
4	        [4]<br>
5	        []<br>

Example 2:<br>
Input: nums = [1,2,4,3]<br>
Output: 5<br>
Operation	Array<br>
1	[2, 4, 3]<br>
2	[4, 3]<br>
3	[3, 4]<br>
4	[4]<br>
5	[]<br>

Example 3:<br>
Input: nums = [1,2,3]<br>
Output: 3<br>
Operation	Array<br>
1	[2, 3]<br>
2	[3]<br>
3	[]<br>

Constraints:<br>
1 <= nums.length <= 105<br>
-109 <= nums[i] <= 109<br>
All values in nums are distinct.
