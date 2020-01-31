import { Injectable  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { format, eachDayOfInterval, lastDayOfISOWeek, lastDayOfMonth } from 'date-fns';
var url = "http://localhost:8080/ngGatordone/src/player.json";//"http://localhost/ngMovingProject/src/player.json";
//var url = "/playerplanner/load"; //player.json";//"http://localhost/ngMovingProject/src/player.json";
var valueC = getCookie("gatorc");
var valueP = getCookie("gatorp");
var valueBody = { "codename" : valueC, "pin": valueP};

@Injectable()
export class Player  {
  player : any
  backProject : any
  backTask : any
  backState : String
  //focusTask : number
  //focusSubTask : number
  constructor(private http: HttpClient)  {
    this.ngOnInit();
  }

  async ngOnInit() {
   
  }
  async loadPlayer(){
    return await this.http.get(url)
    .toPromise()
    .then(
      res => { // Success
        this.player = res;
        //console.log("The player is fully loaded");
        //console.log(res);
      }
    );
  }
  addTask(newTask){
    let validID = this.getNextTaskID();
    newTask.ID = validID;
    this.player.tasks.push(newTask);
    //console.log(this.player.tasks);
  }
  addSubTask(newTask){
    let validID = this.getNextSubTaskID();
    newTask.ID = validID;
    this.player.subTasks.push(newTask);
    //console.log(this.player.tasks);
  }
  addSection(newSection){
    let validID = this.getNextSectionID();
    newSection.ID = validID;
    this.player.sections.push(newSection);
    //console.log(this.player.tasks);
  }
  addProject(newProject){
    let validID = this.getNextProjectID();
    newProject.ID = validID;
    this.player.projects.push(newProject);
    //console.log(this.player.projects);
  }
  deleteProject(deleteThisProject){
    let projectIdFocus = deleteThisProject.ID;
    let indexFocus = this.player.projects.indexOf(deleteThisProject);
    this.player.projects.splice(indexFocus,1);
  
    this.deleteSections(projectIdFocus); 
    this.deleteTasks(projectIdFocus);
  }
  deleteSections(focusID){
        
    for(let xy = 0; xy < this.player.sections.length; xy++){

      if(this.player.sections[xy].project == focusID){
        console.log(this.player.sections[xy]);
        let indexFocus = this.player.sections.indexOf(this.player.sections[xy]);
        this.player.sections.splice(indexFocus,1);
        xy --;
      }
    }
  }
  deleteTasks(focusID){
    for(let x = 0; x < this.player.tasks.length; x++){
      if(this.player.tasks[x].project == focusID){
        this.deleteSubTasks(this.player.tasks[x].ID);
        let indexFocus = this.player.tasks.indexOf(this.player.tasks[x]);
        this.player.tasks.splice(indexFocus,1);
        x--;
      }
    }
  }

  deleteTasks4Section(focusIDsection){
    for(let x = 0; x < this.player.tasks.length; x++){
      if(this.player.tasks[x].section == focusIDsection){
        this.deleteSubTasks(this.player.tasks[x].ID);
        let indexFocus = this.player.tasks.indexOf(this.player.tasks[x]);
        this.player.tasks.splice(indexFocus,1);
        x--;
      }
    }
  }
  deleteSubTasks(focusID){
    for(let x = 0; x < this.player.subTasks.length; x++){
      if(this.player.subTasks[x].task == focusID){
        let indexFocus = this.player.subTasks.indexOf(this.player.subTasks[x]);
        this.player.subTasks.splice(indexFocus,1);
        x--
      }
    }
  }
//////////
  deleteTask(deleteThisTask){
    let taskIdFocus = deleteThisTask.ID;
    let newfocutask = this.findThisTask(deleteThisTask.ID);
    let indexFocus = this.player.tasks.indexOf(newfocutask);
    this.player.tasks.splice(indexFocus,1);
    this.deleteSubTasks(taskIdFocus);
  }

  deleteSection(deleteThisSection){
    let sectionIdFocus = deleteThisSection.ID;

    let newfocusection = this.findThisSection(deleteThisSection.ID);
    let indexFocus = this.player.sections.indexOf(newfocusection);
    this.player.sections.splice(indexFocus,1);


    this.deleteTasks4Section(sectionIdFocus);
  }


  deleteSubTask(deleteThisSubTask){
    let taskIdFocus = deleteThisSubTask.ID;
    let newfocutask = this.findThisSubTask(deleteThisSubTask.ID);
    let indexFocus = this.player.subTasks.indexOf(newfocutask);
    this.player.subTasks.splice(indexFocus,1);
  
  }

  getNextTaskID(){
    let validID = false;
    let newID = -1;

    if(this.player.tasks.length > 0){ 
      while(validID == false){ 
        newID++;
        validID = true;
        for(let x = 0; x< this.player.tasks.length; x++){
          if( newID == this.player.tasks[x].ID){
            //console.log("Dont use id number: " + newID);
            validID = false;
          }  
        }// loop through all tasks in player
      }
    }else{
      newID = 0;
    }

    return newID;
  }
  getNextSubTaskID(){
    //console.log(this.player.tasks.length);
    let validID = false;
    let newID = -1;

    if(this.player.subTasks.length > 0){ 
      while(validID == false){ 
        newID++;
        validID = true;
        for(let x = 0; x< this.player.subTasks.length; x++){
          if( newID == this.player.subTasks[x].ID){
            //console.log("Dont use id number: " + newID);
            validID = false;
          }  
        }// loop through all tasks in player
      }
    }else{
      newID = 0;
    }

    return newID;
  }
  getNextSectionID(){
    //console.log(this.player.section.length);
    let validID = false;
    let newID = -1;

    if(this.player.sections.length > 0){ 
      while(validID == false){ 
        newID++;
        validID = true;
        for(let x = 0; x< this.player.sections.length; x++){
          if( newID == this.player.sections[x].ID){
            //console.log("Dont use id number for section: " + newID);
            validID = false;
          }  
        }// loop through all tasks in player
      }
    }else{
      newID = 0;
    }

    return newID;
  }
  getNextProjectID(){
    //console.log(this.player.tasks.length);
    let validID = false;
    let newID = -1;

    if(this.player.projects.length > 0){ 
      while(validID == false){ 
        newID++;
        validID = true;
        for(let x = 0; x< this.player.projects.length; x++){
          if( newID == this.player.projects[x].ID){
            //console.log("Dont use id number for project: " + newID);
            validID = false;
          }  
        }// loop through all projects in player
      }
    }else{
      newID = 0;
    }

    return newID;
  }

  getInboxTasks(){ //loads all tasks with no projects for inbox view
    let inboxTaskStack = [];
      if(this.player){
        for(let x = 0; x< this.player.tasks.length; x++){ 
          if(this.player.tasks[x].project == undefined || this.player.tasks[x].project == null){
            inboxTaskStack.push(this.player.tasks[x]);
          }
        }// loop through all tasks in player
    }
    
    return inboxTaskStack;
  }

  getTodayTasks(focusDate){
    let tasksHolder = [];

    for(let x = 0; x < this.player.tasks.length; x++){
      // console.log(focusDate);
      // console.log(this.player.tasks[x].due);

      if(this.player.tasks[x].due == focusDate){
        tasksHolder.push(this.player.tasks[x]);
      }
    }
    return tasksHolder;
  }

  getMonthsTask(concatDate,focusYear,focusMonth,focusDayDate){
    let tasksHolder = [];

    let startDayOfThisMonth = new Date(focusYear, focusMonth, focusDayDate);
    //let formatedStartDate = format(startDayOfThisWeek, 'yyyy-MM-dd');
    let lastDayOfThisMonth = lastDayOfMonth(new Date(focusYear, focusMonth, focusDayDate));
    //let formatedEndDate = format(lastDayOfThisWeek, 'yyyy-MM-dd');

    var result = eachDayOfInterval({
      start: startDayOfThisMonth,
      end: lastDayOfThisMonth
    });

    //console.log(result);
    
    for( let y=0; y<result.length; y++){
      let formattedFocusDay = format(result[y], 'yyyy-MM-dd');
      //console.log(formattedFocusDay);

      for(let x = 0; x < this.player.tasks.length; x++){
         if(this.player.tasks[x].due == formattedFocusDay){
           tasksHolder.push(this.player.tasks[x]);
         }
      }//end of for loop

    }

    return tasksHolder;
  }

  getWeeksTask(concatDate,focusYear,focusMonth,focusDayDate){
    let tasksHolder = [];

    let startDayOfThisWeek = new Date(focusYear, focusMonth, focusDayDate);
    //let formatedStartDate = format(startDayOfThisWeek, 'yyyy-MM-dd');
    let lastDayOfThisWeek = lastDayOfISOWeek(new Date(focusYear, focusMonth, focusDayDate));
    //let formatedEndDate = format(lastDayOfThisWeek, 'yyyy-MM-dd');

    var result = eachDayOfInterval({
      start: startDayOfThisWeek,
      end: lastDayOfThisWeek
    });

    //console.log(result);
    
    for( let y=0; y<result.length; y++){
      let formattedFocusDay = format(result[y], 'yyyy-MM-dd');
     // console.log(formattedFocusDay);

      for(let x = 0; x < this.player.tasks.length; x++){
         if(this.player.tasks[x].due == formattedFocusDay){
           tasksHolder.push(this.player.tasks[x]);
         }
      }//end of for loop

    }

    return tasksHolder;
  }

  getAllProjects(){

    return this.player.projects;
  }

  getAllSections(){
    return this.player.sections;
  }

  getAllTasks4Project(focusID : number){ //loads all tasks with no projects for inbox view
    //console.log(this.player);
    let inboxTaskStack = [];
      if(this.player){
        for(let x = 0; x< this.player.tasks.length; x++){ 
          if(this.player.tasks[x].project == focusID ){
            //console.log(focusID);
            inboxTaskStack.push(this.player.tasks[x]);
          }
        }// loop through all tasks in player
    }
    
    return inboxTaskStack;
  }

  getAllSubTasks4Task(focusTaskID){
    let inboxTaskStack = [];
    if(this.player){
      for(let x = 0; x< this.player.subTasks.length; x++){ 
        if(this.player.subTasks[x].task == focusTaskID ){
          //console.log(this.player.subTasks);
          inboxTaskStack.push(this.player.subTasks[x]);
        }
      }// loop through all tasks in player
  }
  
  return inboxTaskStack;
  }

  getAllSections4Project(focusID){
    let inboxSectionStack = [];
    if(this.player){
      for(let x = 0; x< this.player.sections.length; x++){ 
        if(this.player.sections[x].project == focusID ){
          //console.log(focusID);
          inboxSectionStack.push(this.player.sections[x]);
        }
      }// loop through all tasks in player
  }
  return inboxSectionStack;
  }

  updateProjectName(newProjectName,focusProjectID){

    for(let x=0; x<this.player.projects.length; x++){
      if(this.player.projects[x].ID == focusProjectID){
        this.player.projects[x].name = newProjectName;
        break;
      }
    }

  }

  updateTaskData(thisfocusID,focusTaskname,focusTaskdue,focusTasklevel,focusTaskdescription){
    for(let x=0; x<this.player.tasks.length; x++){
      if(this.player.tasks[x].ID == thisfocusID){
        this.player.tasks[x].name = focusTaskname;
        this.player.tasks[x].due = focusTaskdue;
        this.player.tasks[x].level = focusTasklevel;
        this.player.tasks[x].description = focusTaskdescription;
        break;
      }
    }
  }

  updateSubTaskData(thisfocusID,focusTaskname,focusTaskdue,focusTasklevel,focusTaskdescription){
    for(let x=0; x<this.player.subTasks.length; x++){
      if(this.player.subTasks[x].ID == thisfocusID){
        this.player.subTasks[x].name = focusTaskname;
        this.player.subTasks[x].due = focusTaskdue;
        this.player.subTasks[x].level = focusTasklevel;
        this.player.subTasks[x].description = focusTaskdescription;
        break;
      }
    }
  }

  updateSectionData(dataSectionID, dataSectionName){
    for(let x=0; x<this.player.sections.length; x++){
      if(this.player.sections[x].ID == dataSectionID){
        this.player.sections[x].name = dataSectionName;
        break;
      }
    }
  }

  findThisTask(thisID: number){
    //console.log(thisID);
    
    for(let x=0; x < this.player.tasks.length; x++){
      if(this.player.tasks[x].ID == thisID){
        return this.player.tasks[x];
      }
    }
  }

  findThisSection(thisID: number){
    for(let x=0; x < this.player.sections.length; x++){
      if(this.player.sections[x].ID == thisID){
        return this.player.sections[x];
      }
    }
  }

  findThisSubTask(thisID:number){
    for(let x=0; x < this.player.subTasks.length; x++){
      if(this.player.subTasks[x].ID == thisID){
        return this.player.subTasks[x];
      }
    }
  }

  findThisProject(thisID:number){
    
     for(let z=0; z< this.player.projects.length; z++){
      // console.log(this.player.projects[z].ID);
      // console.log(thisID);
        if(this.player.projects[z].ID == thisID){
         return this.player.projects[z];
       }

    }
  }

  setNavBackState(codekey:String,typeOBJ:any){
    switch(codekey) {
      case "task":
        // code block
        this.backTask = typeOBJ;
        this.backState = "task";
        break;
      case "inbox":
        // code block
        this.backState = "inbox";
        break;
      case "project":
        // code block
        this.backState = "project";
        this.backProject = typeOBJ;
        break;
    }
  }

  setStatusTask(thisID:number, someStatus:String){

    for(let z = 0; z< this.player.tasks.length; z++){
      if(this.player.tasks[z].ID == thisID){
        this.player.tasks[z].status = someStatus;
        break;
      }
    }
    
  }

  setStatusSubTask(thisID:number, someStatus:String){

    for(let z = 0; z< this.player.subTasks.length; z++){
      if(this.player.subTasks[z].ID == thisID){
        this.player.subTasks[z].status = someStatus;
        break;
      }
    }
    
  }

}


function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}


