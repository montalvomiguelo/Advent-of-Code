import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";
import { Node } from "./main.ts";

Deno.test("Node", async (t) => {
  await t.step("depthFirstSearchRecursive", () => {
    const graph = new Node("A");
    graph.addChild("B").addChild("C").addChild("D");
    graph.children[0].addChild("E").addChild("F");
    graph.children[2].addChild("G").addChild("H");
    graph.children[0].children[1].addChild("I").addChild("J");
    graph.children[2].children[0].addChild("K");

    assertEquals(graph.depthFirstSearchRecursive([]), [
      "A",
      "B",
      "E",
      "F",
      "I",
      "J",
      "C",
      "D",
      "G",
      "K",
      "H",
    ]);
  });

  await t.step("depthFirstSearchIterative", () => {
    const graph = new Node("A");
    graph.addChild("B").addChild("C").addChild("D");
    graph.children[0].addChild("E").addChild("F");
    graph.children[2].addChild("G").addChild("H");
    graph.children[0].children[1].addChild("I").addChild("J");
    graph.children[2].children[0].addChild("K");

    assertEquals(graph.depthFirstSearchIterative([]), [
      "A",
      "B",
      "E",
      "F",
      "I",
      "J",
      "C",
      "D",
      "G",
      "K",
      "H",
    ]);
  });
});
