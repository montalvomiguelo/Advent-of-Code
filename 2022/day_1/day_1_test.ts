import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";
import { elfWithMostCalories, threeElvesWithMostCalories } from "./day_1.ts";

Deno.test("Day 1: Calorie Counting", () => {
  const elves = `
    1000
    2000
    3000

    4000

    5000
    6000

    7000
    8000
    9000

    10000
  `;

  // Part 1
  assertEquals(elfWithMostCalories(elves), 24000);

  // Part 2
  assertEquals(threeElvesWithMostCalories(elves), 45000);
});
