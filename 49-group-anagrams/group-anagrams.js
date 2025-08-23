/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let charMap = {};
    for(let str of strs){
        let char = str.split("").sort().join("");
        if(!(charMap[char])){
            charMap[char] = [];
        }
        charMap[char].push(str);
    }

    return Object.values(charMap)
};