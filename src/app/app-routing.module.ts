import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChartComponent } from './components/chart/chart.component';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { TestFormsComponent } from './components/test-forms/test-forms.component';
import { IndexComponent } from './components/index/index.component';
import { CompanyComponent } from './components/company/company.component';
import { MockInterviewComponent } from './components/mock-interview/mock-interview.component';
import { SyllabusComponent } from './components/syllabus/syllabus.component';
import { NotesComponent } from './components/notes/notes.component';



const routes: Routes = [
  {path:'index',component:IndexComponent},
  {path:'company',component:CompanyComponent},
  {path:'syllabus',component:SyllabusComponent},
  {path:'mock-interview',component:MockInterviewComponent},
  {path:'notes',component:NotesComponent},
  {path:'home',component:HomeComponent},
  {path:'admin',component:AdminComponent},
  {path:'add-questions',component:TestFormsComponent},
  {path:'chart',component:ChartComponent},
  {path:'**',component:IndexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
