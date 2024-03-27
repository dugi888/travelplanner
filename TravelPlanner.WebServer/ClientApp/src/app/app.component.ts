// @ts-ignore
// @ts-ignore

import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {PersonService} from "./services/person.service";
import {Person} from  "./models/person";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'Travel Planner';

  ngOnInit(){
    this.router.navigate(['/homepage']);
  }
  constructor(private router: Router) {
  }

}

