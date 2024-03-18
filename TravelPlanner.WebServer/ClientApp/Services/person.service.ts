import { Injectable } from '@angular/core';
import {Person} from "../Models/Person";
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PersonService {


  constructor(private http: HttpClient) { }
  url = 'http://localhost:5267/api/Person';

  getConfig() {
    return this.http.get<Person>(this.url);
  }

}
