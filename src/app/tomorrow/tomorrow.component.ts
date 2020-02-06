import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { Router } from '@angular/router';
import { format, formatDistance,subDays, eachDayOfInterval, lastDayOfISOWeek, lastDayOfMonth, addDays } from 'date-fns';

@Component({
  selector: 'app-tomorrow',
  templateUrl: './tomorrow.component.html',
  styleUrls: ['./tomorrow.component.css']
})
export class TomorrowComponent implements OnInit {

  constructor(private player: Player, private router: Router) { }

  todaysDate
  tomorrowsTasks
  ngOnInit() {
    let unformattedFocusDay = new Date();
    this.todaysDate = format(unformattedFocusDay, 'yyyy-MM-dd');

    this.viewTodayTasks();

    var endDate = addDays(unformattedFocusDay, 1);
    let money = formatDistance(  endDate, unformattedFocusDay)

    console.log(money);
  }

  viewTodayTasks(){
    this.tomorrowsTasks = this.player.getTomorrowTasks();
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

  taskDelete(focusEleTask){

    if(focusEleTask.task == null || focusEleTask.task == undefined){
      this.player.deleteTask(focusEleTask);
      //console.log(focusEleTask);

    }else{
      this.player.deleteSubTask(focusEleTask);
    }
     this.viewTodayTasks();
     //console.log(this.player.player.tasks);
   }

}
