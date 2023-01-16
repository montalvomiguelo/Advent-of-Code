import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";
import { climbStairs1, climbStairs2 } from "./main.ts";

Deno.test("Climbing Stairs", async (t) => {
  await t.step("Case 1", () => {
    assertEquals(climbStairs1(2), 2);
  });

  await t.step("Case 2", () => {
    assertEquals(climbStairs1(3), 3);
  });

  await t.step("Case 1", () => {
    assertEquals(climbStairs2(2), 2);
  });

  await t.step("Case 2", () => {
    assertEquals(climbStairs2(3), 3);
  });
});
