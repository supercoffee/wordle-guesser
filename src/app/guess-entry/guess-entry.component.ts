import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {GameState} from "../GameState";

@Component({
  selector: 'app-guess-entry',
  templateUrl: './guess-entry.component.html',
  styleUrls: ['./guess-entry.component.scss']
})
export class GuessEntryComponent implements OnInit {

  @Input() gameState!: GameState;

  guessEntry: FormControl;
  constructor(private fb: FormBuilder) {

    this.guessEntry = this.fb.control('', [Validators.minLength(5), Validators.maxLength(5)])
  }

  ngOnInit(): void {
  }

  submit($event: any) {
    $event.preventDefault();
    this.gameState.appendGuess(this.guessEntry.value);
    this.guessEntry.reset();
  }
}
