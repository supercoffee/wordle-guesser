import {Component, Input, OnInit} from '@angular/core';
import {GameState, Guess} from "../GameState";

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss']
})
export class GameBoardComponent implements OnInit {

  @Input() gameState!: GameState;

  constructor() { }

  ngOnInit(): void {
  }

  letterClass(guess: Guess, i: number) {
    const state = guess.letterStateAt(i);
    const classMap = ['', 'yellow', 'green'];
    return classMap[state];
  }

  toggleLetterState(guess: Guess, index: number) {
    guess.toggleLetterState(index);
  }

  deleteRow() {
    this.gameState.removeGuess();
  }
}
