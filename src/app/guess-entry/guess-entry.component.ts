import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-guess-entry',
  templateUrl: './guess-entry.component.html',
  styleUrls: ['./guess-entry.component.scss']
})
export class GuessEntryComponent implements OnInit {

  @Output() guess = new EventEmitter();

  guessEntry: FormControl;
  constructor(private fb: FormBuilder) {

    this.guessEntry = this.fb.control('', [Validators.minLength(5), Validators.maxLength(5)])
  }

  ngOnInit(): void {
  }

  submit() {
    this.guess.emit(this.guessEntry.value);
    this.guessEntry.reset();
  }
}
