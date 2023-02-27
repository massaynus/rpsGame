export type Choice = 'rock' | 'paper' | 'sissors';
type MatchResult = 0 | 1 | 2

const winMatrix = new Map<Choice, Choice>();

function seedWinMatrix() {
    winMatrix.set('paper', 'rock');
    winMatrix.set('rock', 'sissors');
    winMatrix.set('sissors', 'paper');
}

export function generateComputerChoice() : Choice {
    return ['rock', 'paper', 'sissors'][Math.floor(Math.random() * 3)] as Choice
}

export function resovleMatch(firstChoice: Choice, secondChoice: Choice) : MatchResult {
    if (winMatrix.size === 0) seedWinMatrix();

    if (firstChoice === secondChoice) return 0;
    else if (winMatrix.get(firstChoice) === secondChoice) return 1
    else return 2
}