/**
 * S
 * 0,0 | 0,0
 *
 * R 4
 * 1,0 | 0,0
 * 2,0 | 1,0
 * 3,0 | 2,0
 * 4,0 | 3,0
 *
 * U 4
 * 4,1 | 3,0
 * 4,2 | 4,1
 * 4,3 | 4,2
 * 4,4 | 4,3
 *
 * L 3
 * 3,4 | 4,3
 * 2,4 | 3,4
 * 1,4 | 2,4
 *
 * D 1
 * 1,3 | 2,4
 *
 * R 4
 * 2,3 | 2,4
 * 3,3 | 2,4
 * 4,3 | 3,3
 * 5,3 | 4,3
 *
 * D 1
 * 5,2 | 4,3
 *
 * L 5
 * 4,2 | 4,3
 * 3,2 | 4,3
 * 2,2 | 3,2
 * 1,2 | 2,2
 * 0,2 | 1,2
 *
 * R 2
 * 1,2 | 1,2
 * 2,2 | 1,2
 */
export function result(input: string): number {
  const rows = input.trim().split("\n").map((row) => row.trim());
  const headMotions: string[] = ["0,0"];
  const tailMotions: string[] = ["0,0"];
  let xIndex = 0;
  let yIndex = 0;

  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    const motion = row.split(" ");
    const direction = motion[0];
    const isAdding = direction === "R" || direction === "U";
    const steps = +motion[1];
    let count = 0;

    while (count < steps) {
      const headLastMotion = headMotions[headMotions.length - 1];
      const tailLastMotion = tailMotions[tailMotions.length - 1];

      if (direction === "L" || direction === "R") {
        if (isAdding) {
          xIndex += 1;
        } else {
          xIndex -= 1;
        }
      } else {
        if (isAdding) {
          yIndex += 1;
        } else {
          yIndex -= 1;
        }
      }

      const diffXAxis = Math.abs(
        +tailLastMotion.split(",")[0] - xIndex,
      );

      const diffYAxis = Math.abs(
        +tailLastMotion.split(",")[1] - yIndex,
      );

      headMotions.push(`${xIndex},${yIndex}`);

      if (diffXAxis > 1 || diffYAxis > 1) {
        tailMotions.push(headLastMotion);
      }

      count += 1;
    }
  }

  return new Set(tailMotions).size;
}
