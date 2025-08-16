/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    if(n < 2) return 0;
    let output = new Array(n).fill(true);
    output[0] = false;
    output[1] = false;

    for(let i = 2; i * i < n; i++){
        if(output[i]){
            for(let j = i * i; j<n; j+=i){
                output[j] = false;
            }
        }
    }
    return output.filter((val) => val).length
};