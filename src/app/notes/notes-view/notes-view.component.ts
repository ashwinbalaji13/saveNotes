import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { NotesService } from "../service/notes.service";
import { MatSnackBar } from "@angular/material";
import { getNotes } from "../notes";

@Component({
  selector: "app-notes-view",
  templateUrl: "./notes-view.component.html",
  styleUrls: ["./notes-view.component.scss"]
})
export class NotesViewComponent implements OnInit {
  notes: getNotes;
  constructor(
    private route: Router,
    private activatedRouter: ActivatedRoute,
    private notesService: NotesService,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit() {
    this.getInvoiceById();
  }
  getInvoiceById() {
    this.activatedRouter.params.subscribe(params => {
      let id = params.id;
      this.notesService.getNotesById(id).subscribe(note => {
        if (note) {
          debugger;
          this.notes = note;
        } else {
          this.snackbar.open("Notes Not Found", "Failed", {
            duration: 10000
          });
          this.route.navigate(["notes"]);
        }
      });
    });
  }
  goBack() {
    this.route.navigate(["notes"]);
  }
}
