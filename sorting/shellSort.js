// Shell Sort
// Time Complexity O(n^2)
// Space complexity: O(1)

const shellSort = (arr) => {
    const n = arr.length;
    let interval = Math.floor(n/2);
    while (interval > 0) {
      for (let i = interval; i < n; i++) {
        let temp = arr[i];
        let j = i;
        while (j >= interval && arr[j-interval] > temp) {
          arr[j] = arr[j - interval];
          j -= interval;
        }
        arr[j] = temp;
      }
      interval= Math.floor(interval/2);
    }
}

const x = [9, 8, 3, 7, 5, 6, 4, 1, 2];
shellSort(x);
console.log(x);


// Some of the optimal sequences used are:
// Shell's original sequence: N/2 , N/4 , …, 1
// Knuth's increments: 1, 4, 13, …, (3k – 1) / 2
// Sedgewick's increments: 1, 8, 23, 77, 281, 1073, 4193, 16577...4j+1+ 3·2j+ 1
// Hibbard's increments: 1, 3, 7, 15, 31, 63, 127, 255, 511…
// Papernov & Stasevich increment: 1, 3, 5, 9, 17, 33, 65,...
// Pratt: 1, 2, 3, 4, 6, 9, 8, 12, 18, 27, 16, 24, 36, 54, 81....
