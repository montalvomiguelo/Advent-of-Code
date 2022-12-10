/**
 * mjqjpqmgbljsphdztnvjfqwrcgsmlb
 * mjqj, startIndex = 0
 *  jqjp, starIndex = 1
 *   qjpq, startIndex = 2
 *    jpqm, startIndex = 3
 */
export function startOfPacket(input: string): number {
  const data = input.trim();
  let result = -1;
  let startIndex = 0;
  const characterCount = 4;

  while (result === -1) {
    const lastFour = new Set(data.slice(startIndex, characterCount + startIndex));
    if (lastFour.size === characterCount) {
      result = startIndex + characterCount;
    }
    startIndex += 1;
  }

  return result;
}

const input = await Deno.readTextFile("./input.txt");
console.log(startOfPacket(input));
