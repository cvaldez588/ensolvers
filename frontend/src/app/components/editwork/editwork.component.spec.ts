import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs/internal/observable/of';
import { WorkService } from 'src/app/service/work.service';

import { EditworkComponent } from './editwork.component';

class MockActivatedRoute {
  params = of([{ id: 1} ]);
}
class MockRouter {
  navigate(route: any, id: number) {
    return of (true)
  }
}
class MockWorkService {
  find() {
    return of()
  }
  save() {
    return of({})
  }
}

describe('EditworkComponent', () => {
  let component: EditworkComponent;
  let fixture: ComponentFixture<EditworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditworkComponent ],
      providers: [
        { provide: ActivatedRoute, useClass: MockActivatedRoute },
        { provide: Router, useClass: MockRouter },
        { provide: WorkService, useClass: MockWorkService },
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('getWorkbyId method should call find service', ()  => {
    const workService = TestBed.inject(WorkService);
    spyOn(workService, 'find').and.callThrough();

    component.getWorkbyId(1);
    expect(workService.find).toHaveBeenCalled();
  });
  it('saveTask method should call save service', ()  => {
    const workService = TestBed.inject(WorkService);
    spyOn(workService, 'save').and.callThrough();

    component.work = {
      work_id: 1,
      description: 'description',
      mark: true,
      folder_id: 1,
      last_update: new Date()
    }
    component.newDescription = 'new Work';
    component.saveTask();
    expect(workService.save).toHaveBeenCalled();
    expect(component.showError).toEqual(false);

  });
  it('saveTask method should call save service', ()  => {
    const workService = TestBed.inject(WorkService);
    spyOn(workService, 'save').and.callThrough();

    component.work = {
      work_id: 1,
      description: 'description',
      mark: true,
      folder_id: 1,
      last_update: new Date()
    }
    component.newDescription = 'new Work';
    component.saveTask();
    expect(workService.save).toHaveBeenCalled();
    expect(component.showError).toEqual(false);

  });
  it('new work lenght less than 5 failed', ()  => {
    const workService = TestBed.inject(WorkService);
    spyOn(workService, 'save').and.callThrough();

    component.work = {
      work_id: 1,
      description: 'description',
      mark: true,
      folder_id: 1,
      last_update: new Date()
    }
    component.newDescription = 'work';
    component.saveTask();
    expect(workService.save).not.toHaveBeenCalled();
    expect(component.showError).toEqual(true);
   });
});
