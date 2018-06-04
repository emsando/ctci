/* 
  Given a directed graph, design an algorithm to find out whether there is a route between nodes

  Below is a "code skeleton" of a breadth first search - there are several assumptions
*/

const Queue; // require/import a Queue

const routeBetweenGraphNodes = (graph, startNode, endNode) => {
  if (startNode === endNode) {
    return true;
  }
  let q = new Queue;

  startNode.state = 'visiting';
  q.add(startNode); 

  while (q.length > 0) { // q.length or q.isEmpty() to check queue, depends on Queue implementation
    let currNode = q.dequeue();
    for (let adjNode in currNode.edges) {
      if (adjNode.state === 'unvisited') {
        if (adjNode === endNode) {
          return true;
        }
        adjNode.state = 'visiting';
        q.add(adjNode);
      }
    }

    currNode.state = 'visited';
  }

  return false;
}

/* 
  ANALYSIS

  The above assumes graph nodes are initialized with a state property of 'unvisited'. Otherwise we could traverse all elements
  in the graph and flag them as such. 

  The time complexity here is O(V + E), where V is total vertices (objects in the graph) and E is total number of Edges (connections)
  between vertices. In the worst case we'd have to do O(V + E) operations (constants dropped).
  
  For very dense graphs, E may approach V*V, where each vertice has an edge to all others. In this case V + E is more accurately
  represented as V + V*(V-1) which creates O(V^2). 

  For very sparse graphs, E may be much closer to the value V itself.
*/