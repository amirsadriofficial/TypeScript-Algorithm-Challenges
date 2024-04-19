1689. **Partitioning Into Minimum Number Of Deci-Binary Numbers**

A decimal number is called deci-binary if each of its digits is either 0 or 1 without any leading zeros. For example, 101 and 1100 are deci-binary, while 112 and 3001 are not.<br>

Given a string n that represents a positive decimal integer, return the minimum number of positive deci-binary numbers needed so that they sum up to n.<br>

Example 1:<br>
Input: n = "32"<br>
Output: 3<br>
Explanation: 10 + 11 + 11 = 32<br>

Example 2:<br>
Input: n = "82734"<br>
Output: 8<br>

Example 3:<br>
Input: n = "27346209830709182346"<br>
Output: 9<br>

Constraints:<br>
1 <= n.length <= 105<br>
n consists of only digits.<br>
n does not contain any leading zeros and represents a positive integer.
