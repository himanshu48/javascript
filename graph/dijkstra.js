
const lowestCostNode = (costs, processed) => {
    return Object.keys(costs).reduce((lowest, node) => {
        if (lowest === null || costs[node] < costs[lowest]) {
            if (!processed.includes(node)) {
                lowest = node;
            }
        }
        return lowest;
    }, null);
};

const dijkstra = (graph, startNodeName, endNodeName = null) => {

    let costs = Object.assign({}, graph[startNodeName]);

    const parents = {};
    for (let child in graph[startNodeName]) {
        parents[child] = startNodeName;
    }

    const processed = [];

    let node = lowestCostNode(costs, processed);

    while (node) {
        let cost = costs[node];
        let children = graph[node];
        for (let n in children) {
            if (n != startNodeName) {
                let newCost = cost + children[n];
                if (!costs[n] || costs[n] > newCost) {
                    costs[n] = newCost;
                    parents[n] = node;
                }
            }
        }
        processed.push(node);
        node = lowestCostNode(costs, processed);
    }

    if (endNodeName) {
        let optimalPath = [endNodeName];
        let parent = parents[endNodeName];
        while (parent) {
            optimalPath.push(parent);
            parent = parents[parent];
        }
        optimalPath.reverse();

        const results = {
            distance: costs[endNodeName],
            path: optimalPath
        };
        return results;
    } else {
        return [costs, parents];
    }
};

// test case
const graph1 = {
    A: { B: 5, C: 2 },
    B: { A: 1, D: 4, E: 2 },
    C: { B: 8, E: 7 },
    D: { E: 6, F: 3 },
    E: { F: 1 },
    F: {}
};

console.log(dijkstra(graph1, 'A'));
console.log(dijkstra(graph1, 'A','F'));
