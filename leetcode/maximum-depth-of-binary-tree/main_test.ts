import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";
import { maxDepth, TreeNode } from "./main.ts";

Deno.test("Maximum Depth of Binary Tree", async (t) => {
  await t.step("Example 1", () => {
    const root = new TreeNode(3);
    root.left = new TreeNode(9);
    root.right = new TreeNode(20);
    root.right.left = new TreeNode(15);
    root.right.right = new TreeNode(7);
    assertEquals(maxDepth(root), 3);
  });

  await t.step("Example 2", () => {
    const root = new TreeNode(1);
    root.right = new TreeNode(21);
    assertEquals(maxDepth(root), 2);
  });
});
