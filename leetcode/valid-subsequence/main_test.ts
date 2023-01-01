import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";
import { isValidSubsequence1 } from "./main.ts";

Deno.test("Valid Subsequence", () => {
  assertEquals(
    isValidSubsequence1([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]),
    true,
  );
  assertEquals(isValidSubsequence1([1, 1, 1, 1, 1], [1, 1, 1]), true);
  assertEquals(
    isValidSubsequence1([5, 1, 22, 25, 6, -1, 8, 10], [
      5,
      1,
      22,
      22,
      6,
      -1,
      8,
      10,
    ]),
    false,
  );
});
