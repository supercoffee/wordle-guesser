import { Component, OnInit } from '@angular/core';
import {GameState} from "../GameState";
import {WordlistService} from "../wordlist.service";

@Component({
  selector: 'app-quad-game',
  templateUrl: './quad-game.component.html',
  styleUrls: ['./quad-game.component.scss']
})
export class QuadGameComponent implements OnInit {

  gameState: GameState|null = null;

  constructor(private wordService: WordlistService) { }

  ngOnInit(): void {

    this.wordService.getWordList().subscribe(
      (words) => {
        this.gameState = new GameState(words);
      }
    )

  }
}
