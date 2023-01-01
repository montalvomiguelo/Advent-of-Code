import { assertArrayIncludes } from "https://deno.land/std@0.167.0/testing/asserts.ts";
import { twoSum1, twoSum2, twoSum3 } from "./main.ts";

Deno.test("Two Sum", () => {
  assertArrayIncludes(twoSum1([3, 5, -4, 8, 11, 1, -1, 6], 10), [-1, 11]);
  assertArrayIncludes(twoSum1([2, 7, 11, 15], 9), [2, 7]);
  assertArrayIncludes(twoSum1([-7, -5, -3, -1, 0, 1, 3, 5, 7], -5), [-5, 0]);

  assertArrayIncludes(twoSum2([3, 5, -4, 8, 11, 1, -1, 6], 10), [-1, 11]);
  assertArrayIncludes(twoSum2([2, 7, 11, 15], 9), [2, 7]);
  assertArrayIncludes(twoSum2([-7, -5, -3, -1, 0, 1, 3, 5, 7], -5), [-5, 0]);

  assertArrayIncludes(twoSum3([3, 5, -4, 8, 11, 1, -1, 6], 10), [-1, 11]);
  assertArrayIncludes(twoSum3([2, 7, 11, 15], 9), [2, 7]);
  assertArrayIncludes(twoSum3([-7, -5, -3, -1, 0, 1, 3, 5, 7], -5), [-5, 0]);
});
