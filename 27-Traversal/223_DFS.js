
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

  //225-recursive################################
  dfsr(start){
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;
    (function dfs(vertex){
      if(!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach(neighbor => {
        if(!visited[neighbor]){
          return dfs(neighbor)
        }
      })
    })(start);
    return result;
  }
  // 227 - dfs1###############################
  dfsi(start){
    const stack = [start];
    const result = [];
    const visited = {};
    let currentVertex;

    visited[start]= true;
    while(stack.length){
      console.log(stack);
      currentVertex = stack.pop();
      result.push(currentVertex);
  
      this.adjacencyList[currentVertex].forEach(neighbor => {
        if(!visited[neighbor]){
          visited[neighbor]= true;
          stack.push(neighbor)
        }
      });
    }
    return result;
  }
  bfs(start){
    const queue = [start];
    const result = [];
    const visited = {};
    let currentVertex;
    visited[start] = true;
    while(queue.length){
      currentVertex = queue.shift();
      result.push(currentVertex);
      this.adjacencyList[currentVertex].forEach(neighbor => {
        if(!visited[neighbor]){
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      })
    }
    return result;
  }
}
let g = new Graph();

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")


g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B","D")
g.addEdge("C","E")
g.addEdge("D","E")
g.addEdge("D","F")
g.addEdge("E","F")
console.log(g.dfsr("A"));
console.table(g.dfsr("A"));
