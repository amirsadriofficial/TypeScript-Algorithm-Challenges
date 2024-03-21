2942. **Find Words Containing Character**

You are given a 0-indexed array of strings words and a character x. <br>

Return an array of indices representing the words that contain the character x.<br>

Note that the returned array may be in any order.<br>

Example 1:<br>
Input: words = ["leet","code"], x = "e"<br>
Output: [0,1]<br>
Explanation: "e" occurs in both words: "leet", and "code". Hence, we return indices 0 and 1.<br>

Example 2:<br>
Input: words = ["abc","bcd","aaaa","cbc"], x = "a"<br>
Output: [0,2]<br>
Explanation: "a" occurs in "abc", and "aaaa". Hence, we return indices 0 and 2.<br>

Example 3:<br>
Input: words = ["abc","bcd","aaaa","cbc"], x = "z"<br>
Output: []<br>
Explanation: "z" does not occur in any of the words. Hence, we return an empty array.<br>

Constraints:<br>
1 <= words.length <= 50<br>
1 <= words[i].length <= 50<br>
x is a lowercase English letter.<br>
words[i] consists only of lowercase English letters.
