import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetDataService {
  constructor(private http: HttpClient) {}

  url!: String;

  getConfig(url: string): Observable<any> {
    this.url = url;
    return this.http.get(url);
  }
}