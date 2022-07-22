import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  slogan: string = 'Travel Explorer';
  subTitle: string = 'Travel made easy';
  constructor() { }
  ngOnInit(): void {
  }

  getSubTitle() {
    return this.subTitle;
  }
}

