import { Component } from '@angular/core';
//decorator
@Component({
  selector: 'app-root', // name of component
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'My First Angular App';
  name: string = 'Krupali';
  
  getTitle(){
    return this.title;
  }
}