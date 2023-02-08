export class BST {
  value: number;
  left: BST | null;
  right: BST | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  /**
   * Average O(log n) time | O(1) space
   * Worst O(n) time | O(1) space
   * Where n is the number of nodes in the BST
   */
  insert(value: number, self: BST = this): BST {
    const newTree = new BST(value);
    let tree: BST | null = self;
    let prevTree: BST | null = null;

    while (tree) {
      prevTree = tree;

      if (value < tree.value) {
        tree = tree.left;

        if (!tree) {
          prevTree.left = newTree;
        }
      } else {
        tree = tree.right;

        if (!tree) {
          prevTree.right = newTree;
        }
      }
    }

    return this;
  }

  /**
   * Average O(log n) time | O(1) space
   * Worst O(n) time | O(1) space
   * Where n is the number of nodes in the BST
   */
  contains(value: number, self: BST = this): boolean {
    let tree: BST | null = self;

    while (tree) {
      if (value === tree.value) {
        return true;
      }

      if (value < tree.value) {
        tree = tree.left;
      } else {
        tree = tree.right;
      }
    }

    return false;
  }

  /**
   * Average O(log n) time | O(1) space
   * Worst O(n) time | O(1) space
   * Where n is the number of nodes in the BST
   */
  remove(value: number, self: BST = this): BST {
    let tree: BST | null = self;
    let prevTree: BST | null = self;

    while (tree) {
      if (value === tree.value) {
        if (!tree.left && !tree.right) {
          if (tree.value < prevTree.value) {
            prevTree.left = null;
          } else {
            prevTree.right = null;
          }
        }
        if (!tree.left && tree.right) {
          if (prevTree === tree) {
            tree.value = tree.right.value;
            tree.left = tree.right.left;
            tree.right = tree.right.right;
          } else {
            if (tree.value < prevTree.value) {
              prevTree.left = tree.right;
            } else {
              prevTree.right = tree.right;
            }
          }
        } else if (!tree.right && tree.left) {
          if (prevTree === tree) {
            tree.value = tree.left.value;
            tree.right = tree.left.right;
            tree.left = tree.left.left;
          } else {
            if (tree.value < prevTree.value) {
              prevTree.left = tree.left;
            } else {
              prevTree.right = tree.left;
            }
          }
        } else {
          const [successor, prevSuccessor] = this.inOrderSuccessor(tree);

          if (successor) {
            if (tree.value < prevTree.value) {
              if (prevTree.left) {
                prevTree.left.value = successor.value;
              }
            } else if (prevTree === tree) {
              tree.value = successor.value;
            } else {
              if (prevTree.right) {
                prevTree.right.value = successor.value;
              }
            }

            if (prevSuccessor) {
              if (successor.value < prevSuccessor.value) {
                prevSuccessor.left = null;
              } else {
                prevSuccessor.right = successor.right;
              }
            }
          }
        }
        break;
      }

      if (value < tree.value) {
        prevTree = tree;
        tree = tree.left;
      } else {
        prevTree = tree;
        tree = tree.right;
      }
    }

    return this;
  }

  /**
   * Average O(log n) time | O(1) space
   * Worst O(n) time | O(1) space
   * Where n is the number of nodes in the BST
   */
  inOrderSuccessor(tree: BST): Array<BST | null> {
    let successor: BST | null = tree.right;
    let prevSuccessor = tree;

    while (successor) {
      if (successor.left) {
        prevSuccessor = successor;
        successor = successor.left;

        if (!successor.left && !successor.right) {
          break;
        }
      } else {
        break;
      }
    }

    return [successor, prevSuccessor];
  }
}

export class BinarySearchTree {
  value: number;
  left: BinarySearchTree | null;
  right: BinarySearchTree | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  /**
   * Average O(log n) time | O(log n) space
   * Worst O(n) time | O(n) space
   * Where n is the number of nodes in the BinarySearchTree
   */
  insert(value: number): BinarySearchTree {
    if (value < this.value) {
      if (!this.left) {
        this.left = new BinarySearchTree(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (!this.right) {
        this.right = new BinarySearchTree(value);
      } else {
        this.right.insert(value);
      }
    }

    return this;
  }

  /**
   * Average O(log n) time | O(log n) space
   * Worst O(n) time | O(n) space
   * Where n is the number of nodes in the BinarySearchTree
   */
  contains(value: number): boolean {
    if (value < this.value) {
      if (!this.left) {
        return false;
      }

      return this.left.contains(value);
    } else if (value > this.value) {
      if (!this.right) {
        return false;
      }

      return this.right.contains(value);
    }

    return true;
  }

  /**
   * Average O(log n) time | O(log n) space
   * Worst O(n) time | O(n) space
   * Where n is the number of nodes in the BinarySearchTree
   */
  remove(value: number, prev: BinarySearchTree = this): BinarySearchTree {
    if (value < this.value) {
      if (this.left) {
        this.left.remove(value, this);
      }
    } else if (value > this.value) {
      if (this.right) {
        this.right.remove(value, this);
      }
    } else {
      if (!this.left && !this.right) {
        if (value < prev.value) {
          prev.left = null;
        } else {
          prev.right = null;
        }
      } else if (this.left && !this.right) {
        if (value < prev.value) {
          prev.left = this.left;
        } else {
          prev.right = this.left;
        }
      } else if (this.right && !this.left) {
        if (value < prev.value) {
          prev.left = this.right;
        } else {
          prev.right = this.right;
        }
      }
    }

    return this;
  }
}
