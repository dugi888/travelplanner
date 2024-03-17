import { Injectable } from '@angular/core';
import {Weather} from "../Models/Weather";
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {


  constructor(private http: HttpClient) { }
  url = 'https://localhost:7178/api/weatherforecast';

  getConfig() {
    return this.http.get<Weather>(this.url);
  }

}
