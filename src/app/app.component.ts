import {Component, OnInit} from '@angular/core';
import {WordlistService} from "./wordlist.service";
import {GameState} from "./GameState";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'wordle-guesser';

  gameState: GameState|null = null;

  constructor(private wordService: WordlistService) {
  }

  ngOnInit(): void {

    this.wordService.getWordList().subscribe(
      (words) => {
        this.gameState = new GameState(words);
      }
    )

  }

  appendGuess($event: string) {
    this.gameState?.appendGuess($event);
  }
}
