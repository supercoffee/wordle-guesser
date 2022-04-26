import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";


const WORDLIST_URL = 'https://raw.githubusercontent.com/tabatkins/wordle-list/main/words';

@Injectable({
  providedIn: 'root'
})
export class WordlistService {

  constructor(private http: HttpClient) { }

  getWordList(): Observable<string[]>{
    return this.http.get(WORDLIST_URL, {
      responseType: 'text'
    }).pipe(
      map((response) => {
        return response.split('\n');
      })
    )
  }
}
