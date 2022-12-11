import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";
import { result } from "./day_9.ts";

Deno.test("Day 9: Rope Bridge", () => {
  const input = `
    R 4
    U 4
    L 3
    D 1
    R 4
    D 1
    L 5
    R 2
  `;

  // Part 1
  assertEquals(result(input), 13);
});

const input = await Deno.readTextFile("./input.txt");
console.log(result(input));
