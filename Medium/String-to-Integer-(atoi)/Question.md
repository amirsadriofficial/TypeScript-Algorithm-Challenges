8. **String to Integer (atoi)**

Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer.<br>

The algorithm for myAtoi(string s) is as follows:<br>

Whitespace: Ignore any leading whitespace (" ").<br>

Signedness: Determine the sign by checking if the next character is '-' or '+', assuming positivity is neither present.<br>

Conversion: Read the integer by skipping leading zeros until a non-digit character is encountered or the end of the string is reached. If no digits were read, then the result is 0.<br>

Edge case: If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then round the integer to remain in the range. Specifically, integers less than -231 should be rounded to -231, and integers greater than 231 - 1 should be rounded to 231 - 1.
Return the integer as the final result.<br>



Example 1:<br>
Input: s = "42"<br>
Output: 42<br>
Explanation:<br>
The underlined characters are what is read in and the caret is the current reader position.<br>
Step 1: "42" (no characters read because there is no leading whitespace)<br>
Step 2: "42" (no characters read because there is neither a '-' nor '+')<br>
Step 3: "42" ("42" is read in)<br>
Example 2:<br>
Input: s = " -042"<br>
Output: -42<br>
Explanation:<br>
Step 1: " -042" (leading whitespace is read and ignored)<br>
Step 2: " -042" ('-' is read, so the result should be negative)<br>
Step 3: " -042" ("042" is read in, leading zeros ignored in the result)<br>
Example 3:<br>
Input: s = "1337c0d3"<br>
Output: 1337<br>
Explanation:<br>
Step 1: "1337c0d3" (no characters read because there is no leading whitespace)<br>
Step 2: "1337c0d3" (no characters read because there is neither a '-' nor '+')<br>
Step 3: "1337c0d3" ("1337" is read in; reading stops because the next character is a non-digit)<br>
Example 4:<br>
Input: s = "0-1"<br>
Output: 0<br>
Explanation:<br>
Step 1: "0-1" (no characters read because there is no leading whitespace)<br>
Step 2: "0-1" (no characters read because there is neither a '-' nor '+')<br>
Step 3: "0-1" ("0" is read in; reading stops because the next character is a non-digit)<br>
Example 5:<br>
Input: s = "words and 987"<br>
Output: 0<br>
Explanation:<br>
Reading stops at the first non-digit character 'w'.<br>

Constraints:<br>
0 <= s.length <= 200<br>
s consists of English letters (lower-case and upper-case), digits (0-9), ' ', '+', '-', and '.'.
