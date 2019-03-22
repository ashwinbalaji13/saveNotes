import { Component, OnInit, Inject } from "@angular/core";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from "@angular/material";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { NotesService } from "../service/notes.service";
import { loginSession } from '../../login/service/login_session.service';

export interface NotesData {
  name: string;
  notes: string;
}

@Component({
  selector: "app-notes-add-dialog",
  templateUrl: "./notes-add-dialog.component.html",
  styleUrls: ["./notes-add-dialog.component.scss"]
})
export class NotesAddDialogComponent implements OnInit {
  notesForm: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<NotesAddDialogComponent>,
    private fb: FormBuilder,
    private notesService: NotesService,
    private name: loginSession,
    private snackbar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: NotesData
  ) { }
  postData() {
    console.log(this.notesForm.value);
    this.notesService.postNotes(this.notesForm.value).subscribe(
      res => {
        this.snackbar.open("Notes Added", "Success", {
          duration: 2000
        });
        this.dialogRef.close(res);
      },
      err => {
        this.errorHandler(err);
      }
    );
  }
  onNoClick(): void { }
  ngOnInit() {
    console.log("name", this.name.username);
    this.notesForm = this.fb.group({
      user: [this.name.username, Validators.required],
      notes: ["", Validators.required]
    });
  }
  errorHandler(mes) {
    this.snackbar.open(mes, "Failed", {
      duration: 10000
    });
  }
}
