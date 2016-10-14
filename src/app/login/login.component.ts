import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  submitted = false;
  room;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  onSubmit() {
    this.submitted = true;
    this.router.navigate(['/rooms', this.room]);
  }
}
