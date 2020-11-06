import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data } from 'src/app/data';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private url = 'assets/data.json';
  constructor(private http: HttpClient) { }

  getDate(): Observable<Data[]>{
    return this.http.get<Data[]>(this.url);
  }
}
