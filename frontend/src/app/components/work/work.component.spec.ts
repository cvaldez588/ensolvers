import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs/internal/observable/of';
import { WorkService } from 'src/app/service/work.service';

import { WorkComponent } from './work.component';

class MockActivatedRoute {
  params = of([{ id: 1} ]);
}

class MockWorkService {
  findbyfolder() {
    return of([]);
  }
  save(work: any) {
    return of({})
  }
  
}
describe('WorkComponent', () => {
  let component: WorkComponent;
  let fixture: ComponentFixture<WorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkComponent ],
      providers: [
        { provide: ActivatedRoute, useClass: MockActivatedRoute },
        { provide: WorkService, useClass: MockWorkService },
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('getWorksByFolderID method should call findbyfolder service', ()  => {
    const workService = TestBed.inject(WorkService);
    spyOn(workService, 'findbyfolder').and.callThrough();

    component.getWorksByFolderID(1);
    expect(workService.findbyfolder).toHaveBeenCalled();
  });

  it('addWork method should call save service', ()  => {
    const workService = TestBed.inject(WorkService);
    spyOn(workService, 'save').and.callThrough();

    component.folderId = 1;
    component.newWork = 'new Work';

    component.addWork();
    expect(workService.save).toHaveBeenCalled();
    expect(component.showError).toEqual(false);
  });
  it('new work lenght less than 5 failed', ()  => {
    const workService = TestBed.inject(WorkService);
    spyOn(workService, 'save').and.callThrough();

    component.folderId = 1;
    component.newWork = 'Work';
    component.addWork();
    expect(workService.save).not.toHaveBeenCalled();
    expect(component.showError).toEqual(true);
   });
   it('markWork method should call save service', ()  => {
    const workService = TestBed.inject(WorkService);
    spyOn(workService, 'save').and.callThrough();

    component.folderId = 1;
    component.newWork = 'My Work';
    component.markWork(1, false);
    expect(workService.save).toHaveBeenCalled();
   });
});
