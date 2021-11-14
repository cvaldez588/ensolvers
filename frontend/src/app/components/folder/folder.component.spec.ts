import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { FolderService } from 'src/app/service/folder.service';

import { FolderComponent } from './folder.component';

class MockFolderService {
  getAll() {
    return of([]);
  }
  save(folder: any): Observable<any> {
    return of({});
  }
  delete(folder: any): Observable<any> {
    return of({});
  }
}
describe('FolderComponent', () => {
  let component: FolderComponent;
  let fixture: ComponentFixture<FolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FolderComponent ],
      providers: [
        { provide: FolderService, useClass: MockFolderService},
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('getFolders method should call getAll service', ()  => {
    const folderService = TestBed.inject(FolderService);
    spyOn(folderService, 'getAll').and.callThrough();

    component.getFolders();
    expect(folderService.getAll).toHaveBeenCalled();
  });
  it('addFolder method should call save service', ()  => {
    const folderService = TestBed.inject(FolderService);
    spyOn(folderService, 'save').and.callThrough();

    component.newFolder = 'new Folder';
    component.addFolder();
    expect(folderService.save).toHaveBeenCalled();
    expect(component.showError).toEqual(false);
  });
  it('new folder lenght less than 5 failed', ()  => {
    const folderService = TestBed.inject(FolderService);
    spyOn(folderService, 'save').and.callThrough();

    component.newFolder = 'fold';
    component.addFolder();
    expect(folderService.save).not.toHaveBeenCalled();
    expect(component.showError).toEqual(true);
   });
   it('removeFolder method should call delete service', ()  => {
    const folderService = TestBed.inject(FolderService);
    spyOn(folderService, 'delete').and.callThrough();

    component.removeFolder(1);
    expect(folderService.delete).toHaveBeenCalled();
  });
});
