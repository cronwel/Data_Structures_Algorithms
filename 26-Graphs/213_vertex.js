// unidirected graph
class Graph{
  constructor(){
    this.adjacencyList = {};
  }
  // 214 add vertexes#######################
  addVertex(vertex){
    if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  // 215 add edges##########################
  addEdge(v1,v2){
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }
  // 219 Remove edge#####################
  removeEdge(vertex1,vertex2){
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      v => v != vertex1);
    this.adjacencyList[vertex1] = this.adjacencyList[vertex2].filter(
      v => v != vertex1);
  }
  removeVertex(vertex){
    while(this.adjacencyList[vertex].length){
        const adjacentVertex = this.adjacencyList[vertex].pop();
        this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }
}

let g = new Graph();
g.addVertex("Dallas");
g.addVertex("Tokyo");
g.addVertex("Aspen");
g.addVertex("Los Angeles");
g.addVertex("Hong Kong")
g.addEdge("Dallas", "Tokyo");
g.addEdge("Dallas", "Aspen");
g.addEdge("Hong Kong", "Tokyo");
g.addEdge("Hong Kong", "Dallas");
g.addEdge("Los Angeles", "Hong Kong");
g.addEdge("Los Angeles", "Aspen");
console.log(g);
console.table(g);
g.removeEdge("Dallas","Tokyo");
console.table(g);
console.dir(g);

