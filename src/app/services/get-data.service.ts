import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { dataInterface } from '../models/data.model';

@Injectable({
  providedIn: 'root',
})
export class GetDataService {

  constructor(private http: HttpClient) {}

  url = "https://api.api-ninjas.com/v1/exercises?muscle=biceps" ;

  getConfig(){
    return this.http.get<dataInterface>(this.url);
  }
}
