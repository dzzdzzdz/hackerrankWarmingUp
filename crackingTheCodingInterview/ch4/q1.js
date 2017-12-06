const hasRouteBFS = (graph, start, target) => {
    if (start === target) return true;
    let visited = {};
    let queue = [start];
    while (queue.length) {
        let currentNode = queue.shift();
        for (let neighbour of graph[currNode]) {
            if (!visited.has(neighbour)) {
                if (neighbour === targetNode) return true;
                visited.add(neighbour);
                queue.push(neighbour);
            }
        }
    }
    return false;
};

const hasRouteDFS = (graph, start, target, visited={}) => {
    if (start === target) return true;
    visited.add(start)
    for (let neighbour of graph[start]) {
        if (!visited.has(neighbour)) {
            if (hasRouteDFS(graph, neighbour, target, visited)) return true;
        }
    }
    return false;
};