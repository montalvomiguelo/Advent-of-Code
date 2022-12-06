export function sumItemPriorities(input: string): number {
  const rucksacks = input.trim().split("\n").map((sack) => sack.trim());
  const commonItems = getCommonItems(rucksacks);

  const itemPriorities = getItemPriorities(commonItems);

  return itemPriorities.reduce((sum, priority) => sum + priority, 0);
}

function getCommonItems(rucksacks: string[]): string[] {
  return rucksacks.map(getCommonItem);
}

function getCommonItem(rucksack: string): string {
  const items = rucksack.split("");
  const middleIndex = items.length / 2;
  const firstCompartment = items.splice(0, middleIndex);
  const secondCompartment = items;

  for (let i = 0; i < firstCompartment.length; i++) {
    const item = firstCompartment[i];
    if (~secondCompartment.indexOf(item)) {
      return item;
    }
  }

  return "";
}

function getItemPriorities(items: string[]): number[] {
  const priorities = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return items.map((item) => {
    const itemIndex = priorities.indexOf(item);
    return itemIndex + 1;
  });
}

const input = await Deno.readTextFile("./input.txt");
console.log(sumItemPriorities(input));
