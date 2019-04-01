import { Component, OnInit, Inject } from "@angular/core";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from "@angular/material";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { NotesService } from "../service/notes.service";
import { loginSession } from '../../login/service/login_session.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

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
  myControl = new FormControl();
  options: string[];
  filteredOptions: Observable<string[]>;
  constructor(
    public dialogRef: MatDialogRef<NotesAddDialogComponent>,
    private fb: FormBuilder,
    private notesService: NotesService,
    private name: loginSession,
    private snackbar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data
  ) { }
  postData() {
    console.log(this.notesForm.value);
    this.notesForm.value.notes = this.myControl.value;
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
    this.options = Array.from(new Set(this.data.map((item: any) => item.notes)));
    console.log("notes data", this.options);

    // this.options = this.data;
    this.notesForm = this.fb.group({
      user: [this.name.username, Validators.required],
      notes: ["", Validators.required]
    });
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }
  errorHandler(mes) {
    this.snackbar.open(mes, "Failed", {
      duration: 10000
    });
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    console.log(this.options, " value changes ", this.notesForm);
    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }
}
