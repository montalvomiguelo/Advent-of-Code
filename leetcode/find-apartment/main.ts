// O(n^2) time | O(1) space
export function findApartment(
  blocks: Record<string, boolean>[],
  requirements: string[],
): number {
  let solutionDistance = Infinity;
  let solutionIndex = -1;

  for (let i = 0; i < blocks.length; i++) {
    let j = i - 1;
    let k = i + 1;
    let distance = 0;

    const block = blocks[i];
    const reqDistances: Record<string, number> = {};
    const missingReqs: string[] = [];

    requirements.forEach((req) => {
      if (block[req]) {
        reqDistances[req] = distance;
      } else {
        missingReqs.push(req);
        reqDistances[req] = Infinity;
      }
    });

    while (j > 0) {
      const block = blocks[j];
      distance += 1;

      missingReqs.forEach((req) => {
        if (block[req] && distance < reqDistances[req]) {
          reqDistances[req] = distance;
        }
      });

      j -= 1;
    }

    distance = 0;

    while (k < blocks.length) {
      const block = blocks[k];
      distance += 1;

      missingReqs.forEach((req) => {
        if (block[req] && distance < reqDistances[req]) {
          reqDistances[req] = distance;
        }
      });

      k += 1;
    }

    const maxDistance = Math.max(...Object.values(reqDistances));

    if (maxDistance < solutionDistance) {
      solutionDistance = maxDistance;
      solutionIndex = i;
    }
  }

  return solutionIndex;
}
