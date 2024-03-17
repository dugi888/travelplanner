// @ts-ignore
// @ts-ignore

import { Component, OnInit  } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {WeatherService} from "../../Services/weather.service";
import {Weather} from "../../Models/Weather";


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
  constructor(private configService: WeatherService) {
    this.showConfig();

  }

  showConfig() {
    this.configService.getConfig();
  }
}

