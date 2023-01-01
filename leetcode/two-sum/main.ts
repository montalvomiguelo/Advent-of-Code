// O(n^2) time | O(1) space
export function twoSum1(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    const num1 = nums[i];

    for (let j = 0; j < nums.length; j++) {
      const num2 = nums[j];

      if (num2 === num1) {
        continue;
      }

      if (num1 + num2 === target) {
        return [num1, num2];
      }
    }
  }

  return [];
}

// O(n) time | O(n) space
export function twoSum2(nums: number[], target: number): number[] {
  const _nums: Record<string, boolean> = {};

  for (let i = 0; i < nums.length; i++) {
    const num1 = nums[i];
    const num2 = target - num1;

    if (_nums[num2]) {
      return [num1, num2];
    } else {
      _nums[num1] = true;
    }
  }

  return [];
}

// O(n log n) time | O(1) space
export function twoSum3(nums: number[], target: number): number[] {
  nums.sort((a, b) => a - b);

  let leftIndex = 0;
  let rightIndex = nums.length - 1;

  while (leftIndex < rightIndex) {
    const num1 = nums[leftIndex];
    const num2 = nums[rightIndex];

    if (num1 + num2 === target) {
      return [num1, num2];
    } else if (num2 > target - num1) {
      rightIndex--;
    } else {
      leftIndex++;
    }
  }

  return [];
}
