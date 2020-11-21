"use strict"
function binarySearch(a, key){
    let low = 0;
    let high = a.length;
   while(low<=high){
     let mid=Math.floor((low+high)/2);
     if(a[mid]<key) low=mid+1;
     else if(a[mid]>key) high=mid-1;
     else return mid;
   }
   return -1;                //key not found
 }

 let arr = [1,3,4,6,7,8,9,18,24,29,34,38]
 console.log(binarySearch(arr,8));
