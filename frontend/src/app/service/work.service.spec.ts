import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs/internal/observable/of';
import { WorkService } from './work.service';
import { Observable } from 'rxjs';
import { IWork } from '../components/work/model/work';

class MockHttpClient {
  get(url: string, options?: any): Observable<any> {
      return of('response');
  };
  post(url: string, body: any, options?: any): Observable<any> {
      return of('response');
  }
}
describe('WorkService', () => {
  let service: WorkService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: HttpClient, useClass: MockHttpClient },
      ]
    });
    service = TestBed.inject(WorkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('findById method should call get Http method', (done: DoneFn) => {
    const httpClient = TestBed.inject(HttpClient);
    spyOn(httpClient, 'get').and.callThrough();

    service.find(1).subscribe(r => {
      expect(httpClient.get).toHaveBeenCalled();
      done();
    })
  });
  it('findbyfolder method should call get Http method', (done: DoneFn) => {
    const httpClient = TestBed.inject(HttpClient);
    spyOn(httpClient, 'get').and.callThrough();

    service.findbyfolder(1).subscribe(r => {
      expect(httpClient.get).toHaveBeenCalled();
      done();
    })
  });
  it('save method should call get Http method', (done: DoneFn) => {
    const httpClient = TestBed.inject(HttpClient);
    spyOn(httpClient, 'post').and.callThrough();

    const work = {
      work_id: 1,
      description: 'description',
      mark: true,
      folder_id: 1,
      last_update: new Date()
    }
    service.save(work).subscribe(r => {
      expect(httpClient.post).toHaveBeenCalled();
      done();
    })
  });
});
