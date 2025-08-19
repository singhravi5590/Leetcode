/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let charMap = {};
    for(let i = 0; i<nums.length; i++){
        let char = nums[i];
        charMap[char] = charMap[char] > 0 ? charMap[char] + 1 : +1;
    }

    for(let key in charMap){
        if(charMap[key] === 1){
            return Number(key)
        }
    }
};