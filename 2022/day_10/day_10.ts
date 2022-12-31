export function result(input: string): string {
  const rows = input.trim().split("\n").map((row) => row.trim());
  let x = 1;
  let cycle = 0;
  const targetCycle = 40;
  let draw = "";

  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    const instruction = row.split(" ")[0];
    const v = parseInt(row.split(" ")[1]);
    let count = 0;

    if (instruction === "addx") {
      while (count < 2) {
        if (cycle >= (x - 1) && cycle <= (x + 1)) {
          draw += "#";
        } else {
          draw += ".";
        }

        cycle += 1;
        count += 1;

        if (cycle === targetCycle) {
          cycle = 0;
          draw += "\n";
        }
      }

      x += v;
    } else {
      if (cycle >= (x - 1) && cycle <= (x + 1)) {
        draw += "#";
      } else {
        draw += ".";
      }

      cycle += 1;

      if (cycle === targetCycle) {
        cycle = 0;
        draw += "\n";
      }
    }
  }

  return draw;
}

const input = await Deno.readTextFile("./input.txt");
console.log(result(input));
