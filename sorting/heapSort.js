// Heap Sort
// Time Complexity O(nlogn)
// Space complexity: O(1)

function maxHeapify(arr, n, i) {
    let largest = i;
    let l = 2*i + 1; //left child index
    let r = 2*i + 2; //right child index

    if (l < n && arr[l] > arr[largest]) {
        largest = l;
    }

    if (r < n && arr[r] > arr[largest]) {
        largest = r;
    }

    if (largest != i) {
        let temp = arr[i];
        arr[i] = arr[largest];
        arr[largest] = temp;

    // Recursively heapify the affected sub-tree
    maxHeapify(arr, n, largest);
    }
}

function minHeapify(arr, n, i) {
    let smallest = i;
    let l = 2*i + 1; //left child index
    let r = 2*i + 2; //right child index

    if (l < n && arr[l] < arr[smallest]) {
        smallest = l;
    }

    if (r < n && arr[r] < arr[smallest]) {
        smallest = r;
    }

    if (smallest != i) {
        let temp = arr[i];
        arr[i] = arr[smallest];
        arr[smallest] = temp;

    // Recursively heapify the affected sub-tree
    minHeapify(arr, n, smallest);
    }
}

function heapSort(arr) {
    const n = arr.length;
    // Build heap (rearrange array)
    for (let i = parseInt(n/2 - 1); i >= 0; i--) {
        maxHeapify(arr, n, i);
    }

    // One by one extract an element from heap
    for (let i = n-1; i >= 0; i--) {
        // Move current root to end
        let temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;

        // call max heapify on the reduced heap
        maxHeapify(arr, i, 0);
    }
}

const x = [4, 6, 3, 2, 9];
heapSort(x);
console.log(x);
