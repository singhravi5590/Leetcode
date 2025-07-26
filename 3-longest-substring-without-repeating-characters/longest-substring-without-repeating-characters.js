/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let charMax = {};
    let start = 0;
    let maxLength = 0;
    for(let i = 0; i<s.length; i++){
        let char = s[i];
        if(charMax[char] !== undefined && charMax[char] >= start){
            start = charMax[char] + 1;
        }
        charMax[char] = i;
        maxLength = Math.max(maxLength, i - start + 1);
    }

    return maxLength;
};