// Counting Sort
// Time Complexity O(n+k), θ(n+k), Ω(n+k)
// Space Complexity O(k)

function countingSort(arr) {
    let max = Math.max(...arr);
    let min = Math.min(...arr);

    let range = max - min +1;
    let countArr = new Array(range).fill(0);
    let outArr = new Array(arr.length).fill(0);
    
    arr.forEach(e=>{
        countArr[e-min]++;
    })

    for (let i = 1; i < countArr.length; i++) {
        countArr[i] += countArr[i-1];
    }

    for (let i = arr.length-1; i>-1; i--) {
        outArr[countArr[arr[i] - min] -1] = arr[i];
        countArr[arr[i]-min]--;
    }

    // for (let i = 0; i < arr.length; i++) {
    //     arr[i] = outArr[i];
    // }
    // return arr;
    return outArr;
}

let x = [-5, -10, 0, -3, 8, 5, -1, 10]
console.log(countingSort(x))
