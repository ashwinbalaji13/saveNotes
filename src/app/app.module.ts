import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { MaterialModule } from "./shared/material.module";
import { NotesModule } from "./notes/notes.module";
import { NotesToolbarComponent } from "./notes/notes-toolbar/notes-toolbar.component";
import { AppRoutingModule } from "./app-routing.module";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { LoginModule } from './login/login.module';
import { loginSession } from './login/service/login_session.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule, LoginModule, FormsModule, MaterialModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [loginSession],
  bootstrap: [AppComponent]
})
export class AppModule { }
