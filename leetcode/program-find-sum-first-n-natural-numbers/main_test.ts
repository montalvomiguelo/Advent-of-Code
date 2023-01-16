import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";
import { findSum } from "./main.ts";

Deno.test("Program to find sum of first n natural numbers", async (t) => {
  await t.step("Example 1", () => {
    assertEquals(findSum(3), 6);
  });

  await t.step("Example 2", () => {
    assertEquals(findSum(5), 15);
  });
});
