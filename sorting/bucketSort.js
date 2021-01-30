// Bucket Sort
// Time Complexity O(n^2), θ(n), Ω(n+k)
// Space Complexity O(n^2)

function bucketSort(arr) {
    let slot = arr.length;
    let bucket = Array(slot).fill(null).map(_=>[]);
    
    arr.forEach(e=>{
        let i = Math.floor(slot * e);
        bucket[i].push(e);
    });

    let res = [];
    bucket.forEach(e=>res.push(...insertionSort(e)));
    return res;
}

function mixedBucketSort(arr) {
    const n = arr.length;
    let neg = [];
    let pos = [];
    
    //Group the positive and negative values
    for(let i = 0; i < n; i++){
      if(arr[i] < 0){
        neg.push(-1 * arr[i]);
      }else{
        pos.push(arr[i]);
      }
    }
    
    //sort the group
    neg = bucketSort(neg);
    pos = bucketSort(pos);
    
    // First store elements of Neg[] array 
    // by converting into -ve 
    for (let i = 0; i < neg.length; i++){ 
        arr[i] = -1 * neg[ neg.length - 1 - i];
    }
    
    // store +ve element 
    for(let j = neg.length; j < n; j++) {
        arr[j] = pos[j - neg.length]; 
    }
  } 

function insertionSort(inputArr) {
    for (let i = 1; i < inputArr.length; i++) {
        let current = inputArr[i];
        let j = i-1; 
        while ((j > -1) && (current < inputArr[j])) {
            inputArr[j+1] = inputArr[j];
            j--;
        }
        inputArr[j+1] = current;
    }
    return inputArr;
}

let x = [0.897, 0.565, 0.656, 0.1234, 0.665, 0.3434];
console.log("Sorted Array is:")
console.log(bucketSort(x))

const negArr = [-0.897, 0.565, 0.656, -0.1234, 0, 0.3434];
mixedBucketSort(negArr);
console.log(negArr);
