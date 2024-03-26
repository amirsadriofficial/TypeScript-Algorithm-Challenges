1678. Goal Parser Interpretation

You own a Goal Parser that can interpret a string command. The command consists of an alphabet of "G", "()" and/or "(al)" in some order. The Goal Parser will interpret "G" as the string "G", "()" as the string "o", and "(al)" as the string "al". The interpreted strings are then concatenated in the original order.<br>

Given the string command, return the Goal Parser's interpretation of command.<br>

 

Example 1:<br>
Input: command = "G()(al)"<br>
Output: "Goal"<br>
Explanation: The Goal Parser interprets the command as follows:<br>
G -> G<br>
() -> o<br>
(al) -> al<br>
The final concatenated result is "Goal".<br>
Example 2:<br>
Input: command = "G()()()()(al)"<br>
Output: "Gooooal"<br>
Example 3:<br>
Input: command = "(al)G(al)()()G"<br>
Output: "alGalooG"<br>

Constraints:<br>
1 <= command.length <= 100<br>
command consists of "G", "()", and/or "(al)" in some order.
