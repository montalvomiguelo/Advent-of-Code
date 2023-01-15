export class TreeNode {
  value: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

/**
 * O(n) time | O(h) space
 * where n is the number of nodes in the Binary Tree and h is the height of the Binary Tree
 */
export function maxDepth(root: TreeNode): number {
  return dfs(root);
}

export function dfs(tree: TreeNode | null): number {
  if (!tree) {
    return 0;
  }

  const leftHeight = dfs(tree.left);
  const rightHeight = dfs(tree.right);

  if (leftHeight > rightHeight) {
    return leftHeight + 1;
  }

  return rightHeight + 1;
}
