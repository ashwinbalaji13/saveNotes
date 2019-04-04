import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";

@Injectable()
export class loginSession {
    username = "";
    data: any;
    constructor(private httpClient: HttpClient) { }
    postName(name: string): Observable<any> {
        // debugger;
        let query = `${environment.apiUrl}/user/postUser`;
        return this.httpClient.post<any>(query, { name });
    }

}