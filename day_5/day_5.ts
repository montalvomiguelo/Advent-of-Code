export function message(input: string): string {
  const inputArray = input.split("\n\n");
  const rows = inputArray[0].split("\n").filter(Boolean);
  const lastRow = rows[rows.length - 1];
  const stacks: Record<string, string[]> = {};
  const procedures = inputArray[1].trim().split("\n");

  const columnIndexes: number[] = [];

  for (let i = 0; i < lastRow.length; i++) {
    if (lastRow[i]?.match(/\d/)) {
      columnIndexes.push(i);
    }
  }

  for (let i = 0; i < rows.length - 1; i++) {
    const row = rows[i];
    columnIndexes.forEach((index) => {
      const value = row[index];
      const key = index.toString();
      if (!stacks[key]) {
        stacks[key] = [];
      }
      if (value !== " ") {
        stacks[key].unshift(value);
      }
    });
  }

  procedures.forEach((procedure) => {
    const procedureFragments = procedure.split(" ");
    const proceduresCount = +procedureFragments[1];
    const from = +procedureFragments[3];
    const to = +procedureFragments[5];
    const stackKeys = Object.keys(stacks);
    const fromKey = stackKeys[from - 1];
    const toKey = stackKeys[to - 1];

    const cratesToMove = stacks[fromKey].splice(
      stacks[fromKey].length - proceduresCount,
      proceduresCount,
    );

    stacks[toKey] = stacks[toKey].concat(cratesToMove);
  });

  return Object.values(stacks).reduce(
    (result, stack) => result + stack[stack.length - 1],
    "",
  );
}

const input = await Deno.readTextFile("./input.txt");
console.log(message(input));
