/**
 * S
 * 0,0 | 0,0 | 0,0 | 0,0 | 0,0, | 0,0 | 0,0 | 0,0| 0,0 | 0,0
 *
 * R 4
 * 1,0 | 0,0 | 0,0 | 0,0 | 0,0, | 0,0 | 0,0 | 0,0| 0,0 | 0,0
 * 2,0 | 1,0 | 0,0 | 0,0 | 0,0, | 0,0 | 0,0 | 0,0| 0,0 | 0,0
 * 3,0 | 2,0 | 1,0 | 0,0 | 0,0, | 0,0 | 0,0 | 0,0| 0,0 | 0,0
 * 4,0 | 3,0 | 2,0 | 1,0 | 0,0, | 0,0 | 0,0 | 0,0| 0,0 | 0,0
 *
 * U 4
 * 4,1 | 3,0 | 2,0 | 1,0 | 0,0, | 0,0 | 0,0 | 0,0| 0,0 | 0,0
 * 4,2 | 4,1 | 3,1 | 2,1 | 1,1, | 0,0 | 0,0 | 0,0| 0,0 | 0,0
 * 4,3 | 4,2 | 3,1 | 2,1 | 1,1, | 0,0 | 0,0 | 0,0| 0,0 | 0,0
 * 4,4 | 4,3 | 4,2 | 3,2 | 2,2, | 1,1 | 0,0 | 0,0| 0,0 | 0,0
 *
 * L 3
 * 3,4 | 4,3 | 4,2 | 3,2 | 2,2, | 1,1 | 0,0 | 0,0| 0,0 | 0,0
 * 2,4 | 3,4 | 3,3 | 3,2 | 2,2, | 1,1 | 0,0 | 0,0| 0,0 | 0,0
 * 1,4 | 2,4 | 3,3 | 3,2 | 2,2, | 1,1 | 0,0 | 0,0| 0,0 | 0,0
 *
 * D 1
 * 1,3 | 2,4 | 3,3 | 3,2 | 2,2, | 1,1 | 0,0 | 0,0| 0,0 | 0,0
 *
 * R 4
 * 2,3 | 2,4 | 3,3 | 3,2 | 2,2, | 1,1 | 0,0 | 0,0| 0,0 | 0,0
 * 3,3 | 2,4 | 3,3 | 3,2 | 2,2, | 1,1 | 0,0 | 0,0| 0,0 | 0,0
 * 4,3 | 3,3 | 3,3 | 3,2 | 2,2, | 1,1 | 0,0 | 0,0| 0,0 | 0,0
 * 5,3 | 4,3 | 3,3 | 3,2 | 2,2, | 1,1 | 0,0 | 0,0| 0,0 | 0,0
 *
 * D 1
 * 5,2 | 4,3 | 3,3 | 3,2 | 2,2, | 1,1 | 0,0 | 0,0| 0,0 | 0,0
 *
 * L 5
 * 4,2 | 4,3 | 3,3 | 3,2 | 2,2, | 1,1 | 0,0 | 0,0| 0,0 | 0,0
 * 3,2 | 4,3 | 3,3 | 3,2 | 2,2, | 1,1 | 0,0 | 0,0| 0,0 | 0,0
 * 2,2 | 3,2 | 3,3 | 3,2 | 2,2, | 1,1 | 0,0 | 0,0| 0,0 | 0,0
 * 1,2 | 2,2 | 3,3 | 3,2 | 2,2, | 1,1 | 0,0 | 0,0| 0,0 | 0,0
 * 0,2 | 1,2 | 2,2 | 3,2 | 2,2, | 1,1 | 0,0 | 0,0| 0,0 | 0,0
 *
 * R 2
 * 1,2 | 1,2 | 2,2 | 3,2 | 2,2, | 1,1 | 0,0 | 0,0| 0,0 | 0,0
 * 2,2 | 1,2 | 2,2 | 3,2 | 2,2, | 1,1 | 0,0 | 0,0| 0,0 | 0,0
 */
export function result(input: string): number {
  const rows = input.trim().split("\n").map((row) => row.trim());
  const knotMotions: Record<string, string[]> = {
    "headMotions": ["0,0"],
    "knot1Motions": ["0,0"],
    "knot2Motions": ["0,0"],
    "knot3Motions": ["0,0"],
    "knot4Motions": ["0,0"],
    "knot5Motions": ["0,0"],
    "knot6Motions": ["0,0"],
    "knot7Motions": ["0,0"],
    "knot8Motions": ["0,0"],
    "knot9Motions": ["0,0"],
  };
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

      knotMotions["headMotions"].push(`${xIndex},${yIndex}`);

      const keys = Object.keys(knotMotions);

      for (let j = 1; j < keys.length; j++) {
        const key = keys[j];
        const values = knotMotions[key];
        const knotLastMotion = values[values.length - 1];
        let tempX = +knotLastMotion.split(",")[0];
        let tempY = +knotLastMotion.split(",")[1];
        const prevKey = keys[j - 1];
        const prevValues = knotMotions[prevKey];
        const prevKnotLastMotion = prevValues[prevValues.length - 1];
        const prevTempX = +prevKnotLastMotion.split(",")[0];
        const prevTempY = +prevKnotLastMotion.split(",")[1];
        const diffXAxis = prevTempX - tempX;
        const diffYAxis = prevTempY - tempY;
        const maxDiff = Math.max(Math.abs(diffXAxis), Math.abs(diffYAxis));

        if (maxDiff === 2) {
          if (diffXAxis !== 0) {
            if (diffXAxis < 0) {
              tempX -= 1;
            } else {
              tempX += 1;
            }
          }

          if (diffYAxis !== 0) {
            if (diffYAxis < 0) {
              tempY -= 1;
            } else {
              tempY += 1;
            }
          }
        }

        knotMotions[key].push(`${tempX},${tempY}`);
      }

      count += 1;
    }
  }

  return new Set(knotMotions["knot9Motions"]).size;
}

const input = await Deno.readTextFile("./input.txt");
console.log(result(input));
