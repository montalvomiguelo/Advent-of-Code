import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";
import { startOfPacket } from "./day_6.ts";

Deno.test("Day 6: Tuning Trouble", () => {
  const input = `
    bvwbjplbgvbhsrlpgdmjqwftvncz
  `;

  // Part 1
  assertEquals(startOfPacket(input), 5);
});
