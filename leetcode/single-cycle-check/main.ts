export function hasSingleCycle(array: number[]): boolean {
  let count = 0;
  let currentIdx = 0;
  const startIdx = 0;

  while (count < array.length) {
    currentIdx = getIndex(currentIdx, array);

    if (currentIdx === startIdx && count < array.length - 1) {
      return false;
    }

    count += 1;
  }

  return currentIdx === startIdx;
}

function getIndex(currentIdx: number, array: number[]): number {
  const jumps = array[currentIdx];
  const newIdx = (currentIdx + jumps) % array.length;

  if (newIdx < 0) {
    return array.length + newIdx;
  }

  return newIdx;
}
