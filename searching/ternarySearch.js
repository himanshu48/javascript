"use strict"

function ternarySearch(arr, s, l=0, r=arr.length){
    if(r>=l){
        let mid1 = l + Math.floor((r-l)/3);
        let mid2 = r - Math.floor((r-l)/3);
        if(arr[mid1] == s) return mid1;
        if(arr[mid2] == s) return mid2;
        if(s<arr[mid1]) return ternarySearch(arr, s, l, mid1-1);
        else if(s>arr[mid2]) return ternarySearch(arr, s, mid2+1, r);
        else return ternarySearch(arr, s, mid1+1, mid2-1);
    }
    return -1;
}

const ar = [1,3,4,6,7,8,9,18,24,29,34,38]
console.log(ternarySearch(ar, 8));
