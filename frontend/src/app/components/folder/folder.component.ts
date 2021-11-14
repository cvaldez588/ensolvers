import { Component, OnInit } from '@angular/core';
import { FolderService } from 'src/app/service/folder.service';
import { IFolder } from './models/folder';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.scss']
})
export class FolderComponent implements OnInit {
  newFolder: string = '';
  folders: IFolder[] = [];
  showError: boolean = false;

  constructor(private folderService: FolderService) {
  }

  ngOnInit(): void {
    this.getFolders();
  }
  getFolders() {
    this.folderService.getAll().subscribe((folders: IFolder[]) => {
      this.folders = folders;
    })
  }
  addFolder() {
    if (this.newFolder.length > 4){
      this.folderService.save({ description: this.newFolder }).subscribe((folder: IFolder) => {
        this.getFolders();
      })
      this.newFolder = ''; 
      this.showError = false;
    } else {
      this.showError = true;
    }
  }
  removeFolder(folder_id: number) {
    this.folderService.delete(folder_id)
      .subscribe((folder: IFolder) => {
        this.getFolders();
      })
  }

  trackId(index: number, folder: IFolder) {
    return folder.folder_id;
  }
}
