import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFire } from 'angularfire2';
import {AuthService} from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  submitted = false;
  room;
  email;
  password;
  warningMessage: string;

  constructor(private router: Router, public af: AngularFire, private authService: AuthService) { }

  ngOnInit() {
    this.af.auth.subscribe(auth => {
      console.log(auth);
    });
  }

  onSubmitRegister() {
    this.af.auth.createUser({
      email: this.email,
      password: this.password,
    }).then(() => {
      this.submitted = true;
      this.router.navigate(['/rooms', this.room]);
    }).catch((error) => {
      this.warningMessage = error.message;
      console.log(error);
    });
  }

  onSubmitLogin() {
    this.af.auth.login({
      email: this.email,
      password: this.password,
    }).then(() => {
      this.submitted = true;
      this.router.navigate([this.authService.redirectUrl]);
    })
      .catch((error) => {
        this.warningMessage = error.message;
        console.log(error);
      });
  }
}
