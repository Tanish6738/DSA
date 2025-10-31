// Simple Graph Implementation using Adjacency List in JavaScript

class Graph {
  constructor() {
    this.adjacencyList = {}; // store nodes and edges
  }

  // Add a node (vertex) to the graph
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
      console.log(`Vertex '${vertex}' added.`);
    } else {
      console.log(`Vertex '${vertex}' already exists.`);
    }
  }

  // Add an edge (connection) between two vertices
  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) {
      console.log('Both vertices must exist before adding an edge.');
      return;
    }
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1); // for undirected graph
    console.log(`Edge added between '${vertex1}' and '${vertex2}'.`);
  }

  // Remove an edge between two vertices
  removeEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) {
      console.log('Both vertices must exist before removing an edge.');
      return;
    }
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2);
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1);
    console.log(`Edge removed between '${vertex1}' and '${vertex2}'.`);
  }

  // Remove a vertex and all its edges
  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      console.log(`Vertex '${vertex}' does not exist.`);
      return;
    }
    // Remove all connected edges
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
    console.log(`Vertex '${vertex}' and all connected edges removed.`);
  }

  // Print the graph
  printGraph() {
    console.log('Graph Adjacency List:');
    for (let vertex in this.adjacencyList) {
      console.log(`${vertex} -> ${this.adjacencyList[vertex].join(', ')}`);
    }
  }
}

// Example usage:
const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'C');

graph.printGraph();

graph.removeEdge('A', 'C');
graph.printGraph();

graph.removeVertex('B');
graph.printGraph();