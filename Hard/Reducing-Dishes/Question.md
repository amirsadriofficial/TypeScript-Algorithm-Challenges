1402. **Reducing Dishes**

A chef has collected data on the satisfaction level of his n dishes. Chef can cook any dish in 1 unit of time.<br>

Like-time coefficient of a dish is defined as the time taken to cook that dish including previous dishes multiplied by its satisfaction level i.e. time[i] \* satisfaction[i].<br>

Return the maximum sum of like-time coefficient that the chef can obtain after preparing some amount of dishes.<br>

Dishes can be prepared in any order and the chef can discard some dishes to get this maximum value.<br>

Example 1:<br>
Input: satisfaction = [-1,-8,0,5,-9]<br>
Output: 14<br>
Explanation: After Removing the second and last dish, the maximum total like-time coefficient will be equal to (-1*1 + 0*2 + 5\*3 = 14).<br>
Each dish is prepared in one unit of time.<br>

Example 2:<br>
Input: satisfaction = [4,3,2]<br>
Output: 20<br>
Explanation: Dishes can be prepared in any order, (2*1 + 3*2 + 4\*3 = 20)<br>

Example 3:<br>
Input: satisfaction = [-1,-4,-5]<br>
Output: 0<br>
Explanation: People do not like the dishes. No dish is prepared.<br>

Constraints:<br>
n == satisfaction.length<br>
1 <= n <= 500<br>
-1000 <= satisfaction[i] <= 1000
