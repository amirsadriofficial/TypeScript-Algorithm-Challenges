1021. **Remove Outermost Parentheses**

A valid parentheses string is either empty "", "(" + A + ")", or A + B, where A and B are valid parentheses strings, and + represents string concatenation.<br>

For example, "", "()", "(())()", and "(()(()))" are all valid parentheses strings.
A valid parentheses string s is primitive if it is nonempty, and there does not exist a way to split it into s = A + B, with A and B nonempty valid parentheses strings.<br>

Given a valid parentheses string s, consider its primitive decomposition: s = P1 + P2 + ... + Pk, where Pi are primitive valid parentheses strings.<br>

Return s after removing the outermost parentheses of every primitive string in the primitive decomposition of s.<br>

Example 1:<br>
Input: s = "(()())(())"<br>
Output: "()()()"<br>
Explanation:<br>
The input string is "(()())(())", with primitive decomposition "(()())" + "(())".<br>
After removing outer parentheses of each part, this is "()()" + "()" = "()()()".<br>

Example 2:<br>
Input: s = "(()())(())(()(()))"<br>
Output: "()()()()(())"<br>
Explanation:<br>
The input string is "(()())(())(()(()))", with primitive decomposition "(()())" + "(())" + "(()(()))".<br>
After removing outer parentheses of each part, this is "()()" + "()" + "()(())" = "()()()()(())".<br>

Example 3:<br>
Input: s = "()()"<br>
Output: ""<br>
Explanation:<br>
The input string is "()()", with primitive decomposition "()" + "()".<br>
After removing outer parentheses of each part, this is "" + "" = "".<br>

Constraints:<br>
1 <= s.length <= 105<br>
s[i] is either '(' or ')'.<br>
s is a valid parentheses string.
