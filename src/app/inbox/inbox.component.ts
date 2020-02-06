import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {
 
  futureTasks
  constructor(private player: Player, private router: Router) { 
      
  }

  ngOnInit() {
    this.viewInboxTasks();
  }
  viewInboxTasks(){
    let focus = this.player.getInboxTasks();
    this.futureTasks = focus;
    //console.log(this.quickTasks);
  }
  viewClickedTask(focusTask){
    //console.log(focusTask)
    this.player.setNavBackState("inbox","empty");
    this.router.navigate(['/viewtask', JSON.stringify(focusTask)]);
  }

  taskDelete(focusEleTask){

    if(focusEleTask.task == null || focusEleTask.task == undefined){
      this.player.deleteTask(focusEleTask);
      console.log(focusEleTask);

    }else{
      this.player.deleteSubTask(focusEleTask);
    }
     this.viewInboxTasks();
     //console.log(this.player.player.tasks);
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
}
