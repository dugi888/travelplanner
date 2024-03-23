// @ts-ignore
// @ts-ignore

import { Component, OnInit  } from '@angular/core';
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
  title = 'ClientApp';
  openAppComp = true;

  ngOnInit(){
    //this.showConfig();
    this.router.navigate(['/homepage']);
  }
  constructor(private configService: PersonService,private router: Router) {
   // this.showConfig();

  }
  showConfig() {
    this.configService.getConfig().subscribe(data =>{
      this.title = data.name;
      console.log("Name: "+data.name);
    });
  }
}

