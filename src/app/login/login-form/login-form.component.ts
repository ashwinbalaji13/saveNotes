import { Component, OnInit } from '@angular/core';
import { loginSession } from '../service/login_session.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { JwtService } from '../service/jwt.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  userName;
  constructor(private userDetails: loginSession, private jwtService: JwtService, private router: Router, private snackbar: MatSnackBar) { }

  ngOnInit() {
  }

  saveUserName() {

    console.log("works", this.userDetails.username);

    this.userDetails.username = this.userName;
    console.log("works", this.userDetails.username);
    this.userDetails.postName(this.userName).subscribe(
      res => {
        console.log("res", res);
        this.jwtService.setToken(res.token);
        this.router.navigate(['/notes']);
      },
      err => {
        this.errorHandler(err);
      });


  }
  errorHandler(mes) {
    this.snackbar.open(mes, "Failed", {
      duration: 10000
    });
  }
}
