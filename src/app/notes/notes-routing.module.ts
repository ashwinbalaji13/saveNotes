import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesToolbarComponent } from './notes-toolbar/notes-toolbar.component';


const routes: Routes = [
  {
    path: "",
    component: NotesToolbarComponent,
    // children: [
    //   {
    //     path: "",
    //     component: NotesToolbarComponent
    //   },
    // ]
  }]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotesRoutingModule { }
