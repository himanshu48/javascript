"use strict"
// z-algorithm
// Time complexity - O(n + m)
// Space complexity - O(n + m)
function calculateZ(str) {
    let left = 0;
    let right = 0;
    let Z = [];
    for (let i = 0; i < str.length; i++) {
        if(i > right){
            left = i;
            right = i;
            while (right < str.length && str[right] === str[right-left]) {
                right++;
            }
            Z[i] = right - left;
            right--;
        } else {
            let j = i - left;
            if (Z[j] < right - i + 1) {
                Z[i] = Z[j];
            } else {
                left = i;
                while (right < str.length && str[right] === str[right - left]) {
                    right++;
                }
                Z[i] = right - left;
                right--;
            }
        }
    }
    return Z;
}
function matchPattern(text, pattern) {
    let str = pattern + '$' + text;
    let result = [];
    let Z = calculateZ(str);
    for (let i = 0; i < Z.length; i++) {
        if(Z[i] === pattern.length) {
            result.push(i-pattern.length-1);
        }
    }
    return result;
}

let text1 = "aaabcxyzaaaabczaaczabbaaaaaabc";
let pattern1 = "aaabc";
console.log(matchPattern(text1, pattern1));
