export function totalScore(input: string): number {
  const rounds = input.trim().split("\n").map((round) => round.trim());

  const scores = rounds.map((round) => {
    const outcomeScore = getOutcomeScore(round);
    const myShape = round.split(" ")[1];
    const shapeScore = getShapeScore(myShape);

    return outcomeScore + shapeScore;
  });

  return scores.reduce((sum, score) => sum + score, 0);
}

function getOutcomeScore(round: string): number {
  // Won
  if (round === "A Y" || round === "B Z" || round === "C X") {
    return 6;
  }

  // Lost
  if (round === "A Z" || round === "B X" || round === "C Y") {
    return 0;
  }

  // Draw
  return 3;
}

function getShapeScore(shape: string): number {
  // Rock
  if (shape === "X") {
    return 1;
  }

  // Paper
  if (shape === "Y") {
    return 2;
  }

  // Scissors
  return 3;
}

const input = await Deno.readTextFile("./input.txt");
console.log(totalScore(input));
