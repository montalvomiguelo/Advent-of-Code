function elvesWithTotalCalories(elves: string): number[] {
  return elves.split("\n\n").map((elf) => {
    const caloriesArray = elf.trim().split("\n").map((calories) =>
      parseInt(calories.trim())
    );
    return caloriesArray.reduce(
      (caloriesSum, calories) => caloriesSum + calories,
      0,
    );
  });
}

// Part 1
export function elfWithMostCalories(elves: string): number {
  return Math.max(...elvesWithTotalCalories(elves));
}

// Part 2
export function threeElvesWithMostCalories(elves: string): number {
  const elvesDescOrder = elvesWithTotalCalories(elves).sort((a, b) => b - a);

  const topThreeElves = elvesDescOrder.splice(0, 3);

  return topThreeElves.reduce(
    (caloriesSum, calories) => caloriesSum + calories,
    0,
  );
}

const input = await Deno.readTextFile("./input.txt");
console.log(elfWithMostCalories(input));
console.log(threeElvesWithMostCalories(input));
