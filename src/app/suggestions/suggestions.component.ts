import {Component, Input, OnInit} from '@angular/core';
import {GameStateGuessEditable, GameStateListSuggestable, SingleGameState} from "../GameState";
import {MatSelectionListChange} from "@angular/material/list";

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.scss']
})
export class SuggestionsComponent implements OnInit {

  @Input() gameState!: GameStateListSuggestable & GameStateGuessEditable;
  constructor() { }

  ngOnInit(): void {
  }

  get suggestions() {

    return this.gameState.listSuggestions().slice(0, 10);
  }

  onSelect($event: MatSelectionListChange) {

    const selected = $event.options[0].value;

    this.gameState.appendGuess(selected);
  }
}
