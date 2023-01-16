// O(n) time | O(n) space - where n is the number of stairs
export function climbStairs1(n: number) {
  const dp = [1, 1];

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}

// O(n) time | O(1) space - where n is the number of stairs
export function climbStairs2(n: number) {
  let a = 1
  let b = 1
  let c = 1

  for (let i = 2; i <= n; i++) {
    a = b
    b = c
    c = a + b
  }

  return c
}
