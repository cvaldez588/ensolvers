import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WorkService } from 'src/app/service/work.service';
import { IWork } from './model/work';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  folderId: number  = 0;
  newWork: String = '';
  works: IWork[] = [];
  showError: boolean = false;

  constructor(private route: ActivatedRoute, private workService: WorkService) {
    route.params.subscribe(params => {
      this.folderId = params['id'];
    })
  }

  ngOnInit(): void {
    this.getWorksByFolderID(this.folderId);
  }

  getWorksByFolderID(folderId: number) {
    this.workService.findbyfolder(folderId).subscribe((works: IWork[]) => {
      this.works = works;
    })
  }
  
  addWork() {
    if (this.newWork.length > 5){
      const work = {
        description: this.newWork,
        mark: false,
        folder_id: this.folderId
      };

      this.workService.save(work).subscribe( (work: IWork) => {
        this.getWorksByFolderID(this.folderId);
        this.newWork = '';
      })
      this.showError = false;
    } else {
      this.showError = true;
    }
  }

  markWork(work_id: number, mark: boolean) {
    const work = {
      work_id: work_id,
      mark: !mark,
      folder_id: this.folderId
    };

    this.workService.save(work).subscribe( (work: IWork) => {
      this.getWorksByFolderID(this.folderId);
      this.newWork = '';
    })
  }

  trackId(index: number, work: IWork) {
    return work.work_id;
  }
}
