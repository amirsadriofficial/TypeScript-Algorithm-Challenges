2769. **Find the Maximum Achievable Number**

You are given two integers, num and t.<br>

An integer x is called achievable if it can become equal to num after applying the following operation no more than t times:<br>
Increase or decrease x by 1, and simultaneously increase or decrease num by 1.<br>
Return the maximum possible achievable number. It can be proven that there exists at least one achievable number.<br>

Example 1:<br>
Input: num = 4, t = 1<br>
Output: 6<br>
Explanation: The maximum achievable number is x = 6; it can become equal to num after performing this operation:<br>
1- Decrease x by 1, and increase num by 1. Now, x = 5 and num = 5. <br>
It can be proven that there is no achievable number larger than 6.<br>

Example 2:<br>
Input: num = 3, t = 2<br>
Output: 7<br>
Explanation: The maximum achievable number is x = 7; after performing these operations, x will equal num: <br>
1- Decrease x by 1, and increase num by 1. Now, x = 6 and num = 4.<br>
2- Decrease x by 1, and increase num by 1. Now, x = 5 and num = 5.<br>
It can be proven that there is no achievable number larger than 7.<br>

Constraints:<br>
1 <= num, t <= 50
