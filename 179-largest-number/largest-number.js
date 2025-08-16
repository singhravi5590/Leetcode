/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    nums = nums.map((num) => num.toString());

    nums.sort((a, b) => (b + a).localeCompare(a + b));

    if (nums[0] === "0") return "0";

    return nums.join("")
    
};