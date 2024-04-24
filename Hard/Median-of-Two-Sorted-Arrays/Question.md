4. **Median of Two Sorted Arrays**

Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.<br>

The overall run time complexity should be O(log (m+n)).<br>

 

Example 1:<br>
Input: nums1 = [1,3], nums2 = [2]<br>
Output: 2.00000<br>
Explanation: merged array = [1,2,3] and median is 2.<br>

Example 2:<br>
Input: nums1 = [1,2], nums2 = [3,4]<br>
Output: 2.50000<br>
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.<br>

Constraints:<br>
nums1.length == m<br>
nums2.length == n<br>
0 <= m <= 1000<br>
0 <= n <= 1000<br>
1 <= m + n <= 2000<br>
-106 <= nums1[i], nums2[i] <= 106
