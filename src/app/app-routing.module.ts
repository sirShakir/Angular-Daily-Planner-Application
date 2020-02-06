import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InboxComponent } from './inbox/inbox.component';
import { TodayComponent } from './today/today.component';
import { TomorrowComponent } from './tomorrow/tomorrow.component';
import { WeekComponent } from './week/week.component';
import { MonthComponent } from './month/month.component';

import { TaskcreateComponent } from './taskcreate/taskcreate.component';
import { ProjectcreateComponent } from './projectcreate/projectcreate.component';
import { ProjectsviewComponent } from './projectsview/projectsview.component';
import { ProjectviewComponent } from './projectview/projectview.component';

import { LandingComponent } from './landing/landing.component';
import { TaskviewComponent } from './taskview/taskview.component';
import { QuicktasksviewComponent } from './quicktasksview/quicktasksview.component';
import { OverdueComponent } from './overdue/overdue.component';


const routes: Routes = [
  { path: '', component: LandingComponent },//load inbox component by default
  { path: 'inbox', component: InboxComponent },
  { path: 'today', component: TodayComponent },
  { path: 'tomorrow', component: TomorrowComponent },
  { path: 'week', component: WeekComponent },
  { path: 'month', component: MonthComponent },
  { path: 'overdue', component: OverdueComponent },
  { path: 'createtask/:tasktype', component: TaskcreateComponent },
  { path: 'createproject', component: ProjectcreateComponent },
  { path: 'viewtask/:task', component: TaskviewComponent },
  { path: 'viewproject/:project', component: ProjectviewComponent },
  { path: 'viewprojects', component: ProjectsviewComponent },
  { path: 'quicktasksview', component: QuicktasksviewComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
