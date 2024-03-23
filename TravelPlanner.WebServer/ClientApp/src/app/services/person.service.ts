import { Injectable } from '@angular/core';
import {Person} from "../models/person";
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PersonService {


  constructor(private http: HttpClient) { }
  url = 'https://localhost:9001/api/Person'; // This can vary from config version being ran

  getConfig() {
    return this.http.get<Person>(this.url);
  }

}
