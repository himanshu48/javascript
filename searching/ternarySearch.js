"use strict"

function ternary_search(l, r, x){
    if(r>=l){
        let mid1 = l + Math.floor((r-l)/3);
        let mid2 = r - Math.floor((r-l)/3);
        if(ar[mid1] == x) return mid1;
        if(ar[mid2] == x) return mid2;
        if(x<ar[mid1]) return ternary_search(l,mid1-1,x);
        else if(x>ar[mid2]) return ternary_search(mid2+1,r,x);
        else return ternary_search(mid1+1,mid2-1,x);
    }
    return -1;
}

const ar = [1,3,4,6,7,8,9,18,24,29,34,38]
let li = Math.floor(ar.length/3)
let ri = ar.length - li
console.log(ternary_search(li,ri,8));
