import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedInStatus = false;

  constructor(private http: HttpClient) { };

  setLoggedIn(logged: boolean) {
    this.loggedInStatus = logged
  };

  get isLoggedIn() {
    return this.loggedInStatus
  };

  getUserDetails(username, password) {
    //API call
    console.log(username, password);
    return this.http.post('https://young-coast-73926.herokuapp.com/api/auth/login/', {
      username,
      password
    })
  }
}
