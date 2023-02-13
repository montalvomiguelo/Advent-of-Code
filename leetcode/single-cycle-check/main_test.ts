import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";
import { hasSingleCycle } from "./main.ts";

Deno.test("hasSingleCycle", async (t) => {
  await t.step("Example 1", () => {
    assertEquals(hasSingleCycle([10, 11, -6, -23, -2, 3, 88, 908, -26]), true);
  });

  await t.step("Example 2", () => {
    assertEquals(hasSingleCycle([1, 2, 3, 4, -2, 3, 7, 8, -26]), true);
  });

  await t.step("Example 2", () => {
    assertEquals(hasSingleCycle([2, 2, -1]), true);
  });
});
