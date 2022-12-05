import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";
import { totalScore } from "./day_2.ts";

Deno.test("Day 2: Rock Paper Scissors", () => {
  const input = `
    A Y
    B X
    C Z
  `;

  // Part 1
  assertEquals(totalScore(input), 15);
});
