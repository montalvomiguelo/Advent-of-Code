import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";
import { numberOfAssignmentPairs } from "./day_4.ts";

Deno.test("Day 4: Camp Cleanup", () => {
  const input = `
    2-4,6-8
    2-3,4-5
    5-7,7-9
    2-8,3-7
    6-6,4-6
    2-6,4-8
  `;

  // Part 1
  assertEquals(numberOfAssignmentPairs(input), 2);
});
