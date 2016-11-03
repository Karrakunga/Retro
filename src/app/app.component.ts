import { Component } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Retro Board';
  constructor(public af: AngularFire) {}

   login() {
    this.af.auth.login();
  }

  logout() {
     this.af.auth.logout();
  }
}
