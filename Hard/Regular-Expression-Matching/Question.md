10. **Regular Expression Matching**

Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where:<br>

'.' Matches any single character.​​​​<br>
'*' Matches zero or more of the preceding element.<br>
The matching should cover the entire input string (not partial).<br>

 

Example 1:<br>
Input: s = "aa", p = "a"<br>
Output: false<br>
Explanation: "a" does not match the entire string "aa".<br>

Example 2:<br>
Input: s = "aa", p = "a*"<br>
Output: true<br>
Explanation: '*' means zero or more of the preceding element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".<br>

Example 3:<br>
Input: s = "ab", p = ".*"<br>
Output: true<br>
Explanation: ".*" means "zero or more (*) of any character (.)".<br>

Constraints:<br>
1 <= s.length <= 20<br>
1 <= p.length <= 20<br>
s contains only lowercase English letters.<br>
p contains only lowercase English letters, '.', and '*'.<br>
It is guaranteed for each appearance of the character '*', there will be a previous valid character to match.<br>
