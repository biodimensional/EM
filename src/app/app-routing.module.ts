import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PublicationEntryComponent } from './publication-entry/publication-entry.component';
// import { ProjectsComponent } from './projects/projects.component';
// import { ConferencesComponent } from './conferences/conferences.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'publications', component: PublicationEntryComponent },
  // { path: 'projects', component: ProjectsComponent },
  // { path: 'conferences', component: ConferencesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
