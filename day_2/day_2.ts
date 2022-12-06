export function totalScore(input: string): number {
  const rounds = input.trim().split("\n").map((round) => round.trim());

  const scores = rounds.map((round) => {
    const outcomeScore = getOutcomeScore(round);
    const myShape = getShape(round);
    const shapeScore = getShapeScore(myShape);

    return outcomeScore + shapeScore;
  });

  return scores.reduce((sum, score) => sum + score, 0);
}

function getShape(round: string): string {
  const outcome = round.split(" ")[1];
  const opponentShape = round.split(" ")[0];

  // Lost
  if (outcome === "X") {
    if (opponentShape === "A") {
      return "C";
    }
    if (opponentShape === "B") {
      return "A";
    }
    if (opponentShape === "C") {
      return "B";
    }
  }

  // Won
  if (outcome === "Z") {
    if (opponentShape === "A") {
      return "B";
    }
    if (opponentShape === "B") {
      return "C";
    }
    if (opponentShape === "C") {
      return "A";
    }
  }

  // Draw
  return opponentShape;
}

function getOutcomeScore(round: string): number {
  const outcome = round.split(" ")[1];

  // Won
  if (outcome === "Z") {
    return 6;
  }

  // Lost
  if (outcome === "X") {
    return 0;
  }

  // Draw
  return 3;
}

function getShapeScore(shape: string): number {
  // Rock
  if (shape === "A") {
    return 1;
  }

  // Paper
  if (shape === "B") {
    return 2;
  }

  // Scissors
  return 3;
}

const input = await Deno.readTextFile("./input.txt");
console.log(totalScore(input));
