import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.less']
})
export class HelloComponent implements OnInit {

  owner = "Wladimir Fraga";

  constructor() {}

  ngOnInit() {
  }

}