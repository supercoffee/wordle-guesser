export interface GameStateGuessEditable {
  appendGuess(guess: string): void;
  removeGuess(): void;
}

export interface GameStateListSuggestable {
  listSuggestions(): string[];
}

export class SingleGameState implements GameStateGuessEditable, GameStateListSuggestable{

  readonly guesses: Guess[] = [];

  constructor(private wordlist: string[]) {
  }

  appendGuess(guess: string) {
    this.guesses.push(new Guess(guess));
  }

  removeGuess() {
    this.guesses.pop();
  }

  listSuggestions(): string[] {

    return this.wordlist.filter(testWord => {

      return this.guesses.every(guess => guess.filterWord(testWord));
    })

  }
}

export class QuadGameState  implements GameStateGuessEditable{
  readonly states: SingleGameState[] = [];

  constructor(private wordlist: string[]) {
    this.states = [
      new SingleGameState(wordlist),
      new SingleGameState(wordlist),
      new SingleGameState(wordlist),
      new SingleGameState(wordlist),
    ]
  }

  get guesses() : Guess[] {
    return this.states.map(state => state.guesses).flat();
  }
  appendGuess(guess: string): void {
    this.states.forEach(state => state.appendGuess(guess));
  }

  listSuggestions(): string[] {
    const suggestions = this.states.map(state => state.listSuggestions());
    return suggestions.flat();
  }

  removeGuess(): void {
    this.states.forEach(state => state.removeGuess())
  }


}

export class Guess {

  readonly guess: string[]
  private states: LetterState[];
  private filters: WordFilter[];

  constructor(word: string) {
    this.guess = word.split('');
    this.states = this.guess.map(_ => LetterState.NONE);
    this.filters = buildFiltersForGuess(this.guess, this.states);
  }

  toggleLetterState(index: number) {
    this.states[index] = (this.states[index] + 1) % (Object.keys(LetterState).length / 2);
    this.filters = buildFiltersForGuess(this.guess, this.states);
  }

  letterStateAt(index: number) {
    return this.states[index];
  }

  filterWord(testWord: string): boolean{
    return this.filters.every(filter => filter(testWord));
  }

}

function buildFiltersForGuess(guess: string[], states: LetterState[]): WordFilter[] {

  const filterFunctions: WordFilterFactory[] = [
    filterNone,
    filterPosition,
    filterCorrect
  ];

  return guess.map((letter, index) => {
    const letterState = states[index];
    return filterFunctions[letterState](letter, index);
  });
}
export enum LetterState {
  NONE,
  MISPOSITIONED,
  CORRECT
}

interface WordFilter {
  (word: string): boolean
}
type WordFilterFactory = ((letter: string, index:number) => WordFilter) | ((letter: string) =>WordFilter)

function filterNone(letter: string): WordFilter {
  return (word) => !word.includes(letter)
}
function filterPosition(letter: string, index: number): WordFilter {
  return (word) => word.charAt(index) !== letter && word.includes(letter);
}
function filterCorrect(letter: string, index: number): WordFilter {
  return (word) => word.charAt(index) === letter;
}
