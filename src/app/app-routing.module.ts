import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChartComponent } from './components/chart/chart.component';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { TestFormsComponent } from './components/test-forms/test-forms.component';
import { IndexComponent } from './components/index/index.component';


const routes: Routes = [
  {path:'index',component:IndexComponent},
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
