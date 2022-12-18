export function result(input: string): number {
  const rows = input.trim().split("\n").map((row) => row.trim());
  let x = 1;
  let cycle = 0;
  let targetCycle = 20;
  let signalStrength = 0;

  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    const instruction = row.split(" ")[0];
    const v = parseInt(row.split(" ")[1]);
    let count = 0;

    if (instruction === "addx") {
      while (count < 2) {
        cycle += 1;
        count += 1;

        if (cycle === targetCycle) {
          signalStrength += cycle * x;
          targetCycle += 40;
        }
      }

      x += v;
    } else {
      cycle += 1;

      if (cycle === targetCycle) {
        signalStrength += cycle * x;
        targetCycle += 40;
      }
    }
  }

  return signalStrength;
}

const input = await Deno.readTextFile("./input.txt");
console.log(result(input));
