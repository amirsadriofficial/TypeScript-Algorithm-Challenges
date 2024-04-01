2011. **Final Value of Variable After Performing Operations**

There is a programming language with only four operations and one variable X:<br>
++X and X++ increments the value of the variable X by 1.<br>
--X and X-- decrements the value of the variable X by 1.<br>
Initially, the value of X is 0.<br>

Given an array of strings operations containing a list of operations, return the final value of X after performing all the operations.<br>

Example 1:<br>
Input: operations = ["--X","X++","X++"]<br>
Output: 1<br>
Explanation: The operations are performed as follows:<br>
Initially, X = 0.<br>
--X: X is decremented by 1, X = 0 - 1 = -1.<br>
X++: X is incremented by 1, X = -1 + 1 = 0.<br>
X++: X is incremented by 1, X = 0 + 1 = 1.<br>

Example 2:<br>
Input: operations = ["++X","++X","X++"]<br>
Output: 3<br>
Explanation: The operations are performed as follows:<br>
Initially, X = 0.<br>
++X: X is incremented by 1, X = 0 + 1 = 1.<br>
++X: X is incremented by 1, X = 1 + 1 = 2.<br>
X++: X is incremented by 1, X = 2 + 1 = 3.<br>

Example 3:<br>
Input: operations = ["X++","++X","--X","X--"]<br>
Output: 0<br>
Explanation: The operations are performed as follows:<br>
Initially, X = 0.<br>
X++: X is incremented by 1, X = 0 + 1 = 1.<br>
++X: X is incremented by 1, X = 1 + 1 = 2.<br>
--X: X is decremented by 1, X = 2 - 1 = 1.<br>
X--: X is decremented by 1, X = 1 - 1 = 0.<br>

Constraints:<br>
1 <= operations.length <= 100<br>
operations[i] will be either "++X", "X++", "--X", or "X--".
