import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  title = 'Angular 6 TodoApp';
  name = 'Name';
  text2 = 'text2';
  
  constructor() { }

  ngOnInit() {
  }
  updateValue(e) {
    this.name = e.target.value;
  };

}
