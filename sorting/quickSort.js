"use strict"

function partition(items, left, right) {
    let pivot = items[Math.floor((right + left) / 2)] //middle element
    let i = left //left pointer
    let j = right; //right pointer
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j);
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(items, left, right) {
    let index;
    if (items.length > 1) {
        index = partition(items, left, right);
        if (left < index - 1) { //more elements on the left side of the pivot
            quickSort(items, left, index - 1);
        }
        if (index < right) { //more elements on the right side of the pivot
            quickSort(items, index, right);
        }
    }
    return items;
}

function swap(items, l, r){
    let temp = items[l];
    items[l] = items[r];
    items[r] = temp;
}

// first call to quick sort
let arr = [5,3,7,6,2,9];
let sortedArray = quickSort(arr, 0, arr.length - 1);
console.log(sortedArray); //prints [2,3,5,6,7,9]
