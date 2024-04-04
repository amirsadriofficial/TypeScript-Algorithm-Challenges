2798. **Number of Employees Who Met the Target**

There are n employees in a company, numbered from 0 to n - 1. Each employee i has worked for hours[i] hours in the company.<br>

The company requires each employee to work for at least target hours.<br>

You are given a 0-indexed array of non-negative integers hours of length n and a non-negative integer target.<br>

Return the integer denoting the number of employees who worked at least target hours.<br>

Example 1:<br>
Input: hours = [0,1,2,3,4], target = 2<br>
Output: 3<br>
Explanation: The company wants each employee to work for at least 2 hours.<br>
- Employee 0 worked for 0 hours and didn't meet the target.<br>
- Employee 1 worked for 1 hours and didn't meet the target.<br>
- Employee 2 worked for 2 hours and met the target.<br>
- Employee 3 worked for 3 hours and met the target.<br>
- Employee 4 worked for 4 hours and met the target.<br>
There are 3 employees who met the target.<br>

Example 2:<br>
Input: hours = [5,1,4,2,2], target = 6<br>
Output: 0<br>
Explanation: The company wants each employee to work for at least 6 hours.<br>
There are 0 employees who met the target.<br>

Constraints:<br>
1 <= n == hours.length <= 50<br>
0 <= hours[i], target <= 105
