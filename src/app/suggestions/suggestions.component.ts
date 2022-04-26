import {Component, Input, OnInit} from '@angular/core';
import {GameState} from "../GameState";

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.scss']
})
export class SuggestionsComponent implements OnInit {

  @Input() gameState!: GameState;
  constructor() { }

  ngOnInit(): void {
  }

  get suggestions() {

    return this.gameState.listSuggestions().slice(0, 10);
  }
}
