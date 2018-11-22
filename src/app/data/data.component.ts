import { Component, OnInit } from '@angular/core';
import { RecordsService } from '../records.service';

interface usersData {
  results: any
};


@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.less']
})
export class DataComponent implements OnInit {
  users = [];

  constructor(private myFirstService : RecordsService) { }

  ngOnInit() {
    this.myFirstService.getUsers(10)
    .subscribe(response => {
      const data = <usersData> response; 
      this.users = data.results;
    });
  }

}
