class Node {
    constructor(id) {
        this.id = id;
        this.child = [];
    }
}

function topologicalSort(edges) {
    let nodes = {};
    let sorted = [];
    let visited = {};

    edges.forEach((v) => {
        let from = v[0], to = v[1];
        if (!nodes[from]) nodes[from] = new Node(from);
        if (!nodes[to]) nodes[to] = new Node(to);
        nodes[from].child.push(to);
    });

    Object.keys(nodes).forEach(function visit(id, ancestors) {
        let node = nodes[id];

        if (visited[id]) return;

        if (!Array.isArray(ancestors)) ancestors = [];

        ancestors.push(id);

        visited[id] = true;

        node.child.forEach((childID) => {
            if (ancestors.indexOf(childID) >= 0){
                throw new Error('closed chain : ' + childID + ' is in ' + id);
            }
            visit(childID, [...ancestors]);
        });

        sorted.unshift(id);
    });

    return sorted;
}

let edgesArr = [
    ['A', 'C'],
    ['B', 'C'],
    ['B', 'E'],
    ['C', 'D'],
    ['D', 'F'],
    ['E', 'F'],
    ['F', 'G'],
    ['D', 'E']
];

let result = topologicalSort(edgesArr);
console.log(result);
