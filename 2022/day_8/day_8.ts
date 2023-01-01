/**
 * [
 *   [ "3", "0", "3", "7", "3" ],
 *   [ "2", "5", "5", "1", "2" ],
 *   [ "6", "5", "3", "3", "2" ],
 *   [ "3", "3", "5", "4", "9" ],
 *   [ "3", "5", "3", "9", "0" ]
 * ]
 */
export function visibleTrees(input: string): number {
  const rows = input.trim().split("\n").map((row) => row.trim().split(""));
  const rowsCount = rows.length;
  const visibleTrees: number[] = [];

  for (let i = 1; i < rowsCount - 1; i++) {
    const row = rows[i];

    for (let j = 1; j < rowsCount - 1; j++) {
      const item = +row[j];

      const topItems = [];
      for (let k = i - 1; k >= 0; k--) {
        const siblingItem = +rows[k][j];
        topItems.push(siblingItem);
      }
      const visibleSiblingsTop = countVisibleSiblings(topItems, item);

      const rightItems = [];
      for (let k = j + 1; k < rowsCount; k++) {
        const siblingItem = +rows[i][k];
        rightItems.push(siblingItem);
      }
      const visibleSiblingsRight = countVisibleSiblings(rightItems, item);

      const bottomItems = [];
      for (let k = i + 1; k < rowsCount; k++) {
        const siblingItem = +rows[k][j];
        bottomItems.push(siblingItem);
      }
      const visibleSiblingsBottom = countVisibleSiblings(bottomItems, item);

      const leftItems = [];
      for (let k = j - 1; k >= 0; k--) {
        const siblingItem = +rows[i][k];
        leftItems.push(siblingItem);
      }
      const visibleSiblingsLeft = countVisibleSiblings(leftItems, item);

      const scenicScore = visibleSiblingsTop * visibleSiblingsRight *
        visibleSiblingsBottom * visibleSiblingsLeft;

      visibleTrees.push(scenicScore);
    }
  }

  return Math.max(...visibleTrees);
}

function countVisibleSiblings(siblingItems: number[], item: number): number {
  const firstSibling = siblingItems[0];
  let visibleSiblings = 0;

  if (firstSibling > item) {
    return visibleSiblings;
  }

  if (firstSibling === item) {
    return visibleSiblings = 1;
  }

  let i = 0;
  let sibling = siblingItems[i];
  let isVisible = true;

  while (sibling >= 0 && isVisible) {
    visibleSiblings += 1;

    if (sibling >= item) {
      isVisible = false;
    }

    i += 1;
    sibling = siblingItems[i];
  }

  return visibleSiblings;
}

//const input = await Deno.readTextFile("./input.txt");
//console.log(visibleTrees(input));
