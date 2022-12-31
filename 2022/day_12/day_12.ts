export function result(input: string): number {
  const data = input.trim().split("\n").map((row) => row.trim().split(""));
  let steps = 0;
  let current: number[] = [];
  let currentValue = "";
  const visited: string[] = [];

  for (let i = 0; i < data.length; i++) {
    const columns = data[i];
    const index = columns.indexOf("S");
    if (index !== -1) {
      current = [i, index];
      break;
    }
  }

  const top = neighbors(current, data, "top");

  return 31;
}

function neighbors(
  current: number[],
  data: string[][],
  direction: string,
): string[] {
  const letters = "abcdefghijklmnopqrstuvwxyz".split("");
  let currentValue = data[current[0]][current[1]];
  const neighbors = [];
  let next;
  let nextValue;
  let nextRow;

  if (direction === "top") {
    next = [current[0], current[1] - 1];
    nextRow = data[next[0]];

    if (nextRow) {
      nextValue = data[next[0]][next[1]];

      if (
        letters.indexOf(nextValue) === letters.indexOf(currentValue) + 1 ||
        letters.indexOf(nextValue) === letters.indexOf(currentValue)
      ) {
        neighbors.push(nextValue);
      }
    }
  }

  return ["a", "b"];
}

//const input = await Deno.readTextFile("./input.txt");
//console.log(result(input));
