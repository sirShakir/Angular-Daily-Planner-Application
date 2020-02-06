import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { Router } from '@angular/router';

@Component({
  selector: 'app-overdue',
  templateUrl: './overdue.component.html',
  styleUrls: ['./overdue.component.css']
})
export class OverdueComponent implements OnInit {
  overdueTasks
  constructor(private player: Player, private router: Router) { }

  ngOnInit() {
    this.viewOverdueTasks();
  }

  viewOverdueTasks(){
    this.overdueTasks = this.player.getOverdueTasks();
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
     this.viewOverdueTasks();
     //console.log(this.player.player.tasks);
   }
}
