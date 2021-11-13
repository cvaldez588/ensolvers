import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs';
import { IFolder } from '../components/folder/models/folder';
import { getHttpOptions, handleError } from '../service/helper'
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class FolderService {

  url: string = environment.backend + '/api/folder/';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<IFolder[]>(this.url + 'all').pipe(
      catchError(handleError)
    )
  }
  save(folder: any) {
    return this.http.post<IFolder>(this.url + 'save', folder, getHttpOptions()).pipe(
      catchError(handleError)
    )
  }
  delete(id: number) {
    return this.http.delete<IFolder>(this.url + 'delete/' + id).pipe(
      catchError(handleError)
    )
  }
}
