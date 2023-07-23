function find_largest(matrix) {
    let x = 0;
    for(let i=0; i<matrix.length; i++){
        for(let j=0; j<matrix[0].length; j++){
            if(matrix[i][j]==1){
                let t = dfs(i,j,matrix)
                x = Math.max(t, x)
            }
            // console.log('x',x, ' t',t);
        }
    }
    // console.log(matrix);
    return x
}

function dfs(r,c,matrix){
    let rowVector = [-1, -1, -1, 0, 0, 1, 1, 1];
    let colVector = [-1, 0, 1, -1, 1, -1, 0, 1];

    // let rowVector = [-1, 0, 0, 1];
    // let colVector = [ 0, -1, 1, 0];
    
    matrix[r][c] = 'v';
    let count = 1;
    for(let i=0; i<8; i++){
        if(canMove(r+rowVector[i], c+colVector[i], matrix)){
            count += dfs(r+rowVector[i], c+colVector[i], matrix);
        }
    }
    return count;
}

function canMove(r,c,matrix){
    return -1 < r && r < matrix.length && -1 < c && c < matrix[0].length && matrix[r][c]==1;
}

let arr = [
    [1, 1, 0, 0, 0],
    [0, 1, 1, 0, 0],
    [0, 0, 1, 0, 1],
    [1, 0, 0, 0, 1],
    [0, 1, 0, 1, 1]
]

console.log(find_largest(arr));