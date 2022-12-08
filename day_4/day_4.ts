export function numberOfAssignmentPairs(input: string): number {
  const pairs = input.trim().split("\n").map((pair) => pair.trim());
  const resultPairs = filterAssignmentPairs(pairs);

  return resultPairs.length;
}

function filterAssignmentPairs(pairs: string[]): string[] {
  return pairs.filter(filterPair);
}

function filterPair(pair: string): boolean {
  const ranges = pair.split(",");
  const range1 = ranges[0];
  const range2 = ranges[1];

  const range1Min = parseInt(range1.split("-")[0]);
  const range1Max = parseInt(range1.split("-")[1]);

  const range2Min = parseInt(range2.split("-")[0]);
  const range2Max = parseInt(range2.split("-")[1]);

  if (range1Min >= range2Min && range1Max <= range2Max) {
    return true;
  }

  if (range2Min >= range1Min && range2Max <= range1Max) {
    return true;
  }

  return false;
}

const input = await Deno.readTextFile("./input.txt");
console.log(numberOfAssignmentPairs(input));
