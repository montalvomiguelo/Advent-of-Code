export function sumItemPriorities(input: string): number {
  const rucksacks = input.trim().split("\n").map((rucksack) => rucksack.trim());
  const commonItems = getCommonItems(rucksacks);

  const itemPriorities = getItemPriorities(commonItems);

  return itemPriorities.reduce((sum, priority) => sum + priority, 0);
}

export function sumGroupPriorities(items: string): number {
  const groups = getGroups(items);
  const commonItems = getCommonItemsInGroups(groups);
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

function getGroups(input: string): string[][] {
  const rucksacks = input.trim().split("\n").map((rucksack) => rucksack.trim());
  const groups: string[][] = [];
  let group: string[] = [];

  for (let i = 0; i < rucksacks.length; i++) {
    const rucksack = rucksacks[i];
    group.push(rucksack);

    if ((i + 1) % 3 === 0) {
      groups.push(group);
      group = [];
    }
  }

  return groups;
}

function getCommonItemsInGroups(groups: string[][]): string[] {
  return groups.map(getCommonItemInGroup);
}

function getCommonItemInGroup(group: string[]): string {
  const firstRucksack = group[0];
  const secondRucksack = group[1];
  const thirdRucksack = group[2];

  for (let i = 0; i < firstRucksack.length; i++) {
    const item = firstRucksack[i];

    if (secondRucksack.includes(item) && thirdRucksack.includes(item)) {
      return item;
    }
  }

  return "";
}

const input = await Deno.readTextFile("./input.txt");
console.log(sumItemPriorities(input));
console.log(sumGroupPriorities(input));
