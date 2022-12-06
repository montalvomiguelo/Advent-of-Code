import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";
import { sumItemPriorities } from "./day_3.ts";

Deno.test("Day 3: Rucksack Reorganization", () => {
  const input = `
    vJrwpWtwJgWrhcsFMMfFFhFp
    jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
    PmmdzqPrVvPwwTWBwg
    wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
    ttgJtRGJQctTZtZT
    CrZsJsPPZsGzwwsLwLmpwMDw
  `;

  // Part 1
  assertEquals(sumItemPriorities(input), 157);
});
