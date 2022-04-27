import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {GameBoardComponent} from './game-board/game-board.component';
import {GuessEntryComponent} from './guess-entry/guess-entry.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {SuggestionsComponent} from './suggestions/suggestions.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from "@angular/material/list";
import {RouterModule} from "@angular/router";
import {SingleGameComponent} from './single-game/single-game.component';
import {QuadGameComponent} from './quad-game/quad-game.component';

@NgModule({
  declarations: [
    AppComponent,
    GameBoardComponent,
    GuessEntryComponent,
    SuggestionsComponent,
    SingleGameComponent,
    QuadGameComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,

    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    RouterModule.forRoot([
      {
        path: '',
        component: SingleGameComponent
      },
      {
        path: 'quordle',
        component: QuadGameComponent
      }

    ]),
  ],
  providers: [],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule {
}
