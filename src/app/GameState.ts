

export class GameState {

  readonly guesses: Guess[] = [];

  constructor(private wordlist: string[]) {
  }

  appendGuess(guess: string) {
    this.guesses.push(new Guess(guess));
  }

  removeGuess() {
    this.guesses.pop();
  }
}

export class Guess {

  readonly guess: string[]
  private states: LetterState[];

  constructor(word: string) {
    this.guess = word.split('');
    this.states = this.guess.map(_ => LetterState.NONE);
  }

  toggleLetterState(index: number) {
    this.states[index] = (this.states[index] + 1) % (Object.keys(LetterState).length / 2);
  }

  letterStateAt(index: number) {
    return this.states[index];
  }
}

export enum LetterState {
  NONE,
  MISPOSITIONED,
  CORRECT
}

