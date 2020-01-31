import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router} from '@angular/router';
import { Player } from '../player';

@Component({
  selector: 'app-projectview',
  templateUrl: './projectview.component.html',
  styleUrls: ['./projectview.component.css']
})
export class ProjectviewComponent implements OnInit {

  focusproject
  focussections
  focustasks
  focusCombo

  zeroTasks
  sectionTasks

  allprojects
  focusID
  constructor(private route: ActivatedRoute, private router: Router, private player: Player) { }

  ngOnInit() {
    
    this.route.params.forEach((params: Params) => {
    this.focusproject = JSON.parse(params.project);
    this.focusID = this.focusproject.ID;

    this.focussections = this.player.getAllSections4Project(this.focusID);
    this.focustasks = this.player.getAllTasks4Project(this.focusID);

    this.zeroTasks = this.getZeroTasks();
    this.sectionTasks = this.getSectionTasks();
  });
}

getZeroTasks(){
  let thisArray = []
  for(let x = 0; x< this.focustasks.length; x++){
    if(this.focustasks[x].section == null || this.focustasks[x].section ==undefined ){
      thisArray.push(this.focustasks[x]);
    }
  }
  return thisArray;
}

getSectionTasks(){
  let thisArray = []
  for(let x = 0; x< this.focustasks.length; x++){
    if((this.focustasks[x].section != null || this.focustasks[x].section != undefined) && this.focustasks[x].section >= 0 ){
      thisArray.push(this.focustasks[x]);
    }
  }
  return thisArray;
}

navigate2CreateTaskProject(){
  console.log(this.focusproject.ID);
  let info = {typeID:1, projectID: this.focusproject.ID}
  this.router.navigate(['/createtask', JSON.stringify(info)]);
}

navigate2CreateTaskSection(infoID :number){
  let info = {typeID:2, projectID: this.focusproject.ID, sectionID: infoID}
  //console.log(info);
  this.router.navigate(['/createtask', JSON.stringify(info)]);
}

viewClickedTask(focusEle){
  this.player.setNavBackState("project",this.focusproject);
  this.router.navigate(['/viewtask', JSON.stringify(focusEle)]);
}

createSection4Project(){
  let inputSectionName = (document.getElementById("sectionName") as HTMLInputElement).value
  let newSection = new Section(inputSectionName,this.focusproject.ID)
  this.player.addSection(newSection);

  this.focussections = this.player.getAllSections4Project(this.focusID);//.push(newSection);
  //this.sectionTasks.push(newSection)
   console.log(newSection)
  
}

taskDelete(focusEleTask){
 //console.log(focusEleTask);
  this.player.deleteTask(focusEleTask);
  this.focustasks = this.player.getAllTasks4Project(this.focusID);
  this.zeroTasks = this.getZeroTasks();
  this.sectionTasks = this.getSectionTasks();

  //console.log(this.player.player.tasks);
}

sectionDelete(focusEleSection){
  this.player.deleteSection(focusEleSection);
  this.focussections = this.player.getAllSections4Project(this.focusID);
  this.focustasks = this.player.getAllTasks4Project(this.focusID);
  this.zeroTasks = this.getZeroTasks();
  this.sectionTasks = this.getSectionTasks();
}

sectionSave(focusEleSection){
  let focusSectionName = (document.getElementById("sectionName") as HTMLInputElement).value
  this.player.updateSectionData(focusEleSection.ID, focusSectionName);
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

class Section{
  name: string
  ID: number
  project: number
  constructor(name,project){
    this.name = name;
    this.project = project
  }
}

class Project{
  ID : Number 
  name: String
  constructor(name){
      this.name =  name;
  }
}

// createProject(){
//   let x = "Liltte timmy turner";
//   let newProject = new Project(x);
//   this.player.addProject(newProject);
  
// }