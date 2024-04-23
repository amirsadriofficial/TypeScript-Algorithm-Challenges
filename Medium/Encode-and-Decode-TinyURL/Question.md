535. **Encode and Decode TinyURL**

Note: This is a companion problem to the System Design problem: Design TinyURL.<br>
TinyURL is a URL shortening service where you enter a URL such as https://leetcode.com/problems/design-tinyurl and it returns a short URL such as http://tinyurl.com/4e9iAk. Design a class to encode a URL and decode a tiny URL.<br>

There is no restriction on how your encode/decode algorithm should work. You just need to ensure that a URL can be encoded to a tiny URL and the tiny URL can be decoded to the original URL.<br>

Implement the Solution class:<br>

Solution() Initializes the object of the system.<br>
String encode(String longUrl) Returns a tiny URL for the given longUrl.<br>
String decode(String shortUrl) Returns the original long URL for the given shortUrl. It is guaranteed that the given shortUrl was encoded by the same object.<br>

Example 1:<br>
Input: url = "https://leetcode.com/problems/design-tinyurl"<br>
Output: "https://leetcode.com/problems/design-tinyurl"<br>
Explanation:<br>
Solution obj = new Solution();<br>
string tiny = obj.encode(url); // returns the encoded tiny url.<br>
string ans = obj.decode(tiny); // returns the original url after decoding it.<br>

Constraints:<br>
1 <= url.length <= 104<br>
url is guranteed to be a valid URL.
