392. **Is Subsequence**

Given two strings s and t, return true if s is a subsequence of t, or false otherwise.<br>

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).<br>

Example 1:<br>
Input: s = "abc", t = "ahbgdc"<br>
Output: true<br>

Example 2:<br>
Input: s = "axc", t = "ahbgdc"<br>
Output: false<br>

Constraints:<br>
0 <= s.length <= 100<br>
0 <= t.length <= 104<br>
s and t consist only of lowercase English letters.<br>

Follow up: Suppose there are lots of incoming s, say s1, s2, ..., sk where k >= 109, and you want to check one by one to see if t has its subsequence. In this scenario, how would you change your code?
