// @ts-ignore
// @ts-ignore

import { Component, OnInit  } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {PersonService} from "./services/person.service";
import {Person} from  "./models/person";
import {NewcompyyyComponent} from "./Components/newcompyyy/newcompyyy.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NewcompyyyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'ClientApp';
  openAppComp = true;
  openNewCompyyy = false;

  ngOnInit(){
    this.showConfig();
  }
  constructor(private configService: PersonService) {
    this.showConfig();

  }
  openNewCompyyyDialogue(){
    console.log("Open new comp");
    this.openNewCompyyy = true;
  }

  onClose(){
    console.log("Close comp");
    this.openAppComp = false
  }

  showConfig() {
    this.configService.getConfig().subscribe(data =>{
      this.title = data.name;
      console.log("Name: "+data.name);
    });
  }
}

