import { Component, OnInit, Inject } from '@angular/core';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NotesAddDialogComponent } from '../notes-add-dialog/notes-add-dialog.component';



@Component({
  selector: 'app-notes-toolbar',
  templateUrl: './notes-toolbar.component.html',
  styleUrls: ['./notes-toolbar.component.scss']
})
export class NotesToolbarComponent implements OnInit {
  animal: string;
  name: string;
  constructor(public dialog: MatDialog) { }
  openDialog(): void {
    const dialogRef = this.dialog.open(NotesAddDialogComponent, {
      width: '250px',
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }


  ngOnInit() {
  }

}
