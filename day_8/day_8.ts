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
  const edgesCount = (rowsCount - 1) * 4;
  let visibleItemsCount = 0;

  for (let i = 1; i < rowsCount - 1; i++) {
    const row = rows[i];

    for (let j = 1; j < rowsCount - 1; j++) {
      const item = +row[j];

      const topItems = [];
      for (let k = 0; k < i; k++) {
        const siblingItem = +rows[k][j];
        topItems.push(siblingItem);
      }
      const maxTopSibling = Math.max(...topItems);
      const isTopVisible = maxTopSibling < item;

      const rightItems = [];
      for (let k = rowsCount - 1; k > j; k--) {
        const siblingItem = +rows[i][k];
        rightItems.push(siblingItem);
      }
      const maxRightSibling = Math.max(...rightItems);
      const isRightVisible = maxRightSibling < item;

      const bottomItems = [];
      for (let k = rowsCount - 1; k > i; k--) {
        const siblingItem = +rows[k][j];
        bottomItems.push(siblingItem);
      }
      const maxBottomSibling = Math.max(...bottomItems);
      const isBottomVisible = maxBottomSibling < item;

      const leftItems = [];
      for (let k = 0; k < j; k++) {
        const siblingItem = +rows[i][k];
        leftItems.push(siblingItem);
      }
      const maxLeftSibling = Math.max(...leftItems);
      const isLeftVisible = maxLeftSibling < item;

      if (isTopVisible || isRightVisible || isBottomVisible || isLeftVisible) {
        visibleItemsCount += 1;
      }
    }
  }

  return edgesCount + visibleItemsCount;
}

const input = await Deno.readTextFile("./input.txt");
console.log(visibleTrees(input));
