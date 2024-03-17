2000. **Reverse Prefix of Word**

Given a 0-indexed string word and a character ch, reverse the segment of word that starts at index 0 and ends at the index of the first occurrence of ch (inclusive). If the character ch does not exist in word, do nothing.<br>

For example, if word = "abcdefd" and ch = "d", then you should reverse the segment that starts at 0 and ends at 3 (inclusive). The resulting string will be "dcbaefd".<br>
Return the resulting string.<br>

Example 1:<br>
Input: word = "abcdefd", ch = "d"<br>
Output: "dcbaefd"<br>
Explanation: The first occurrence of "d" is at index 3.<br>
Reverse the part of word from 0 to 3 (inclusive), the resulting string is "dcbaefd".<br>

Example 2:<br>
Input: word = "xyxzxe", ch = "z"<br>
Output: "zxyxxe"<br>
Explanation: The first and only occurrence of "z" is at index 3.<br>
Reverse the part of word from 0 to 3 (inclusive), the resulting string is "zxyxxe".<br>

Example 3:<br>
Input: word = "abcd", ch = "z"<br>
Output: "abcd"<br>
Explanation: "z" does not exist in word.<br>
You should not do any reverse operation, the resulting string is "abcd".<br>

Constraints:<br>
1 <= word.length <= 250<br>
word consists of lowercase English letters.<br>
ch is a lowercase English letter.
