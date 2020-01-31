import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Player } from '../player';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  projects
  constructor(private router: Router, private player: Player) { }

  ngOnInit() {
    //get all the project to list on sidebar
    
    this.projects = this.player.getAllProjects();
    //console.log(this.projects)
  }

  navigate2CreateTaskQuicky(){
    let info = {typeID:0}
    this.router.navigate(['/createtask', JSON.stringify(info)]); 
  }

  viewClickedProject(focusProject){
    //console.log(focusTask)
    this.router.navigate(['/viewproject', JSON.stringify(focusProject)]);
  }

}
