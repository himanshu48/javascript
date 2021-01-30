// Radix Sort
// non-comparison based sorting algorithm
// Time Complexity O(d * (size + max),  θ(d * (size + max)), Ω(d * (size + max))
// Space complexity: O(max)

const countingSortNegative = (arr, place) => {
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    let range = max - min + 1;
    let count = new Array(range).fill(0);
    let output = new Array(n).fill(0);
    let n = arr.length;

    //Store the frequency
    for (let i = 0; i < n; i++) {
        const num = Math.floor(arr[i] / place) % 10;
        count[num - min]++; 
    } 

    //Accumulate the frequency
    for (let i = 1; i < count.length; i++) { 
        count[i] += count[i - 1]; 
    } 

    //Sort based on frequency
    for (let i = n - 1; i >= 0; i--) { 
        const num = Math.floor(arr[i] / place) % 10;
        output[count[num - min] - 1] = arr[i]; 
        count[num - min]--; 
    } 

    //Copy the output array
    for (let i = 0; i < n; i++){
        arr[i] = output[i];
    }
}

const radixSort = (arr) => {
    //Get the max element
    let max = Math.max(...arr);

    //Sort the array using counting sort
    for(let i = 1; parseInt(max / i) > 0; i *= 10){
        countingSortNegative(arr, i);
    }
}

const x = [121, -432, 564, 23, -1, 45, 788];
radixSort(x);
console.log(x);
