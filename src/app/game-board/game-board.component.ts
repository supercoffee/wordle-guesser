import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss']
})
export class GameBoardComponent implements OnInit {

  guess: string[] = 'abcde'.split('');

  @Input() guesses: string[][] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
