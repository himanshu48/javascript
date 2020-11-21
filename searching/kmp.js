"use strict"
// KMP
function createPrefixList(pattern) {
    let prefix = [0]
    for (let i = 1; i < pattern.length; i++) {
        let j = prefix[i-1]
        while (j>0 && pattern[j] != pattern[i]) {
            j = prefix[j-1]
        }
        prefix.push(pattern[i] == pattern[j] ? j+1 : j)
    }
    return prefix
}

function search(text, pattern) {
    let prefix = createPrefixList(pattern)
    let res = []
    let j = 0

    for (let i = 0; i < text.length; i++) {
        while (j>0 && text[i] != pattern[j]) {
            j = prefix[j-1]
        }
        if(text[i]==pattern[j]){
            j+=1
        }
        if (j == pattern.length) {
            res.push(i-(j-1))
            j = prefix[j-1]
        }
    }
    return res
}

let p1 = "aa"
let t1 = "aaaaaaaa"
console.log(search(t1,p1));
// result: [0, 1, 2, 3, 4, 5, 6]

let p2 = "abc"
let t2 = "abdabeabfabc"
console.log(search(t2,p2));
// result: [9]

let p3 = "aab"
let t3 = "aaabaacbaab"
console.log(search(t3,p3));
// result: [1,8]
