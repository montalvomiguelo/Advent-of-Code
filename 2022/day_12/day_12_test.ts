import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";
import { result } from "./day_12.ts";

Deno.test("Day 12: Hill Climbing Algorithm", () => {
  const input = `
Sabqponm
abcryxxl
accszExk
acctuvwj
abdefghi`;

  // Part 1
  assertEquals(result(input), 31);
});
