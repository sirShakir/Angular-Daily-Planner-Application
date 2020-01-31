import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { ActivatedRoute, Params , Router} from '@angular/router';

@Component({
  selector: 'app-taskcreate',
  templateUrl: './taskcreate.component.html',
  styleUrls: ['./taskcreate.component.css']
})
export class TaskcreateComponent implements OnInit{
  focustype
  constructor( private player: Player, private route: ActivatedRoute,  private router: Router) { 
   //console.log(this.player)
  }

  ngOnInit() {

    this.route.params.forEach((params: Params) => {
      // either make a quick task or use project id from params
    this.focustype = JSON.parse(params.tasktype);
    
  });
}

  createTask(){
    var x = (document.getElementById("taskName") as HTMLInputElement).value
    var y = (document.getElementById("description") as HTMLInputElement).value
    var z = (document.getElementById("duedate") as HTMLInputElement).value
    //var newTask = new quickTask(x,y,z);
    //console.log(newTask);
    //this.player.addTask(newTask);
   // console.log(this.focustype);
    let newTask;
    switch(this.focustype.typeID) {
      case 0:
        newTask = new quickTask(x,y,z);
        this.player.addTask(newTask);
        this.router.navigate( ['/inbox'] );
        break;
      case 1:
        newTask = new projectTask(x,y,z,this.focustype.projectID);
        this.player.addTask(newTask);
        let sendProject = this.player.findThisProject(this.focustype.projectID);
        this.router.navigate(['/viewproject', JSON.stringify(sendProject)]);
        break;
      case 2:
        newTask = new sectionTask(x,y,z,this.focustype.projectID,this.focustype.sectionID);
        this.player.addTask(newTask);
        let sendProject2 = this.player.findThisProject(this.focustype.projectID);
        this.router.navigate(['/viewproject', JSON.stringify(sendProject2)]);
        break;
      case 3:
        newTask = new subTask(x,y,z,this.focustype.taskID);
        this.player.addSubTask(newTask);
        let sendTask = this.player.findThisTask(this.focustype.taskID);
        this.router.navigate( ['/viewtask', JSON.stringify(sendTask)] );
        break;
    }

    //we can go to inbox, viewtask yup thats it right
    //this.router.navigate( ['/inbox'] );
    //this.router.navigate( ['/viewtask', JSON.stringify(focusEle)] );
    
  }

}

class quickTask{
  ID : number;
  name : string;
  section :number;
  project : number;
  description : string;
  created : Date;
  due : Date;
  level : number;
  status : String;

  constructor(name,description,duedate){
      this.name = name;
      this.description = description;
      this.created = new Date();
      this.due = duedate;
      this.level = 1;
      this.status = "active";
  }
}

class projectTask{
  ID : number;
  name : string;
  section :number;
  project : number;
  description : string;
  created : Date;
  due : Date;
  level : number;
  status : String;

  constructor(name,description,duedate,project){
      this.name = name;
      this.description = description;
      this.created = new Date();
      this.due = duedate;
      this.level = 1;
      this.status = "active";
      this.project = project;
  }
}

class sectionTask{
  ID : number;
  name : string;
  section :number;
  project : number;
  description : string;
  created : Date;
  due : Date;
  level : number;
  status : String;

  constructor(name,description,duedate,project,section){
      this.name = name;
      this.description = description;
      this.created = new Date();
      this.due = duedate;
      this.level = 1;
      this.status = "active";
      this.project = project;
      this.section = section;
  }
}

class subTask{
  ID : number;
  name : string;
  description : string;
  created : Date;
  due : Date;
  level : number;
  status : String;
  task : number

  constructor(name,description,duedate,taskID){
      this.name = name;
      this.description = description;
      this.created = new Date();
      this.due = duedate;
      this.level = 1;
      this.status = "active";
      this.task = taskID;
  }
}
