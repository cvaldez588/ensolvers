import { HttpErrorResponse, HttpHeaders } from "@angular/common/http"
import { throwError } from "rxjs"

export const getHttpOptions = () =>  {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return httpOptions
  }

export const handleError = (error: HttpErrorResponse) => {
    if (error.error instanceof ErrorEvent) {
      console.log('Frontend error', error.error.message)
    }
    else {
      console.log(`Backend error: ${error.status}, cuerpo de error: ${error.message}`)
    }
    return throwError('Http Communication Error');
  }