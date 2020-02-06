import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { Router } from '@angular/router';

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.css']
})
export class MonthComponent implements OnInit {
  todaysDate
  monthsTasks
  constructor(private player: Player, private router: Router) { }

  ngOnInit() {
    let tempFullDate = new Date();
    let tempYear = tempFullDate.getFullYear();
    let tempMonth =  tempFullDate.getMonth() + 1 + "";
    if(tempMonth.length == 1 ){
      tempMonth = "0"+tempMonth;
    }
    let tempDate = tempFullDate.getDate();
    this.todaysDate = tempYear + "-" + tempMonth + "-" + tempDate;


    //console.log(this.todaysDate);
    this.viewMonthsTasks();
  }


  viewMonthsTasks(){
    let tempFullDate = new Date();
    let tempYear = tempFullDate.getFullYear();
    let tempMonth =  tempFullDate.getMonth() + "";
    if(tempMonth.length == 1 ){
      tempMonth = "0"+tempMonth;
    }
    let tempDate = tempFullDate.getDate();

    //this.monthsTasks = this.player.getMonthsTask(this.todaysDate,tempYear,tempMonth,tempDate);
    this.monthsTasks = this.player.getMonthsTask();

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
     this.viewMonthsTasks();
     //console.log(this.player.player.tasks);
   }

}
