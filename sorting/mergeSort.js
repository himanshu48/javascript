function merge(leftArr, rightArr) {
    let sortedArr = [];
    while (leftArr.length && rightArr.length) {
        if (leftArr[0] <= rightArr[0]) {
            sortedArr.push(leftArr.shift());
            // sortedArr.push(leftArr.splice(0,1));
        } else {
            sortedArr.push(rightArr.shift());
        }
    }
    if (leftArr.length){
        sortedArr = sortedArr.concat(leftArr);
    }
    if (rightArr.length){
        sortedArr = sortedArr.concat(rightArr);
    }

    return sortedArr;
}

function mergesort(arr) {
    if (arr.length < 2) {
        return arr; 
    }
    else {
        let midpoint = parseInt(arr.length / 2);
        let leftArr   = arr.slice(0, midpoint);
        let rightArr  = arr.slice(midpoint, arr.length);
        return merge(mergesort(leftArr), mergesort(rightArr));
    }
    }
let unsortedArr = [340, 1, 3, 3, 76, 23, 4, 12, 122, 7642, 646];
console.log('Sorted array:')
console.log(mergesort(unsortedArr));
