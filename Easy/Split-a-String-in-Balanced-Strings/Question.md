1221. **Split a String in Balanced Strings**

Balanced strings are those that have an equal quantity of 'L' and 'R' characters.<br>

Given a balanced string s, split it into some number of substrings such that:<br>

Each substring is balanced.<br>
Return the maximum number of balanced strings you can obtain.<br>

 

Example 1:<br>
Input: s = "RLRRLLRLRL"<br>
Output: 4<br>
Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.<br>

Example 2:<br>
Input: s = "RLRRRLLRLL"<br>
Output: 2<br>
Explanation: s can be split into "RL", "RRRLLRLL", each substring contains same number of 'L' and 'R'.<br>
Note that s cannot be split into "RL", "RR", "RL", "LR", "LL", because the 2nd and 5th substrings are not balanced.<br>

Example 3:<br>
Input: s = "LLLLRRRR"<br>
Output: 1<br>
Explanation: s can be split into "LLLLRRRR".<br>

Constraints:<br>
2 <= s.length <= 1000<br>
s[i] is either 'L' or 'R'.<br>
s is a balanced string.
