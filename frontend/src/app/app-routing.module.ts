import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditworkComponent } from './components/editwork/editwork.component';
import { FolderComponent } from './components/folder/folder.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { WorkComponent } from './components/work/work.component';

const routes: Routes = [
  { path: 'folder', component: FolderComponent },
  { path: 'work/:id', component: WorkComponent },
  { path: 'edit/:id', component: EditworkComponent},
  { path: '', redirectTo: '/folder', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
