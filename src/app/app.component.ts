import {Component, OnInit} from '@angular/core';
import {WordlistService} from "./wordlist.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'wordle-guesser';

  guesses: string[][] = [];
  private words: string[] = [];

  constructor(private wordService: WordlistService) {
  }

  ngOnInit(): void {

    this.wordService.getWordList().subscribe(
      (words) => this.words = words
    )

  }

  appendGuess($event: string) {
    this.guesses.push($event.split(''));
  }
}
