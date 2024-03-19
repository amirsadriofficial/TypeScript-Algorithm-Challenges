2114. **Maximum Number of Words Found in Sentences**

A sentence is a list of words that are separated by a single space with no leading or trailing spaces.<br>

You are given an array of strings sentences, where each sentences[i] represents a single sentence.<br>

Return the maximum number of words that appear in a single sentence.<br>

Example 1:<br>
Input: sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]<br>
Output: 6<br>
Explanation: <br>
- The first sentence, "alice and bob love leetcode", has 5 words in total.<br>
- The second sentence, "i think so too", has 4 words in total.<br>
- The third sentence, "this is great thanks very much", has 6 words in total.<br>
Thus, the maximum number of words in a single sentence comes from the third sentence, which has 6 words.<br>
  
Example 2:<br>
Input: sentences = ["please wait", "continue to fight", "continue to win"]<br>
Output: 3<br>
Explanation: It is possible that multiple sentences contain the same number of words. <br>
In this example, the second and third sentences (underlined) have the same number of words.<br>

Constraints:<br>
1 <= sentences.length <= 100<br>
1 <= sentences[i].length <= 100<br>
sentences[i] consists only of lowercase English letters and ' ' only.<br>
sentences[i] does not have leading or trailing spaces.<br>
All the words in sentences[i] are separated by a single space.
