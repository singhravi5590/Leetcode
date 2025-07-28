/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    const INT_MAX = 2147483647, INT_MIN = -2147483648;
    let result = 0;
    let sign = 1;
    let i = 0;

    while(s[i] === ' ' && s.length > i) i++;

    if(s[i] === '-' || s[i] === '+'){
        sign = s[i] === '-' ? -1 : +1;
        i++;
    }

    while(i < s.length && s[i] >= '0' && s[i] <= '9'){
        result = result * 10 + (s[i] - '0');
        if(sign * result < INT_MIN) return INT_MIN;
        if(sign * result > INT_MAX) return INT_MAX
        i++;
    }

    return (sign * result)

};