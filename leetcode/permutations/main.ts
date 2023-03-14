// Upper bound O(n^2*n!) time | O(n*n!) space
// Roughly O(n*n!) time | O(n*n!) space
export function getPermutations(array: number[]): number[][] {
  const permutations: number[][] = [];
  permutationsHelper(array, [], permutations);
  return permutations;
}

function permutationsHelper(
  array: number[],
  currentPermutation: number[],
  permutations: number[][],
) {
  if (!array.length && currentPermutation.length) {
    permutations.push(currentPermutation);
  } else {
    for (let i = 0; i < array.length; i++) { // O(n)
      const newArray = array.slice(0, i).concat(array.slice(i + 1)); // O(n)
      const newPermutation = currentPermutation.concat([array[i]]); // O(n)
      permutationsHelper(newArray, newPermutation, permutations);
    }
  }
}
