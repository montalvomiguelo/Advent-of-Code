// O(n) time | O(n) space - where n is the number of elements
export function findSum(n: number): number {
  const dp: number[] = [];
  dp[0] = 0;

  for (let i = 1; i <= n; i++) {
    dp[i] = dp[i - 1] + i;
  }

  return dp[n];
}
