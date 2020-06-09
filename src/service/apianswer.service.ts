import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIAnswer } from 'src/app/apianswer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APIAnswerService {
  private _url = 'https://api.chucknorris.io/jokes/random';

  constructor(private http: HttpClient) { }

  getAnswer(): Observable<APIAnswer[]> {
    return this.http.get<APIAnswer[]>(this._url);
  }
}
