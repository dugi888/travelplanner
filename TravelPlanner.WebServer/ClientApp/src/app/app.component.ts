// @ts-ignore
// @ts-ignore

import { Component, OnInit  } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {PersonService} from "../../Services/person.service";
import {Person} from "../../Models/Person";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'ClientApp';


  ngOnInit(){
    this.showConfig();
  }
  constructor(private configService: PersonService) {
    this.showConfig();

  }

  showConfig() {
    this.configService.getConfig().subscribe(data =>{
      this.title = data.name;
      console.log("Name: "+data.name);
    });
  }
}

