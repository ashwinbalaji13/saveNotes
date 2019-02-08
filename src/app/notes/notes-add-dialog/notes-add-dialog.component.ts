import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface NotesData {
  name: string;
  notes: string;
}


@Component({
  selector: 'app-notes-add-dialog',
  templateUrl: './notes-add-dialog.component.html',
  styleUrls: ['./notes-add-dialog.component.scss']
})
export class NotesAddDialogComponent implements OnInit {


  constructor(
    public dialogRef: MatDialogRef<NotesAddDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: NotesData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
  }

}
