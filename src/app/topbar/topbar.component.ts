import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { Player } from '../player';
import { Router } from '@angular/router';
@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  
  constructor(private router: Router, private http: HttpClient, private player: Player) { }

  ngOnInit() {
    //console.log("Top bar ngONInit called")
  }

  navigate2CreateTaskQuicky(){
    let info = {typeID:0}
    this.router.navigate(['/createtask', JSON.stringify(info)]);
    
  }

  async savePlayer(){
    console.log(JSON.stringify(this.player.player));
    let url = "/taskit/save";
    let userplayer = JSON.stringify(this.player.player);

    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var json = xhr.responseText;
            //console.log(json);
            Swal.fire({
              icon: 'success',
              text: 'TaskIt Saved',
            })
        }
    };
    var data = userplayer
    xhr.send(data);

  }



  goBackButton(){
    let focusState = this.player.backState;
    switch(focusState) {
      case "task":
        this.router.navigate(['/viewtask', JSON.stringify(this.player.backTask)]);
        break;
      case "inbox":
        this.router.navigate(['/inbox']);
        break;
      case "project":
        this.router.navigate(['/viewproject', JSON.stringify(this.player.backProject)]);
        break;
    }
  }

}
