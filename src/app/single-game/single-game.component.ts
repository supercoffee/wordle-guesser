import { Component, OnInit } from '@angular/core';
import {SingleGameState} from "../GameState";
import {WordlistService} from "../wordlist.service";

@Component({
  selector: 'app-single-game',
  templateUrl: './single-game.component.html',
  styleUrls: ['./single-game.component.scss']
})
export class SingleGameComponent implements OnInit {

  gameState: SingleGameState|null = null;

  constructor(private wordService: WordlistService) { }

  ngOnInit(): void {

    this.wordService.getWordList().subscribe(
      (words) => {
        this.gameState = new SingleGameState(words);
      }
    )

  }

  appendGuess($event: string) {
    this.gameState?.appendGuess($event);
  }

  deleteRow() {
    this.gameState?.removeGuess();
  }
}
