import {
  assertEquals,
  assertExists,
} from "https://deno.land/std@0.167.0/testing/asserts.ts";
import { BinarySearchTree, BST } from "./main.ts";

Deno.test("BST", async (t) => {
  await t.step("insert", () => {
    const root = new BST(10);
    root.left = new BST(5);
    root.left.left = new BST(2);
    root.left.left.left = new BST(1);
    root.left.right = new BST(5);
    root.right = new BST(15);
    root.right.left = new BST(13);
    root.right.left.right = new BST(14);
    root.right.right = new BST(22);

    root.insert(12);

    assertExists(root.right.left.left);
    assertEquals(root.right.left.left.value, 12);
  });

  await t.step("contains", () => {
    const root = new BST(10);
    root.left = new BST(5);
    root.left.left = new BST(2);
    root.left.left.left = new BST(1);
    root.left.right = new BST(5);
    root.right = new BST(15);
    root.right.left = new BST(13);
    root.right.left.right = new BST(14);
    root.right.right = new BST(22);

    assertEquals(root.contains(100), false);
    assertEquals(root.contains(13), true);
  });

  await t.step("remove", () => {
    const root = new BST(10);
    root.left = new BST(5);
    root.left.left = new BST(2);
    root.left.left.left = new BST(1);
    root.left.right = new BST(7);
    root.left.right.left = new BST(6);
    root.left.right.right = new BST(8);
    root.left.right.right.right = new BST(8);
    root.right = new BST(15);
    root.right.left = new BST(13);
    root.right.left.left = new BST(12);
    root.right.left.left.left = new BST(11);
    root.right.left.right = new BST(14);
    root.right.right = new BST(20);
    root.right.right.right = new BST(25);
    root.right.right.right.left = new BST(22);
    root.right.right.right.left.left = new BST(21);
    root.right.right.right.right = new BST(30);
    root.right.right.right.right.left = new BST(29);
    root.right.right.right.right.right = new BST(31);
    root.right.right.right.right.right.right = new BST(32);

    root.remove(1);
    assertEquals(root.contains(1), false);
    assertEquals(root.left.left.left, null);

    root.remove(32);
    assertEquals(root.contains(32), false);
    assertEquals(root.right.right.right.right.right.right, null);

    root.remove(20);
    assertEquals(root.contains(20), false);
    assertEquals(root.right.right.value, 25);

    root.remove(12);
    assertEquals(root.contains(12), false);
    assertEquals(root.right.left.left.value, 11);

    root.remove(25);
    assertEquals(root.contains(25), false);
    assertEquals(root.right.right.value, 29);
    assertEquals(root.right.right.right.left, null);

    root.remove(5);
    assertEquals(root.contains(5), false);
    assertEquals(root.left.value, 6);
    assertEquals(root.left.right.left, null);

    root.remove(29);
    assertEquals(root.contains(29), false);
    assertEquals(root.right.right.value, 30);

    root.remove(6);
    assertEquals(root.contains(6), false);
    assertEquals(root.left.value, 7);

    root.remove(10);
    assertEquals(root.contains(10), false);
    assertEquals(root.value, 11);
    assertEquals(root.right.left.left, null);

    root.remove(7);
    assertEquals(root.contains(7), false);
    assertEquals(root.left.value, 8);

    root.remove(8);
    assertEquals(root.left.value, 8);
    assertEquals(root.left.right, null);

    root.remove(8);
    assertEquals(root.left.value, 2);
    assertEquals(root.left.right, null);

    root.remove(8);
    assertEquals(root.contains(8), false);
    assertEquals(root.left.value, 2);

    root.remove(2);
    assertEquals(root.contains(2), false);
    assertEquals(root.left, null);

    root.remove(11);
    assertEquals(root.contains(11), false);
    assertEquals(root.value, 15);
    assertEquals(root.left.value, 13);
    assertEquals(root.right.value, 30);

    root.remove(13);
    assertEquals(root.contains(13), false);
    assertEquals(root.left.value, 14);
    assertEquals(root.left.right, null);
  });
});

Deno.test("BinarySearchTree", async (t) => {
  await t.step("insert", () => {
    const root = new BinarySearchTree(10);
    root.left = new BinarySearchTree(5);
    root.left.left = new BinarySearchTree(2);
    root.right = new BinarySearchTree(20);

    root.insert(1);
    assertExists(root.left.left.left);
    assertEquals(root.left.left.left.value, 1);
  });

  await t.step("contains", () => {
    const root = new BinarySearchTree(10);
    root.left = new BinarySearchTree(5);
    root.left.left = new BinarySearchTree(2);
    root.right = new BinarySearchTree(20);

    root.insert(1);
    assertEquals(root.contains(20), true);
    assertEquals(root.contains(21), false);
  });
});
