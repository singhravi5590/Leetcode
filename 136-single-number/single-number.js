/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let arr = nums.filter((num, i) => nums.indexOf(num) === nums.lastIndexOf(num))
    return arr[0]
};