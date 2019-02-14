import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { NotesService } from './notes.service';
@Injectable()
export class ViewNotesResolverService {

  constructor(private notesService: NotesService, private router: Router) { }
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    let id = route.paramMap.get('id');
    return this.notesService.getNotesById(id).pipe(
      take(1),
      map(invoice => {
        if (invoice) {
          return invoice;
        } else {
          this.router.navigate(['notes']);
          return null;
        }
      })

    )
  }
}
