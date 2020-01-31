import { Component, OnInit } from '@angular/core';
import { Player } from '../player';

@Component({
  selector: 'app-projectcreate',
  templateUrl: './projectcreate.component.html',
  styleUrls: ['./projectcreate.component.css']
})
export class ProjectcreateComponent implements OnInit {

  constructor(private player: Player) { }

  ngOnInit() {
  }

 createProject(){
    var x = (document.getElementById("taskName") as HTMLInputElement).value
    var newProject = new Project(x);
    //console.log(newTask);
    this.player.addProject(newProject);
    
  } 

}


class Project{
  ID : Number 
  name: String
  constructor(name){
      this.name =  name;
  }
}