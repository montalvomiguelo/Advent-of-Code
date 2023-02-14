export class Node {
  name: string;
  children: Node[];

  constructor(name: string) {
    this.name = name;
    this.children = [];
  }

  addChild(name: string): Node {
    this.children.push(new Node(name));
    return this;
  }

  // O(v + e) time | O(v) space - where v is the number of vertices and e is the number of edges
  breadthFirstSearch(array: string[]) {
    const queue: Node[] = [this];

    while (queue.length) {
      const node = queue.shift();

      if (node) {
        array.push(node.name);
        for (let i = 0; i < node.children.length; i++) {
          queue.push(node.children[i]);
        }
      }
    }

    return array;
  }
}
