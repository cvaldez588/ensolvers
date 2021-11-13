import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WorkService } from 'src/app/service/work.service';
import { IWork } from '../work/model/work';

@Component({
  selector: 'app-editwork',
  templateUrl: './editwork.component.html',
  styleUrls: ['./editwork.component.scss']
})
export class EditworkComponent implements OnInit {
  work_id: number = 0;
  newDescription: string = '';
  work: IWork = {
    work_id: 0,
    description: '',
    mark: false,
    folder_id: 0,
    last_update: new Date()
  };
  showError = false;
  
  constructor(private route: ActivatedRoute, private router:Router, private workService: WorkService) {
    route.params.subscribe(params => {
      this.work_id = params['id'];
    })
  }

  ngOnInit(): void {
    this.getWorkbyId(this.work_id); 
  }

  getWorkbyId(id: number) {
    this.workService.find(id).subscribe((work: IWork) => {
      this.work = work;
      this.newDescription = this.work.description;
    })
  }
  saveTask() {
    if (this.newDescription.length > 5){
      const work = {
        work_id: this.work.work_id,
        description: this.newDescription,
        folder_id: this.work.folder_id
      };
  
      this.workService.save(work).subscribe( (work: IWork) => {
        this.router.navigate(['/work', this.work.folder_id]);
      })
      this.showError = false;
    } else {
      this.showError = true;
    }
  }
}
