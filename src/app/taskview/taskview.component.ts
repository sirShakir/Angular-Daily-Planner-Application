import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Player } from '../player';

@Component({
  selector: 'app-taskview',
  templateUrl: './taskview.component.html',
  styleUrls: ['./taskview.component.css']
})
export class TaskviewComponent implements OnInit {

  focusTask
  subTasks
  subToggle
  constructor(private route: ActivatedRoute, private player: Player, private router: Router) { }

  ngOnInit() {

      this.route.params.forEach((params: Params) => {
        let thish = JSON.parse(params.task);

      if(thish.type == "subTask"){
        let tempfocus = JSON.parse(params.task);      
        this.focusTask = tempfocus.task;  
        //console.log("subtask view was loaded");
        this.subToggle = false;

      }else{
        this.focusTask = JSON.parse(params.task);
        this.subTasks = this.player.getAllSubTasks4Task(this.focusTask.ID);
       // console.log("regular view was loaded");
        this.subToggle = true;
      }


    });
  }


  navigate2CreateSubTask(){
    //console.log(this.focusTask.ID);
    let info = {typeID:3, taskID: this.focusTask.ID}
    this.router.navigate(['/createtask', JSON.stringify(info)]);
  }

  viewClickedSubTask(focusEleSubTask){
    this.subTasks = null;
    let folder = {type: "subTask", task: focusEleSubTask }
    //console.log(focusEleSubTask);
    this.player.setNavBackState("task",this.focusTask);
    this.router.navigate(['/viewtask', JSON.stringify(folder)]);
  }

  taskDelete(thisfocusTask){
  
    //route back to the correct project page after you delete the task
    
    //subsTask -> Tasks with no projects -> Project Tasks
    if(thisfocusTask.task >= 0 ){
     let focusTask = this.player.findThisTask(thisfocusTask.task);

     this.router.navigate(['/viewtask', JSON.stringify(focusTask)]);
     this.player.deleteSubTask(thisfocusTask);
     //console.log(this.player.player)

    }
    else
    if(thisfocusTask.project == null || thisfocusTask.project == undefined){
      //route back to indbox page or something
      this.router.navigate(['/inbox']);
      this.player.deleteTask(thisfocusTask);

    }
    else{
      let focusProjectID = thisfocusTask.project;
      let focusProject = this.player.findThisProject(focusProjectID);
      //route back to proper project view page
      this.router.navigate(['/viewproject', JSON.stringify(focusProject)]);
      this.player.deleteTask(thisfocusTask);
    }

   
  }

  subTaskDeleteDropdown(thisFocusSubTask){
    this.player.deleteSubTask(thisFocusSubTask);
    this.subTasks = this.player.getAllSubTasks4Task(this.focusTask.ID);
  }

  taskSaveNewData(thisfocusTask){
    let focusTaskname = (document.getElementById("focusTaskname") as HTMLInputElement).value
    let focusTaskdue = (document.getElementById("focusTaskdue") as HTMLInputElement).value
    let focusTasklevel = (document.getElementById("focusTasklevel") as HTMLInputElement).value
    //let focusTaskcreated = (document.getElementById("focusTaskcreated") as HTMLInputElement).value
    let focusTaskdescription = (document.getElementById("focusTaskdescription") as HTMLInputElement).value

    this.player.updateTaskData(thisfocusTask.ID,focusTaskname,focusTaskdue,focusTasklevel,focusTaskdescription);
  }

  subTaskSaveNewData(thisfocusSubTask){
    
    let focusTaskname = (document.getElementById("focusTaskname") as HTMLInputElement).value
    let focusTaskdue = (document.getElementById("focusTaskdue") as HTMLInputElement).value
    let focusTasklevel = (document.getElementById("focusTasklevel") as HTMLInputElement).value
    //let focusTaskcreated = (document.getElementById("focusTaskcreated") as HTMLInputElement).value
    let focusTaskdescription = (document.getElementById("focusTaskdescription") as HTMLInputElement).value

    this.player.updateSubTaskData(thisfocusSubTask.ID,focusTaskname,focusTaskdue,focusTasklevel,focusTaskdescription);
  }

  toggleSetSubTask(key:number, focusEleTask){
    switch(key) {
      case 0:
        // code block switch it to complete
        this.player.setStatusSubTask(focusEleTask.ID,"done")
        break;
      case 1:
        // switch it to active
        this.player.setStatusSubTask(focusEleTask.ID,"active")
        break;
    }
   }

}
