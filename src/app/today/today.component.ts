import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { Router } from '@angular/router';
import { format, eachDayOfInterval, lastDayOfISOWeek, lastDayOfMonth, addDays } from 'date-fns';


@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {

  constructor(private player: Player, private router: Router) { }

  todaysDate
  todaysTasks
  ngOnInit() {
    let unformattedFocusDay = new Date();
    this.todaysDate = format(unformattedFocusDay, 'yyyy-MM-dd');
    this.viewTodayTasks();

  }

  viewTodayTasks(){
    this.todaysTasks = this.player.getTodayTasks(this.todaysDate);
    //this.todaysTasks = takshold;
  }

  toggleSetTask(key:number, focusEleTask){
    switch(key) {
      case 0:
        // code block switch it to complete
        this.player.setStatusTask(focusEleTask.ID,"done")
        break;
      case 1:
        // switch it to active
        this.player.setStatusTask(focusEleTask.ID,"active")
        break;
    }
   }

   viewClickedTask(focusTask){
    //console.log(focusTask)
    this.player.setNavBackState("inbox","empty");
    this.router.navigate(['/viewtask', JSON.stringify(focusTask)]);
  }

}
