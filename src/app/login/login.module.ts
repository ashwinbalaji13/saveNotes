import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginFormComponent } from './login-form/login-form.component';

import { MaterialModule } from '../shared/material.module';
import { LoginRoutingModule } from './login-routing';
import { loginSession } from './service/login_session.service';
import { JwtService } from './service/jwt.service';
import { HttpInterceptorService } from './service/http-interceptor.service';

@NgModule({
  declarations: [LoginFormComponent],
  imports: [
    CommonModule, FormsModule, LoginRoutingModule, MaterialModule
  ],
  providers: [JwtService, HttpInterceptorService]

})
export class LoginModule { }
