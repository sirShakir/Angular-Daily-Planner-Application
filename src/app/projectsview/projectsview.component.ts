import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { Router } from '@angular/router';


@Component({
  selector: 'app-projectsview',
  templateUrl: './projectsview.component.html',
  styleUrls: ['./projectsview.component.css']
})
export class ProjectsviewComponent implements OnInit {
  allprojects
  constructor(private player: Player, private router: Router) { }

  ngOnInit() {
    //console.log(this.player);
    console.log(this.player);
    let focus = this.player.getAllProjects();
    this.allprojects = focus;
   //console.log(this.allprojects);

  }

  viewClickedProject(focusProject){
    //console.log(focusTask)
    this.router.navigate(['/viewproject', JSON.stringify(focusProject)]);
  }

  projectSaveNewName(focusProject){
    //console.log(focusProject);
    //get html element value
    let inputNewProjectName = (document.getElementById(focusProject.name) as HTMLInputElement).value
    this.player.updateProjectName(inputNewProjectName,focusProject.ID);
    //console.log(this.player.player.projects);
  }

  projectDelete(focusProject){
    this.player.deleteProject(focusProject);
  }
 

}



