function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const totalLength = nums1.length + nums2.length;
    const isEven = totalLength % 2 === 0;
    let leftIndex = 0;
    let rightIndex = 0;
    let median1 = 0;
    let median2 = 0;
    const nums1Length = nums1.length
    const nums2Length = nums2.length
    for (let i = 0; i <= totalLength / 2; i++) {
        median1 = median2;
        let nums1LeftIndex = nums1[leftIndex]
        let nums2LeftIndex = nums2[rightIndex]
        if (leftIndex < nums1Length && (rightIndex >= nums2Length || nums1LeftIndex < nums2LeftIndex)) {
            median2 = nums1LeftIndex;
            leftIndex++;
        } else {
            median2 = nums2LeftIndex;
            rightIndex++;
        }
    }
    return isEven ? (median1 + median2) / 2 : median2;
};
