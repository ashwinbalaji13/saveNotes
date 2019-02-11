import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesToolbarComponent } from './notes-toolbar/notes-toolbar.component';
import { NotesDetailsComponent } from './notes-details/notes-details.component';
import { NotesViewComponent } from './notes-view/notes-view.component';


const routes: Routes = [
  {
    path: "",
    component: NotesToolbarComponent,
    children: [
      {
        path: "",
        component: NotesDetailsComponent
      }, {
        path: "view/:id",
        component: NotesViewComponent
      }
    ]
  }]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotesRoutingModule { }
