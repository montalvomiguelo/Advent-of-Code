import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";
import { sumGroupPriorities, sumItemPriorities } from "./day_3.ts";

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

  // Part 2
  assertEquals(sumGroupPriorities(input), 70);
});
