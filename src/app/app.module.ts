import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { Player } from './player';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { InboxComponent } from './inbox/inbox.component';
import { ProjectcreateComponent } from './projectcreate/projectcreate.component';
import { TaskcreateComponent } from './taskcreate/taskcreate.component';
import { LandingComponent } from './landing/landing.component';
import { TaskviewComponent } from './taskview/taskview.component';
import { ProjectsviewComponent } from './projectsview/projectsview.component';
import { ProjectviewComponent } from './projectview/projectview.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule } from  '@angular/material';
import { TodayComponent } from './today/today.component';
import { WeekComponent } from './week/week.component';
import { MonthComponent } from './month/month.component';
import { TomorrowComponent } from './tomorrow/tomorrow.component';
import { QuicktasksviewComponent } from './quicktasksview/quicktasksview.component';
import { OverdueComponent } from './overdue/overdue.component';

export function initializeApp1(player: Player) {
  return (): Promise<any> => { 
    return player.loadPlayer();
  }
}

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    SidebarComponent,
    InboxComponent,
    ProjectcreateComponent,
    TaskcreateComponent,
    LandingComponent,
    TaskviewComponent,
    ProjectsviewComponent,
    ProjectviewComponent,
    TodayComponent,
    WeekComponent,
    MonthComponent,
    TomorrowComponent,
    QuicktasksviewComponent,
    OverdueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [  Player,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp1,
      multi: true,
      deps: [ Player ]
    }],
  bootstrap: [AppComponent]
})


export class AppModule {

 }
