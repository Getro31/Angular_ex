import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { dataInterface } from '../models/data.model';

@Injectable({
  providedIn: 'root',
})
export class GetDataService {
  constructor(private http: HttpClient) {}

  getConfig() {
    return this.http.get<dataInterface>(environment.apiUrl);
  }
}
