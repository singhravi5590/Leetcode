/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
     let charMap = {};

     for(let val of nums){
        if(charMap[val]){
            return val
        }
        charMap[val] = 1
     }
};