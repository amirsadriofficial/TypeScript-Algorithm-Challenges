3110. **Score of a String**

You are given a string s. The score of a string is defined as the sum of the absolute difference between the ASCII values of adjacent characters.<br>

Return the score of s.<br>

Example 1:<br>
Input: s = "hello"<br>
Output: 13<br>
Explanation:<br>
The ASCII values of the characters in s are: 'h' = 104, 'e' = 101, 'l' = 108, 'o' = 111. So, the score of s would be |104 - 101| + |101 - 108| + |108 - 108| + |108 - 111| = 3 + 7 + 0 + 3 = 13.<br>

Example 2:<br>
Input: s = "zaz"<br>
Output: 50<br>
Explanation:<br>
The ASCII values of the characters in s are: 'z' = 122, 'a' = 97. So, the score of s would be |122 - 97| + |97 - 122| = 25 + 25 = 50.<br>

Constraints:<br>
2 <= s.length <= 100<br>
s consists only of lowercase English letters.
