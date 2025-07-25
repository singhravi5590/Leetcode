/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
   let output = [];
   for(let i = 0; i<arr.length; i++){
    if(Array.isArray(arr[i]) && n > 0){
        let flatten = flat(arr[i], n - 1);
        output.push(...flatten);
    }
    else{
        output.push(arr[i])
    }
   }
   return output;
};