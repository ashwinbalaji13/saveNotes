import { Component, OnInit } from '@angular/core';
import { loginSession } from '../service/login_session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  userName;
  constructor(private saveName: loginSession, private router: Router) { }

  ngOnInit() {
  }

  saveUserName() {
    this.saveName.username = this.userName;
    console.log("works", this.saveName.username);
    this.router.navigate(['/notes']);

  }
}
