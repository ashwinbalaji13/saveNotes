import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NotesToolbarComponent } from "./notes-toolbar/notes-toolbar.component";
import { NotesRoutingModule } from "./notes-routing.module";
import { MaterialModule } from "../shared/material.module";
import { NotesAddDialogComponent } from "./notes-add-dialog/notes-add-dialog.component";
import { FormsModule } from "@angular/forms";
import { NotesService } from "./service/notes.service";
import { NotesDetailsComponent } from './notes-details/notes-details.component';
import { NotesViewComponent } from './notes-view/notes-view.component';
import { ViewNotesResolverService } from './service/view-notes-resolver.service';
import { loginSession } from '../login/service/login_session.service';

@NgModule({
  declarations: [NotesToolbarComponent, NotesAddDialogComponent, NotesAddDialogComponent, NotesDetailsComponent, NotesViewComponent],
  imports: [CommonModule, FormsModule, NotesRoutingModule, MaterialModule],
  entryComponents: [NotesAddDialogComponent],
  providers: [NotesService, ViewNotesResolverService]
})
export class NotesModule { }
