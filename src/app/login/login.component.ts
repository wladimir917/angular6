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
  public username: string;
  public password: string;
  public error: string;

  constructor(private Auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  public submit() {
    this.Auth.getUserDetails(this.username, this.password)
      .subscribe(
        data => {
          const response = <response>data;
          this.error = '';
          console.log("Result: ", response);
          this.router.navigate(['data']);
          this.Auth.setLoggedIn(true);
        },
        err => {
          console.log("error: ", err);
          this.error = err.error;
          this.Auth.setLoggedIn(false);
        }
      );
  }
}
