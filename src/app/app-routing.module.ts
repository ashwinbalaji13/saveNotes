import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: 'notes',
  loadChildren: './notes/notes.module#NotesModule'
}, {
  path: '**',
  redirectTo: 'notes'
}];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
