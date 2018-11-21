import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface usersData {
  results: any
};

@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  constructor(private http: HttpClient) {

   }

  getUsers(records) {
    return this.http.get<usersData>('https://randomuser.me/api/?results='+ records);
  }
}