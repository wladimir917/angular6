import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


interface response {
  message: any
};

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  constructor(private Auth: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  loginUser(event) {
    const target = event.target;
    const username = target.querySelector('#username').value;
    const password = target.querySelector('#password').value;

    this.Auth.getUserDetails(username, password).subscribe(data => {
      const response = <response>data;
      if(response.message) {
        //redirect tp admin
        window.alert(<response> response.message);
        this.router.navigate(['admin']);
        this.Auth.setLoggedIn(true);
      } else {
        window.alert("Error Login")
      }
    })
  }

}
