'use strict'
// find how many ways denomination can be given
function count(S, m, n ) {
    if (n == 0) return 1;
    if (n < 0) return 0; 
    if (m <=0 && n >= 1) return 0;
    return count( S, m - 1, n ) + count( S, m, n-S[m-1] ); 
}
const arr = [1, 2, 5, 10, 20, 50, 100, 200]
let m = arr.length
console.log(count(arr, m, 200)) 
