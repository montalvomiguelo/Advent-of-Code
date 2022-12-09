import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";
import { message } from "./day_5.ts";

Deno.test("Day 5: Supply Stacks", () => {
  const input = `
    [D]    
[N] [C]    
[Z] [M] [P]
 1   2   3 

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2
  `;

  // Part 1
  // assertEquals(message(input), "CMZ");

  // Part 2
  assertEquals(message(input), "MCD");
});
