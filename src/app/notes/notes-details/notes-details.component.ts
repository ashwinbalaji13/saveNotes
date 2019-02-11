import { Component, OnInit } from "@angular/core";
import { NotesService } from "../service/notes.service";
import { MatTableDataSource } from "@angular/material";
import { getNotes } from "../notes";

@Component({
  selector: "app-notes-details",
  templateUrl: "./notes-details.component.html",
  styleUrls: ["./notes-details.component.scss"]
})
export class NotesDetailsComponent implements OnInit {
  // displayedColumns: string[] = ["id", "user", "notes", "createdAt", "updatedAt"];
  displayedColumns: string[] = ["id", "user", "notes", "action"];
  dataSource;
  // dataSource = new MatTableDataSource<getNotes[]>();

  constructor(private notesService: NotesService) { }

  ngOnInit() {
    this.notesService.getNotes().subscribe(data => {
      // debugger;
      this.dataSource = data;
    });
  }
}
