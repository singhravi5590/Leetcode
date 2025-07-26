/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let newArr = [...nums1, ...nums2];
    newArr.sort((a,b) => a-b);
    let length = newArr.length;
    if(length % 2 === 0){
        let mid1 = length/2-1;
        let mid2 = length/2;
        let output = (newArr[mid1] + newArr[mid2])/2
        return output;
    }
    else{
        let output = newArr[Math.floor(length/2)]
        return output;
    }
};