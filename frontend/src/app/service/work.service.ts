import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IWork } from '../components/work/model/work';
import { getHttpOptions, handleError } from '../service/helper'

@Injectable({
  providedIn: 'root'
})
export class WorkService {
  url: string = environment.backend + '/api/work/';

  constructor(private http:HttpClient) { }

  find(id: number) {
    return this.http.get<IWork>(this.url+'find/'+id).pipe(
      catchError(handleError)
    )
  }

  findbyfolder(id: number) {
    return this.http.get<IWork[]>(this.url+'findbyfolder/'+id).pipe(
      catchError(handleError)
    )
  }

  save(work: any) {
    return this.http.post<IWork>(this.url + 'save', work, getHttpOptions()).pipe(
      catchError(handleError)
    )
  }
}

