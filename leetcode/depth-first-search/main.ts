export class Node {
  name: string;
  children: Node[];

  constructor(name: string) {
    this.name = name;
    this.children = [];
  }

  addChild(name: string) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearchRecursive(array: string[]) {
    array.push(this.name);

    this.children.forEach((children) => {
      children.depthFirstSearchRecursive(array);
    });

    return array;
  }

  depthFirstSearchIterative(array: string[]) {
    const stack: Node[] = [this];

    while (stack.length) {
      const node = stack.pop();

      if (node) {
        array.push(node.name);

        for (let i = node.children.length - 1; i >= 0; i--) {
          stack.push(node.children[i]);
        }
      }
    }

    return array;
  }
}
