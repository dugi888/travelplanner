import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})

export class HomepageComponent {
  @Output() emitter: EventEmitter<any> = new EventEmitter();

closeHomepageComponent(){
  this.emitter.emit(null)
}
}
