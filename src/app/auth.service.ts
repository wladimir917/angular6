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

  logout() {
    // localStorage.removeItem('access_token');
    this.setLoggedIn(false);
  }

  get isLoggedIn() {
    return this.loggedInStatus
  };

  getUserDetails(username, password) {
    //API call
    return this.http.post('https://young-coast-73926.herokuapp.com/api/auth/login/', {
      username,
      password
    })
  }
}
