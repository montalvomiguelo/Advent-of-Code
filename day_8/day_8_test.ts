import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";
import { visibleTrees } from "./day_8.ts";

Deno.test("Day 8: Treetop Tree House", () => {
  const input = `
    30373
    25512
    65332
    33549
    35390
  `;

  // Part 2
  assertEquals(visibleTrees(input), 8);
});
