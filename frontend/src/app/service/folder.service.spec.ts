import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

import { FolderService } from './folder.service';

class MockHttpClient {
  get(url: string, options?: any): Observable<any> {
    return of('response');
  };
  post(url: string, body: any, options?: any): Observable<any> {
    return of('response');
  }
  delete(url: string): Observable<any> {
    return of('response');
  } 
}
describe('FolderserviceService', () => {
  let service: FolderService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: HttpClient, useClass: MockHttpClient },
      ]
    });
    service = TestBed.inject(FolderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getAll method should call get Http method', (done: DoneFn) => {
    const httpClient = TestBed.inject(HttpClient);
    spyOn(httpClient, 'get').and.callThrough();

    service.getAll().subscribe(r => {
      expect(httpClient.get).toHaveBeenCalled();
      done();
    })
  });
  it('save method should call post Http method', (done: DoneFn) => {
    const httpClient = TestBed.inject(HttpClient);
    spyOn(httpClient, 'post').and.callThrough();

    const folder = {
      folder_id: 1,
      description: 'description',
      last_update: Date
    }
    service.save(folder).subscribe(r => {
      expect(httpClient.post).toHaveBeenCalled();
      done();
    })
  });
  it('delete method should call delete Http method', (done: DoneFn) => {
    const httpClient = TestBed.inject(HttpClient);
    spyOn(httpClient, 'delete').and.callThrough();

    service.delete(1).subscribe(r => {
      expect(httpClient.delete).toHaveBeenCalled();
      done();
    })
  });
});
