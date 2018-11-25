import { Component } from '@angular/core';
import { HelloComponent } from './hello/hello.component';
import { Title } from '@angular/platform-browser';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent {
  title = 'Angular 6 - Todo App';
  name = 'Name';
  text2 = 'text2';
  
  constructor(private auth: AuthService, private router: Router) {
  };

  ngOnInit() {
  };

  logout() {
    this.auth.logout();
    this.router.navigate(['login']);
  }
}
