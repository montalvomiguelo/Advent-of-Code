// O(n) time | O(1) space
export function isValidSubsequence1(
  array: number[],
  subsequence: number[],
): boolean {
  let lastIndex = -1;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === subsequence[lastIndex + 1]) {
      lastIndex += 1;
    }
  }

  return lastIndex === subsequence.length - 1;
}
