import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesToolbarComponent } from './notes-toolbar/notes-toolbar.component';
import { NotesRoutingModule } from './notes-routing.module';
import { MaterialModule } from '../shared/material.module';

@NgModule({
  declarations: [NotesToolbarComponent],
  imports: [
    CommonModule, NotesRoutingModule, MaterialModule
  ]
})
export class NotesModule { }
