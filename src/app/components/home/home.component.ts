import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  slogan: string = 'Travel Explorer';
  subTitle: string = 'Travel made easy';
  constructor() { }
  ngOnInit(): void {
  }

  getSubTitle() {
    return this.subTitle;
  }

}
