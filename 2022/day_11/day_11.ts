export function result(input: string): number {
  const data = input.trim().split("\n\n").map((item) => item.split("\n"));
  const worryLevels: Record<string, number[]> = {};
  const inspectionsCount: Record<string, number> = {};

  for (let i = 0; i < data.length; i++) {
    const rows = data[i];
    const match = rows[1].match(/\d.*/) as RegExpMatchArray;
    const items = match[0].split(",").map((item) => parseInt(item));

    worryLevels[i] = items;
  }

  const divisor = data.map((rows) => parseInt(rows[3].split(" ")[5])).reduce(
    (accumulator, number) => accumulator * number,
    1,
  );

  for (let i = 0; i < 10000; i++) {
    for (let j = 0; j < data.length; j++) {
      const rows = data[j];
      const operationRow = rows[2].trim();
      const operator = operationRow.split(" ")[4];
      const operationNumber = operationRow.split(" ")[5];
      const testNumber = parseInt(rows[3].split(" ")[5]);
      inspectionsCount[j] = inspectionsCount[j]
        ? inspectionsCount[j] + worryLevels[j].length
        : worryLevels[j].length;

      while (worryLevels[j].length) {
        const item = worryLevels[j][0];

        const operation = operator === "*"
          ? operationNumber === "old"
            ? item * item
            : item * parseInt(operationNumber)
          : operationNumber === "old"
          ? item + item
          : item + parseInt(operationNumber);

        const result = operation / 1;
        const test = result % testNumber === 0;

        const nextMonkeyRow = test ? rows[4] : rows[5];
        const nextMonkeyNumber = nextMonkeyRow.split(" ")[9];

        worryLevels[j].splice(0, 1);
        worryLevels[nextMonkeyNumber].push(result % divisor);
      }
    }
  }

  const inspections = Object.values(inspectionsCount).sort((a, b) => b - a)
    .slice(0, 2);

  return inspections[0] * inspections[1];
}

const input = await Deno.readTextFile("./input.txt");
console.log(result(input));
