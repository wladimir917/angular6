import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  constructor(private http: HttpClient) {

   }

  getUsers(records) {
    return this.http.get('https://randomuser.me/api/?results='+ records);
  }
}