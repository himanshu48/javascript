// Breadth First Search

function bfs(matrix, startNode, targetNode) {
    let parents = [];
    let queue = [];
    let visited = [];
    let current;
    queue.push(startNode);
    parents[startNode] = null;
    visited[startNode] = true;
    while (queue.length>0) {
        current = queue.shift();
        if(current === targetNode){
            return buildPath(parents, targetNode)
        }
        for (let i = 0; i < matrix.length; i++) {
            if(i!=current && matrix[current][i] && !visited[i]){
                parents[i] = current;
                visited[i] = true;
                queue.push(i);
            }
        }
    }
    return null;
}

function buildPath(parents, targetNode) {
    let result = [targetNode];
    while (parents[targetNode] !== null) {
      targetNode = parents[targetNode];
      result.push(targetNode);
    }
    return result.reverse();
  }

let graph = [[1, 1, 0, 0, 1, 0],
              [1, 0, 1, 0, 1, 0],
              [0, 1, 0, 1, 0, 0],
              [0, 0, 1, 0, 1, 1],
              [1, 1, 0, 1, 0, 0],
              [0, 0, 0, 1, 0, 0]];
let shortestPath = bfs(graph, 1, 5); // [1, 2, 3, 5]
console.log(shortestPath);
