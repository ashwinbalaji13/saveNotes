import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Notes, getNotes, deleteNotes } from "../notes";
import { environment } from "../../../environments/environment";
@Injectable()
export class NotesService {
  constructor(private httpClient: HttpClient) { }
  getNotes(): Observable<getNotes[]> {
    // debugger;
    let query = `${environment.apiUrl}/allNotes`;
    return this.httpClient.get<getNotes[]>(query);
  }
  postNotes(body): Observable<getNotes> {
    // debugger;
    let query = `${environment.apiUrl}/postNotes`;
    return this.httpClient.post<getNotes>(query, body);
  }
  deleteNotes(id): Observable<deleteNotes> {
    // debugger;
    let query = `${environment.apiUrl}/deleteNotes`;
    return this.httpClient.delete<deleteNotes>(`${query}?id=${id}`);
  }
  getNotesById(id): Observable<getNotes> {
    // debugger;
    let query = `${environment.apiUrl}/getNotesById`;
    return this.httpClient.get<getNotes>(`${query}?id=${id}`);
  }
}
