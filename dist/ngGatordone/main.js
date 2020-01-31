(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<mat-sidenav-container class=\"example-container\">\n  <mat-sidenav #sidenav mode=\"side\" [(opened)]=\"opened\" (opened)=\"events.push('open!')\"\n               (closed)=\"events.push('close!')\" id=\"sidebar\">\n    <app-sidebar ></app-sidebar>\n  </mat-sidenav>\n\n\n\n<div class=\"container\">\n  <div id=\"topbarContainer\" class=\"row\" >\n    <div class=\"col-4\" (click)=\"sidenav.toggle()\">\n      G Logo\n    </div>\n    <div class=\"col-8\">\n      <app-topbar id=\"topbar\"></app-topbar>\n    </div>\n  </div>\n\n\n  <div class=\"row\">\n      <div id=\"routerbar\" class=\"col-12\">\n        <router-outlet></router-outlet>\n      </div>\n  </div>\n\n</div>\n\n\n</mat-sidenav-container>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/inbox/inbox.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/inbox/inbox.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>All quick tasks</p>\n\n<style>\n.makeInline{\n    display: inline-block;\n}\n.divider{\n    border-bottom-style:ridge;\n}\n</style>\n\n<div *ngFor=\"let task of quickTasks\" class=\"divider\">\n\n  <div *ngIf=\"task.status == 'done'\"  style=\"color: blue; opacity: .7;\">\n\n    <h4 style=\"display:inline-block;\" (click)=\"viewClickedTask(task)\" >{{task.name}}</h4>\n          <div class=\"dropdown makeInline\" style=\"float: right;\">\n                <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                  {{task.status}}\n                </button>\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n                  <span class=\"dropdown-item\" (click)=\"toggleSetTask(0,task)\">Complete</span>\n                  <span class=\"dropdown-item\" (click)=\"toggleSetTask(1,task)\">Active</span>\n                  <span class=\"dropdown-item\" (click)=\"taskDelete(task)\">Delete</span>\n                </div>\n            </div>\n           <!-- <span style=\"float: right;\">Due : {{task.due}} Priority : {{task.level}}</span>  -->\n  </div>\n\n  <div *ngIf=\"task.status == 'active'\">\n\n    <h4 style=\"display:inline-block;\" (click)=\"viewClickedTask(task)\" >{{task.name}}</h4>\n          <div class=\"dropdown makeInline\" style=\"float: right;\">\n                <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                  {{task.status}}\n                </button>\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n                  <span class=\"dropdown-item\" (click)=\"toggleSetTask(0,task)\">Complete</span>\n                  <span class=\"dropdown-item\" (click)=\"toggleSetTask(1,task)\">Active</span>\n                  <span class=\"dropdown-item\" (click)=\"taskDelete(task)\">Delete</span>\n                </div>\n            </div>\n            <span style=\"float: right;\">Due : {{task.due}} Priority : {{task.level}}</span>  \n  </div>\n\n\n</div>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing/landing.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/landing/landing.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>This is Zen Garden. This would be the container zen apps. The first zen app is inputnews </p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/month/month.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/month/month.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<p>Monthly task</p>\n\n<style>\n.makeInline{\n    display: inline-block;\n}\n.divider{\n    border-bottom-style:ridge;\n}\n</style>\n\n<div *ngFor=\"let task of monthsTasks\" class=\"divider\">\n\n  <div *ngIf=\"task.status == 'done'\"  style=\"color: blue; opacity: .7;\">\n\n    <h4 style=\"display:inline-block;\" (click)=\"viewClickedTask(task)\" >{{task.name}}</h4>\n          <div class=\"dropdown makeInline\" style=\"float: right;\">\n                <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                  {{task.status}}\n                </button>\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n                  <span class=\"dropdown-item\" (click)=\"toggleSetTask(0,task)\">Complete</span>\n                  <span class=\"dropdown-item\" (click)=\"toggleSetTask(1,task)\">Active</span>\n                  <span class=\"dropdown-item\" (click)=\"taskDelete(task)\">Delete</span>\n                </div>\n            </div>\n           <!-- <span style=\"float: right;\">Due : {{task.due}} Priority : {{task.level}}</span>  -->\n  </div>\n\n  <div *ngIf=\"task.status == 'active'\">\n\n    <h4 style=\"display:inline-block;\" (click)=\"viewClickedTask(task)\" >{{task.name}}</h4>\n          <div class=\"dropdown makeInline\" style=\"float: right;\">\n                <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                  {{task.status}}\n                </button>\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n                  <span class=\"dropdown-item\" (click)=\"toggleSetTask(0,task)\">Complete</span>\n                  <span class=\"dropdown-item\" (click)=\"toggleSetTask(1,task)\">Active</span>\n                  <span class=\"dropdown-item\" (click)=\"taskDelete(task)\">Delete</span>\n                </div>\n            </div>\n            <span style=\"float: right;\">Due : {{task.due}} Priority : {{task.level}}</span>  \n  </div>\n\n\n</div>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/projectcreate/projectcreate.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/projectcreate/projectcreate.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>project create works!</p>\n\n\n<label>Project Name:</label>\n<input type=\"text\" id=\"taskName\" value=\"\">\n<button type=\"button\" class=\"btn btn-primary\" (click)=\"createProject()\">Create</button>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/projectsview/projectsview.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/projectsview/projectsview.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>projects all view works!</p>\n\n<style>\n.projectlisting{\n    border-style:ridge;\n    height:  15%;\n}\nimg{\n    float: right;\n}\ninput{\n    height: 100%;\n    width: 30%;\n    border-style: none;\n    background-color: black;\n    color: white;\n}\n</style>\n\n\n\n\n<div *ngFor=\"let project of allprojects\" class=\"projectlisting\">\n    <input type=\"text\" id=\"{{project.name}}\" value=\"{{project.name}}\">\n    <img (click)=\"projectDelete(project)\" src=\"assets/delete.png\" alt=\"deleteproject\" width=\"50\" height=\"100%\">\n    <img (click)=\"projectSaveNewName(project)\" src=\"assets/save.png\" alt=\"saveproject\" width=\"50\" height=\"100%\" >\n    <img (click)=\"viewClickedProject(project)\" src=\"assets/folder.webp\" alt=\"openproject\" width=\"50\" height=\"100%\">\n</div>\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/projectview/projectview.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/projectview/projectview.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<div style=\"overflow: auto;\">\n\n  <h4>{{this.focusproject.name}}</h4>\n  <img src=\"https://upload.wikimedia.org/wikipedia/commons/a/a2/Icon_Add_256x256.png\" alt=\"addtask\" width=\"42\" height=\"42\" (click)=\"navigate2CreateTaskProject()\">Add task \n  <img style=\"float:right;\" src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/More_Icon_C.svg/768px-More_Icon_C.svg.png\n  \" alt=\"addtask\" width=\"42\" height=\"42\" (click)=\"createSection4Project()\" > \n  <input type=\"text\" id=\"sectionName\" value=\"Add section\" style=\"float:right;\">\n  \n    \n  </div>\n  \n  <style>\n  input{\n    text-align: center;\n  }\n  .divider{\n      border-bottom-style:ridge;\n  }\n  .divMax{\n      height: 100%;\n      width: 100%;\n  }\n  .floatRightTHings{\n      float: right;\n  }\n  .makeInline{\n      display: inline-block;\n  }\n  .makeCenterInDiv{\n    display: flex;\n  align-items: center;\n  justify-content: center;\n  }\n  .container{\n      padding: 0;\n  }\n  .fixit{\n    padding: 0;\n    border-style: none;\n  }\n  @media (min-width: 576px){\n    .container{\n        max-width: none; \n    }     \n}\n  </style>\n  \n  \n\n<div *ngFor=\"let task of zeroTasks\"  class=\"divider\">   \n  \n  <div *ngIf=\"task.status == 'done'\"  style=\"color: blue; opacity: .7;\">\n            <h4 style=\"display:inline-block;\" (click)=\"viewClickedTask(task)\">{{task.name}}</h4>\n            <div class=\"dropdown makeInline\" style=\"float: right;\">\n                <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                  \n                </button>\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n                  <span class=\"dropdown-item\" (click)=\"toggleSetTask(0,task)\">Complete</span>\n                  <span class=\"dropdown-item\" (click)=\"toggleSetTask(1,task)\">Active</span>\n                  <span class=\"dropdown-item\" (click)=\"taskDelete(task)\">Delete</span>\n                </div>\n              </div>\n\n    </div>\n\n    <div *ngIf=\"task.status == 'active'\">\n      <h4 style=\"display:inline-block;\" (click)=\"viewClickedTask(task)\">{{task.name}}</h4>\n      <div class=\"dropdown makeInline\" style=\"float: right;\">\n          <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            \n          </button>\n          <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n            <span class=\"dropdown-item\" (click)=\"toggleSetTask(0,task)\">Complete</span>\n            <span class=\"dropdown-item\" (click)=\"toggleSetTask(1,task)\">Active</span>\n            <span class=\"dropdown-item\" (click)=\"taskDelete(task)\">Delete</span>\n          </div>\n        </div>\n      <span style=\"float: right;\">Due : {{task.due}} Priority : {{task.level}}</span>  \n</div>\n\n</div>\n  \n  \n<div *ngFor=\"let section of focussections\" ><br><br>\n\n\n  <div class=\"dropdown makeCenterInDiv\">\n    <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n      {{section.name}}\n    </button>\n    <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n      <span class=\"dropdown-item\" (click)=\"sectionSave(section)\">Edit</span>\n      <span class=\"dropdown-item\" (click)=\"sectionDelete(section)\">Delete</span>\n    </div>\n  </div>\n  \n  <img (click)=\"navigate2CreateTaskSection(section.ID)\"  src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Toicon-icon-pictogram-add.svg/1024px-Toicon-icon-pictogram-add.svg.png\" alt=\"addtask\" width=\"42\" height=\"42\">\n  \n  <div *ngFor=\"let task of sectionTasks\" >\n\n    <div *ngIf=\"task.section == section.ID\" class=\"divider\">\n\n      <div *ngIf=\"task.status == 'done'\"  style=\"color: blue; opacity: .7;\">\n\n        <h4 style=\"display:inline-block;\" (click)=\"viewClickedTask(task)\" >{{task.name}}</h4>\n        <div class=\"dropdown makeInline\" style=\"float: right;\">\n            <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n              \n            </button>\n            <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n              <span class=\"dropdown-item\" (click)=\"toggleSetTask(0,task)\">Complete</span>\n              <span class=\"dropdown-item\" (click)=\"toggleSetTask(1,task)\">Active</span>\n              <span class=\"dropdown-item\" (click)=\"taskDelete(task)\">Delete</span>\n            </div>\n        </div>\n \n      </div>\n\n      <div *ngIf=\"task.status == 'active'\" >\n\n        <h4 style=\"display:inline-block;\" (click)=\"viewClickedTask(task)\" >{{task.name}}</h4>\n        <div class=\"dropdown makeInline\" style=\"float: right;\">\n            <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n              \n            </button>\n            <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n              <span class=\"dropdown-item\" (click)=\"toggleSetTask(0,task)\">Complete</span>\n              <span class=\"dropdown-item\" (click)=\"toggleSetTask(1,task)\">Active</span>\n              <span class=\"dropdown-item\" (click)=\"taskDelete(task)\">Delete</span>\n            </div>\n        </div>\n        <span style=\"float: right;\">Due : {{task.due}} Priority : {{task.level}}</span>  \n      </div>\n\n    </div>\n        \n  </div>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sidebar/sidebar.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sidebar/sidebar.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a  routerLink=\"\">Zen</a><br><br>\n<a  routerLink=\"/inbox\" >Inbox</a><br>\n<a  routerLink=\"/today\">Today</a><br>\n<a  routerLink=\"/week\">Week</a><br>\n<a  routerLink=\"/month\">Month</a><br>\n<a  (click)=\"navigate2CreateTaskQuicky()\">Add Quick Task</a><br><br>\n\n<h5>Projects</h5>\n<a  routerLink=\"/createproject\">Add Project</a><br>\n<a  routerLink=\"/viewprojects\">View Projects</a><br>\n<span *ngFor=\"let project of projects\"  (click)=\"viewClickedProject(project)\">\n        <a>{{project.name}}</a><br>\n</span><br><br>\n\n<!--\n<h5>Filters</h5>\n<a  href=\"#\">Priority 1</a><br>\n<a  href=\"#\">Priority 2</a><br>\n<a  href=\"#\">Labels</a>\n-->\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/taskcreate/taskcreate.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/taskcreate/taskcreate.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>Create a quick Task</p>\n<label>Task Name:</label>\n<input type=\"text\" id=\"taskName\" value=\"title\"><br>\n<input type=\"text\" id=\"description\" value=\"description\"><br>\n<input type=\"date\" id=\"duedate\" value=\"\"><br>\n<button type=\"button\" class=\"btn btn-primary\" (click)=\"createTask()\">Create</button>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/taskview/taskview.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/taskview/taskview.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<style>\n    .h4center{\n        text-align: center;\n    }\n\n.divider{\n    border-bottom-style:ridge;\n}\n.divMax{\n    height: 100%;\n    width: 100%;\n}\n.floatRightTHings{\n    float: right;\n}\n.makeInline{\n    display: inline-block;\n}\ninput {\n    display: block;\n    width: 100%;\n}\n.scription{\n    height: 100%;\n}\n.container{\n    padding: 0;\n}\n.taa{\n    display: block;\n    height: 50%;  \n    width: 100%;\n}\n.spanny{\n    display: block;\n    text-align: center;\n    height: 25%;   \n    width: 100%;\n}\n.spanny0{\n    display: block;\n    text-align: center;\n    width: 100%;\n}\n@media (min-width: 576px){\n    .container{\n        max-width: none; \n    }     \n}\n</style>\n        \n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-6\">\n            <span class=\"spanny0\">Name</span>\n            <input type=\"text\" id=\"focusTaskname\" value=\"{{focusTask.name}}\">\n            <span class=\"spanny0\">Due</span>\n            <input type=\"date\" id=\"focusTaskdue\" value=\"{{focusTask.due}}\">\n            <span class=\"spanny0\">Level</span>\n            <input type=\"number\" id=\"focusTasklevel\" value=\"{{focusTask.level}}\">\n            <span class=\"spanny0\">Status</span>\n            <div>{{focusTask.status}}</div>\n            <span class=\"spanny0\">Created</span>\n            <div>{{focusTask.created}}</div>\n        </div>\n\n        <div class=\"col-6\">\n            <span class=\"spanny\">Description</span>\n            <textarea  type=\"textarea\" class=\"taa\" id=\"focusTaskdescription\" value=\"{{focusTask.description}}\" >\n            </textarea>\n            <img *ngIf=\"subToggle\" (click)=\"navigate2CreateSubTask(focusTask.ID)\"  src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Toicon-icon-pictogram-add.svg/1024px-Toicon-icon-pictogram-add.svg.png\" alt=\"addtask\" width=\"42\" height=\"42\">\n            <img style=\"float: right;\" (click)=\"taskDelete(focusTask)\" src=\"https://upload.wikimedia.org/wikipedia/en/thumb/5/58/Icon_delete_yellow.svg/320px-Icon_delete_yellow.svg.png\" alt=\"deleteproject\" width=\"50\" >\n            <img *ngIf=\"subToggle\" style=\"float: right;\" (click)=\"taskSaveNewData(focusTask)\" src=\"assets/save.png\" alt=\"saveproject\" width=\"50\" >   \n            <img *ngIf=\"subToggle == false\" style=\"float: right;\" (click)=\"subTaskSaveNewData(focusTask)\" src=\"assets/save.png\" alt=\"saveproject\" width=\"50\" >   \n        </div>\n    </div>\n</div>\n\n  \n\n<br><br>\n<h4  class=\"h4center\" *ngIf=\"subToggle\">Sub Tasks</h4>\n\n\n<div *ngFor=\"let subTask of subTasks\"  class=\"divider\">\n    <div *ngIf=\"subTask.task == focusTask.ID\">\n\n\n        <div *ngIf=\"subTask.status == 'done'\"  style=\"color: blue; opacity: .7;\">\n\n        <h4 style=\"display:inline-block;\" (click)=\"viewClickedSubTask(subTask)\">{{subTask.name}}</h4>\n        <div class=\"dropdown makeInline\" style=\"float: right;\">\n            <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n              Set\n            </button>\n            <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n                <span class=\"dropdown-item\" (click)=\"toggleSetSubTask(0,subTask)\">Complete</span>\n                <span class=\"dropdown-item\" (click)=\"toggleSetSubTask(1,subTask)\">Active</span>\n              <span class=\"dropdown-item\" (click)=\"subTaskDeleteDropdown(subTask)\">Delete</span>\n            </div>\n        </div>\n\n        </div>\n\n        <div *ngIf=\"subTask.status == 'active'\" >\n\n            <h4 style=\"display:inline-block;\" (click)=\"viewClickedSubTask(subTask)\">{{subTask.name}}</h4>\n            <div class=\"dropdown makeInline\" style=\"float: right;\">\n                <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                  Set\n                </button>\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n                    <span class=\"dropdown-item\" (click)=\"toggleSetSubTask(0,subTask)\">Complete</span>\n                    <span class=\"dropdown-item\" (click)=\"toggleSetSubTask(1,subTask)\">Active</span>\n                  <span class=\"dropdown-item\" (click)=\"subTaskDeleteDropdown(subTask)\">Delete</span>\n                </div>\n            </div>\n            <span style=\"float: right;\">Due : {{subTask.due}} Priority : {{subTask.level}}</span>  \n    \n            </div>\n\n\n    </div>\n</div>\n\n      \n                \n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/today/today.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/today/today.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>Todays task</p>\n\n<style>\n.makeInline{\n    display: inline-block;\n}\n.divider{\n    border-bottom-style:ridge;\n}\n</style>\n\n<div *ngFor=\"let task of todaysTasks\" class=\"divider\">\n\n  <div *ngIf=\"task.status == 'done'\"  style=\"color: blue; opacity: .7;\">\n\n    <h4 style=\"display:inline-block;\" (click)=\"viewClickedTask(task)\" >{{task.name}}</h4>\n          <div class=\"dropdown makeInline\" style=\"float: right;\">\n                <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                  {{task.status}}\n                </button>\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n                  <span class=\"dropdown-item\" (click)=\"toggleSetTask(0,task)\">Complete</span>\n                  <span class=\"dropdown-item\" (click)=\"toggleSetTask(1,task)\">Active</span>\n                  <span class=\"dropdown-item\" (click)=\"taskDelete(task)\">Delete</span>\n                </div>\n            </div>\n           <!-- <span style=\"float: right;\">Due : {{task.due}} Priority : {{task.level}}</span>  -->\n  </div>\n\n  <div *ngIf=\"task.status == 'active'\">\n\n    <h4 style=\"display:inline-block;\" (click)=\"viewClickedTask(task)\" >{{task.name}}</h4>\n          <div class=\"dropdown makeInline\" style=\"float: right;\">\n                <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                  {{task.status}}\n                </button>\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n                  <span class=\"dropdown-item\" (click)=\"toggleSetTask(0,task)\">Complete</span>\n                  <span class=\"dropdown-item\" (click)=\"toggleSetTask(1,task)\">Active</span>\n                  <span class=\"dropdown-item\" (click)=\"taskDelete(task)\">Delete</span>\n                </div>\n            </div>\n            <span style=\"float: right;\">Due : {{task.due}} Priority : {{task.level}}</span>  \n  </div>\n\n\n</div>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/topbar/topbar.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/topbar/topbar.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<style>\n    button{\n        float: right;\n        height: 10vh;\n    }\n</style>\n\n\n<div class=\"container\" >\n    <div class=\"row\" >\n\n        \n      <div class=\"col-4\">\n      </div>\n\n      <div class=\"col-4\">\n        <button type=\"button\" class=\"btn btn-black\" (click)=\"goBackButton()\">Back</button>\n      </div>\n\n        <div class=\"col-4\">\n            <button type=\"button\"  (click)=\"savePlayer()\" class=\"btn btn-black\">\n            Save\n            </button> \n        </div>\n\n\n\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/week/week.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/week/week.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>Weekly task</p>\n\n<style>\n.makeInline{\n    display: inline-block;\n}\n.divider{\n    border-bottom-style:ridge;\n}\n</style>\n\n<div *ngFor=\"let task of weeksTasks\" class=\"divider\">\n\n  <div *ngIf=\"task.status == 'done'\"  style=\"color: blue; opacity: .7;\">\n\n    <h4 style=\"display:inline-block;\" (click)=\"viewClickedTask(task)\" >{{task.name}}</h4>\n          <div class=\"dropdown makeInline\" style=\"float: right;\">\n                <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                  {{task.status}}\n                </button>\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n                  <span class=\"dropdown-item\" (click)=\"toggleSetTask(0,task)\">Complete</span>\n                  <span class=\"dropdown-item\" (click)=\"toggleSetTask(1,task)\">Active</span>\n                  <span class=\"dropdown-item\" (click)=\"taskDelete(task)\">Delete</span>\n                </div>\n            </div>\n           <!-- <span style=\"float: right;\">Due : {{task.due}} Priority : {{task.level}}</span>  -->\n  </div>\n\n  <div *ngIf=\"task.status == 'active'\">\n\n    <h4 style=\"display:inline-block;\" (click)=\"viewClickedTask(task)\" >{{task.name}}</h4>\n          <div class=\"dropdown makeInline\" style=\"float: right;\">\n                <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                  {{task.status}}\n                </button>\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n                  <span class=\"dropdown-item\" (click)=\"toggleSetTask(0,task)\">Complete</span>\n                  <span class=\"dropdown-item\" (click)=\"toggleSetTask(1,task)\">Active</span>\n                  <span class=\"dropdown-item\" (click)=\"taskDelete(task)\">Delete</span>\n                </div>\n            </div>\n            <span style=\"float: right;\">Due : {{task.due}} Priority : {{task.level}}</span>  \n  </div>\n\n\n</div>\n\n\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _inbox_inbox_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inbox/inbox.component */ "./src/app/inbox/inbox.component.ts");
/* harmony import */ var _today_today_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./today/today.component */ "./src/app/today/today.component.ts");
/* harmony import */ var _week_week_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./week/week.component */ "./src/app/week/week.component.ts");
/* harmony import */ var _month_month_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./month/month.component */ "./src/app/month/month.component.ts");
/* harmony import */ var _taskcreate_taskcreate_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./taskcreate/taskcreate.component */ "./src/app/taskcreate/taskcreate.component.ts");
/* harmony import */ var _projectcreate_projectcreate_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./projectcreate/projectcreate.component */ "./src/app/projectcreate/projectcreate.component.ts");
/* harmony import */ var _projectsview_projectsview_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./projectsview/projectsview.component */ "./src/app/projectsview/projectsview.component.ts");
/* harmony import */ var _projectview_projectview_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./projectview/projectview.component */ "./src/app/projectview/projectview.component.ts");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/landing/landing.component.ts");
/* harmony import */ var _taskview_taskview_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./taskview/taskview.component */ "./src/app/taskview/taskview.component.ts");













const routes = [
    { path: '', component: _landing_landing_component__WEBPACK_IMPORTED_MODULE_11__["LandingComponent"] },
    { path: 'inbox', component: _inbox_inbox_component__WEBPACK_IMPORTED_MODULE_3__["InboxComponent"] },
    { path: 'today', component: _today_today_component__WEBPACK_IMPORTED_MODULE_4__["TodayComponent"] },
    { path: 'week', component: _week_week_component__WEBPACK_IMPORTED_MODULE_5__["WeekComponent"] },
    { path: 'month', component: _month_month_component__WEBPACK_IMPORTED_MODULE_6__["MonthComponent"] },
    { path: 'createtask/:tasktype', component: _taskcreate_taskcreate_component__WEBPACK_IMPORTED_MODULE_7__["TaskcreateComponent"] },
    { path: 'createproject', component: _projectcreate_projectcreate_component__WEBPACK_IMPORTED_MODULE_8__["ProjectcreateComponent"] },
    { path: 'viewtask/:task', component: _taskview_taskview_component__WEBPACK_IMPORTED_MODULE_12__["TaskviewComponent"] },
    { path: 'viewproject/:project', component: _projectview_projectview_component__WEBPACK_IMPORTED_MODULE_10__["ProjectviewComponent"] },
    { path: 'viewprojects', component: _projectsview_projectsview_component__WEBPACK_IMPORTED_MODULE_9__["ProjectsviewComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n#topbarContainer{\r\n    height: 10vh;\r\n    background-color: #170DBF;\r\n    border-color: #EF7B45;\r\n    border-style: solid;\r\n    border-radius: 5px;\r\n    overflow: hidden;\r\n}\r\n\r\n#sidebar {\r\n    height: 100vh;\r\n    border-color: #170DBF;\r\n    border-style: solid;\r\n    border-radius: 5px;\r\n}\r\n\r\n#routerbar {\r\n    height: 90vh;\r\n    background-color: black;\r\n    color: white;\r\n}\r\n\r\n#topbar{\r\n    width: 100%;\r\n}\r\n\r\ndiv{\r\n      margin-right: 0px;\r\n      margin-left: 0px;\r\n      padding-left: 0;\r\n      padding-right: 0;\r\n  }\r\n\r\n.mat-drawer-side{\r\n    background-color: #EF7B45;\r\n    color: black;\r\n}\r\n\r\n.mat-drawer-container{\r\n    background-color: black;\r\n}\r\n\r\n@media (min-width: 576px){\r\n  .container {\r\n      max-width: none;\r\n  }}\r\n\r\n@media (min-width: 768px){\r\n  .container {\r\n      max-width: none;\r\n  }}\r\n\r\n@media (min-width: 992px){\r\n  .container {\r\n      max-width: none;\r\n  }}\r\n\r\n@media (min-width: 578px){\r\n  .container {\r\n      max-width: none;\r\n  }}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtJQUNJLFlBQVk7SUFDWix5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO01BQ00saUJBQWlCO01BQ2pCLGdCQUFnQjtNQUNoQixlQUFlO01BQ2YsZ0JBQWdCO0VBQ3BCOztBQUdGO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBSUU7RUFDQTtNQUNJLGVBQWU7RUFDbkIsQ0FBQzs7QUFFRDtFQUNBO01BQ0ksZUFBZTtFQUNuQixDQUFDOztBQUVEO0VBQ0E7TUFDSSxlQUFlO0VBQ25CLENBQUM7O0FBRUQ7RUFDQTtNQUNJLGVBQWU7RUFDbkIsQ0FBQyIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4jdG9wYmFyQ29udGFpbmVye1xyXG4gICAgaGVpZ2h0OiAxMHZoO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE3MERCRjtcclxuICAgIGJvcmRlci1jb2xvcjogI0VGN0I0NTtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4jc2lkZWJhciB7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMTcwREJGO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuI3JvdXRlcmJhciB7XHJcbiAgICBoZWlnaHQ6IDkwdmg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuI3RvcGJhcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5kaXZ7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgfVxyXG5cclxuXHJcbi5tYXQtZHJhd2VyLXNpZGV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUY3QjQ1O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4ubWF0LWRyYXdlci1jb250YWluZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxufVxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA1NzZweCl7XHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICAgIG1heC13aWR0aDogbm9uZTtcclxuICB9fVxyXG4gIFxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCl7XHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICAgIG1heC13aWR0aDogbm9uZTtcclxuICB9fVxyXG4gIFxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCl7XHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICAgIG1heC13aWR0aDogbm9uZTtcclxuICB9fVxyXG4gIFxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA1NzhweCl7XHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICAgIG1heC13aWR0aDogbm9uZTtcclxuICB9fVxyXG5cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.events = [];
        this.title = 'ngGatordone';
        //console.log("app component loaded")
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: initializeApp1, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeApp1", function() { return initializeApp1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./player */ "./src/app/player.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _topbar_topbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./topbar/topbar.component */ "./src/app/topbar/topbar.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _inbox_inbox_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./inbox/inbox.component */ "./src/app/inbox/inbox.component.ts");
/* harmony import */ var _projectcreate_projectcreate_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./projectcreate/projectcreate.component */ "./src/app/projectcreate/projectcreate.component.ts");
/* harmony import */ var _taskcreate_taskcreate_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./taskcreate/taskcreate.component */ "./src/app/taskcreate/taskcreate.component.ts");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/landing/landing.component.ts");
/* harmony import */ var _taskview_taskview_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./taskview/taskview.component */ "./src/app/taskview/taskview.component.ts");
/* harmony import */ var _projectsview_projectsview_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./projectsview/projectsview.component */ "./src/app/projectsview/projectsview.component.ts");
/* harmony import */ var _projectview_projectview_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./projectview/projectview.component */ "./src/app/projectview/projectview.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _today_today_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./today/today.component */ "./src/app/today/today.component.ts");
/* harmony import */ var _week_week_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./week/week.component */ "./src/app/week/week.component.ts");
/* harmony import */ var _month_month_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./month/month.component */ "./src/app/month/month.component.ts");





















function initializeApp1(player) {
    return () => {
        return player.loadPlayer();
    };
}
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _topbar_topbar_component__WEBPACK_IMPORTED_MODULE_7__["TopbarComponent"],
            _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__["SidebarComponent"],
            _inbox_inbox_component__WEBPACK_IMPORTED_MODULE_9__["InboxComponent"],
            _projectcreate_projectcreate_component__WEBPACK_IMPORTED_MODULE_10__["ProjectcreateComponent"],
            _taskcreate_taskcreate_component__WEBPACK_IMPORTED_MODULE_11__["TaskcreateComponent"],
            _landing_landing_component__WEBPACK_IMPORTED_MODULE_12__["LandingComponent"],
            _taskview_taskview_component__WEBPACK_IMPORTED_MODULE_13__["TaskviewComponent"],
            _projectsview_projectsview_component__WEBPACK_IMPORTED_MODULE_14__["ProjectsviewComponent"],
            _projectview_projectview_component__WEBPACK_IMPORTED_MODULE_15__["ProjectviewComponent"],
            _today_today_component__WEBPACK_IMPORTED_MODULE_18__["TodayComponent"],
            _week_week_component__WEBPACK_IMPORTED_MODULE_19__["WeekComponent"],
            _month_month_component__WEBPACK_IMPORTED_MODULE_20__["MonthComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatIconModule"]
        ],
        providers: [_player__WEBPACK_IMPORTED_MODULE_4__["Player"],
            {
                provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["APP_INITIALIZER"],
                useFactory: initializeApp1,
                multi: true,
                deps: [_player__WEBPACK_IMPORTED_MODULE_4__["Player"]]
            }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/inbox/inbox.component.css":
/*!*******************************************!*\
  !*** ./src/app/inbox/inbox.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luYm94L2luYm94LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/inbox/inbox.component.ts":
/*!******************************************!*\
  !*** ./src/app/inbox/inbox.component.ts ***!
  \******************************************/
/*! exports provided: InboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InboxComponent", function() { return InboxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../player */ "./src/app/player.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let InboxComponent = class InboxComponent {
    constructor(player, router) {
        this.player = player;
        this.router = router;
    }
    ngOnInit() {
        this.viewInboxTasks();
    }
    viewInboxTasks() {
        let focus = this.player.getInboxTasks();
        this.quickTasks = focus;
        //console.log(this.quickTasks);
    }
    viewClickedTask(focusTask) {
        //console.log(focusTask)
        this.player.setNavBackState("inbox", "empty");
        this.router.navigate(['/viewtask', JSON.stringify(focusTask)]);
    }
    taskDelete(focusEleTask) {
        //console.log(focusEleTask);
        this.player.deleteTask(focusEleTask);
        this.viewInboxTasks();
        //console.log(this.player.player.tasks);
    }
    toggleSetTask(key, focusEleTask) {
        switch (key) {
            case 0:
                // code block switch it to complete
                this.player.setStatusTask(focusEleTask.ID, "done");
                break;
            case 1:
                // switch it to active
                this.player.setStatusTask(focusEleTask.ID, "active");
                break;
        }
    }
};
InboxComponent.ctorParameters = () => [
    { type: _player__WEBPACK_IMPORTED_MODULE_2__["Player"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
InboxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-inbox',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./inbox.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/inbox/inbox.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./inbox.component.css */ "./src/app/inbox/inbox.component.css")).default]
    })
], InboxComponent);



/***/ }),

/***/ "./src/app/landing/landing.component.css":
/*!***********************************************!*\
  !*** ./src/app/landing/landing.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmcvbGFuZGluZy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/landing/landing.component.ts":
/*!**********************************************!*\
  !*** ./src/app/landing/landing.component.ts ***!
  \**********************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LandingComponent = class LandingComponent {
    constructor() { }
    ngOnInit() {
    }
};
LandingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-landing',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./landing.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing/landing.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./landing.component.css */ "./src/app/landing/landing.component.css")).default]
    })
], LandingComponent);



/***/ }),

/***/ "./src/app/month/month.component.css":
/*!*******************************************!*\
  !*** ./src/app/month/month.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vbnRoL21vbnRoLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/month/month.component.ts":
/*!******************************************!*\
  !*** ./src/app/month/month.component.ts ***!
  \******************************************/
/*! exports provided: MonthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonthComponent", function() { return MonthComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../player */ "./src/app/player.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let MonthComponent = class MonthComponent {
    constructor(player, router) {
        this.player = player;
        this.router = router;
    }
    ngOnInit() {
        let tempFullDate = new Date();
        let tempYear = tempFullDate.getFullYear();
        let tempMonth = tempFullDate.getMonth() + 1 + "";
        if (tempMonth.length == 1) {
            tempMonth = "0" + tempMonth;
        }
        let tempDate = tempFullDate.getDate();
        this.todaysDate = tempYear + "-" + tempMonth + "-" + tempDate;
        console.log(this.todaysDate);
        this.viewMonthsTasks();
    }
    viewMonthsTasks() {
        let tempFullDate = new Date();
        let tempYear = tempFullDate.getFullYear();
        let tempMonth = tempFullDate.getMonth() + "";
        if (tempMonth.length == 1) {
            tempMonth = "0" + tempMonth;
        }
        let tempDate = tempFullDate.getDate();
        this.monthsTasks = this.player.getMonthsTask(this.todaysDate, tempYear, tempMonth, tempDate);
    }
    toggleSetTask(key, focusEleTask) {
        switch (key) {
            case 0:
                // code block switch it to complete
                this.player.setStatusTask(focusEleTask.ID, "done");
                break;
            case 1:
                // switch it to active
                this.player.setStatusTask(focusEleTask.ID, "active");
                break;
        }
    }
    viewClickedTask(focusTask) {
        //console.log(focusTask)
        this.player.setNavBackState("inbox", "empty");
        this.router.navigate(['/viewtask', JSON.stringify(focusTask)]);
    }
};
MonthComponent.ctorParameters = () => [
    { type: _player__WEBPACK_IMPORTED_MODULE_2__["Player"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
MonthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-month',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./month.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/month/month.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./month.component.css */ "./src/app/month/month.component.css")).default]
    })
], MonthComponent);



/***/ }),

/***/ "./src/app/player.ts":
/*!***************************!*\
  !*** ./src/app/player.ts ***!
  \***************************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");




//var url = "http://localhost:8080/ngGatordone/src/player.json";//"http://localhost/ngMovingProject/src/player.json";
var url = "/playerplanner/load"; //player.json";//"http://localhost/ngMovingProject/src/player.json";
var valueC = getCookie("gatorc");
var valueP = getCookie("gatorp");
var valueBody = { "codename": valueC, "pin": valueP };
let Player = class Player {
    //focusTask : number
    //focusSubTask : number
    constructor(http) {
        this.http = http;
        this.ngOnInit();
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
        });
    }
    loadPlayer() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.http.post(url, valueBody)
                .toPromise()
                .then(res => {
                this.player = res;
                //console.log("The player is fully loaded");
                //console.log(res);
            });
        });
    }
    addTask(newTask) {
        let validID = this.getNextTaskID();
        newTask.ID = validID;
        this.player.tasks.push(newTask);
        //console.log(this.player.tasks);
    }
    addSubTask(newTask) {
        let validID = this.getNextSubTaskID();
        newTask.ID = validID;
        this.player.subTasks.push(newTask);
        //console.log(this.player.tasks);
    }
    addSection(newSection) {
        let validID = this.getNextSectionID();
        newSection.ID = validID;
        this.player.sections.push(newSection);
        //console.log(this.player.tasks);
    }
    addProject(newProject) {
        let validID = this.getNextProjectID();
        newProject.ID = validID;
        this.player.projects.push(newProject);
        //console.log(this.player.projects);
    }
    deleteProject(deleteThisProject) {
        let projectIdFocus = deleteThisProject.ID;
        let indexFocus = this.player.projects.indexOf(deleteThisProject);
        this.player.projects.splice(indexFocus, 1);
        this.deleteSections(projectIdFocus);
        this.deleteTasks(projectIdFocus);
    }
    deleteSections(focusID) {
        for (let xy = 0; xy < this.player.sections.length; xy++) {
            if (this.player.sections[xy].project == focusID) {
                console.log(this.player.sections[xy]);
                let indexFocus = this.player.sections.indexOf(this.player.sections[xy]);
                this.player.sections.splice(indexFocus, 1);
                xy--;
            }
        }
    }
    deleteTasks(focusID) {
        for (let x = 0; x < this.player.tasks.length; x++) {
            if (this.player.tasks[x].project == focusID) {
                this.deleteSubTasks(this.player.tasks[x].ID);
                let indexFocus = this.player.tasks.indexOf(this.player.tasks[x]);
                this.player.tasks.splice(indexFocus, 1);
                x--;
            }
        }
    }
    deleteTasks4Section(focusIDsection) {
        for (let x = 0; x < this.player.tasks.length; x++) {
            if (this.player.tasks[x].section == focusIDsection) {
                this.deleteSubTasks(this.player.tasks[x].ID);
                let indexFocus = this.player.tasks.indexOf(this.player.tasks[x]);
                this.player.tasks.splice(indexFocus, 1);
                x--;
            }
        }
    }
    deleteSubTasks(focusID) {
        for (let x = 0; x < this.player.subTasks.length; x++) {
            if (this.player.subTasks[x].task == focusID) {
                let indexFocus = this.player.subTasks.indexOf(this.player.subTasks[x]);
                this.player.subTasks.splice(indexFocus, 1);
                x--;
            }
        }
    }
    //////////
    deleteTask(deleteThisTask) {
        let taskIdFocus = deleteThisTask.ID;
        let newfocutask = this.findThisTask(deleteThisTask.ID);
        let indexFocus = this.player.tasks.indexOf(newfocutask);
        this.player.tasks.splice(indexFocus, 1);
        this.deleteSubTasks(taskIdFocus);
    }
    deleteSection(deleteThisSection) {
        let sectionIdFocus = deleteThisSection.ID;
        let newfocusection = this.findThisSection(deleteThisSection.ID);
        let indexFocus = this.player.sections.indexOf(newfocusection);
        this.player.sections.splice(indexFocus, 1);
        this.deleteTasks4Section(sectionIdFocus);
    }
    deleteSubTask(deleteThisSubTask) {
        let taskIdFocus = deleteThisSubTask.ID;
        let newfocutask = this.findThisSubTask(deleteThisSubTask.ID);
        let indexFocus = this.player.subTasks.indexOf(newfocutask);
        this.player.subTasks.splice(indexFocus, 1);
    }
    getNextTaskID() {
        let validID = false;
        let newID = -1;
        if (this.player.tasks.length > 0) {
            while (validID == false) {
                newID++;
                validID = true;
                for (let x = 0; x < this.player.tasks.length; x++) {
                    if (newID == this.player.tasks[x].ID) {
                        //console.log("Dont use id number: " + newID);
                        validID = false;
                    }
                } // loop through all tasks in player
            }
        }
        else {
            newID = 0;
        }
        return newID;
    }
    getNextSubTaskID() {
        //console.log(this.player.tasks.length);
        let validID = false;
        let newID = -1;
        if (this.player.subTasks.length > 0) {
            while (validID == false) {
                newID++;
                validID = true;
                for (let x = 0; x < this.player.subTasks.length; x++) {
                    if (newID == this.player.subTasks[x].ID) {
                        //console.log("Dont use id number: " + newID);
                        validID = false;
                    }
                } // loop through all tasks in player
            }
        }
        else {
            newID = 0;
        }
        return newID;
    }
    getNextSectionID() {
        //console.log(this.player.section.length);
        let validID = false;
        let newID = -1;
        if (this.player.sections.length > 0) {
            while (validID == false) {
                newID++;
                validID = true;
                for (let x = 0; x < this.player.sections.length; x++) {
                    if (newID == this.player.sections[x].ID) {
                        //console.log("Dont use id number for section: " + newID);
                        validID = false;
                    }
                } // loop through all tasks in player
            }
        }
        else {
            newID = 0;
        }
        return newID;
    }
    getNextProjectID() {
        //console.log(this.player.tasks.length);
        let validID = false;
        let newID = -1;
        if (this.player.projects.length > 0) {
            while (validID == false) {
                newID++;
                validID = true;
                for (let x = 0; x < this.player.projects.length; x++) {
                    if (newID == this.player.projects[x].ID) {
                        //console.log("Dont use id number for project: " + newID);
                        validID = false;
                    }
                } // loop through all projects in player
            }
        }
        else {
            newID = 0;
        }
        return newID;
    }
    getInboxTasks() {
        let inboxTaskStack = [];
        if (this.player) {
            for (let x = 0; x < this.player.tasks.length; x++) {
                if (this.player.tasks[x].project == undefined || this.player.tasks[x].project == null) {
                    inboxTaskStack.push(this.player.tasks[x]);
                }
            } // loop through all tasks in player
        }
        return inboxTaskStack;
    }
    getTodayTasks(focusDate) {
        let tasksHolder = [];
        for (let x = 0; x < this.player.tasks.length; x++) {
            // console.log(focusDate);
            // console.log(this.player.tasks[x].due);
            if (this.player.tasks[x].due == focusDate) {
                tasksHolder.push(this.player.tasks[x]);
            }
        }
        return tasksHolder;
    }
    getMonthsTask(concatDate, focusYear, focusMonth, focusDayDate) {
        let tasksHolder = [];
        let startDayOfThisMonth = new Date(focusYear, focusMonth, focusDayDate);
        //let formatedStartDate = format(startDayOfThisWeek, 'yyyy-MM-dd');
        let lastDayOfThisMonth = Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["lastDayOfMonth"])(new Date(focusYear, focusMonth, focusDayDate));
        //let formatedEndDate = format(lastDayOfThisWeek, 'yyyy-MM-dd');
        var result = Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["eachDayOfInterval"])({
            start: startDayOfThisMonth,
            end: lastDayOfThisMonth
        });
        //console.log(result);
        for (let y = 0; y < result.length; y++) {
            let formattedFocusDay = Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["format"])(result[y], 'yyyy-MM-dd');
            //console.log(formattedFocusDay);
            for (let x = 0; x < this.player.tasks.length; x++) {
                if (this.player.tasks[x].due == formattedFocusDay) {
                    tasksHolder.push(this.player.tasks[x]);
                }
            } //end of for loop
        }
        return tasksHolder;
    }
    getWeeksTask(concatDate, focusYear, focusMonth, focusDayDate) {
        let tasksHolder = [];
        let startDayOfThisWeek = new Date(focusYear, focusMonth, focusDayDate);
        //let formatedStartDate = format(startDayOfThisWeek, 'yyyy-MM-dd');
        let lastDayOfThisWeek = Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["lastDayOfISOWeek"])(new Date(focusYear, focusMonth, focusDayDate));
        //let formatedEndDate = format(lastDayOfThisWeek, 'yyyy-MM-dd');
        var result = Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["eachDayOfInterval"])({
            start: startDayOfThisWeek,
            end: lastDayOfThisWeek
        });
        console.log(result);
        for (let y = 0; y < result.length; y++) {
            let formattedFocusDay = Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["format"])(result[y], 'yyyy-MM-dd');
            // console.log(formattedFocusDay);
            for (let x = 0; x < this.player.tasks.length; x++) {
                if (this.player.tasks[x].due == formattedFocusDay) {
                    tasksHolder.push(this.player.tasks[x]);
                }
            } //end of for loop
        }
        return tasksHolder;
    }
    getAllProjects() {
        return this.player.projects;
    }
    getAllSections() {
        return this.player.sections;
    }
    getAllTasks4Project(focusID) {
        //console.log(this.player);
        let inboxTaskStack = [];
        if (this.player) {
            for (let x = 0; x < this.player.tasks.length; x++) {
                if (this.player.tasks[x].project == focusID) {
                    //console.log(focusID);
                    inboxTaskStack.push(this.player.tasks[x]);
                }
            } // loop through all tasks in player
        }
        return inboxTaskStack;
    }
    getAllSubTasks4Task(focusTaskID) {
        let inboxTaskStack = [];
        if (this.player) {
            for (let x = 0; x < this.player.subTasks.length; x++) {
                if (this.player.subTasks[x].task == focusTaskID) {
                    //console.log(this.player.subTasks);
                    inboxTaskStack.push(this.player.subTasks[x]);
                }
            } // loop through all tasks in player
        }
        return inboxTaskStack;
    }
    getAllSections4Project(focusID) {
        let inboxSectionStack = [];
        if (this.player) {
            for (let x = 0; x < this.player.sections.length; x++) {
                if (this.player.sections[x].project == focusID) {
                    //console.log(focusID);
                    inboxSectionStack.push(this.player.sections[x]);
                }
            } // loop through all tasks in player
        }
        return inboxSectionStack;
    }
    updateProjectName(newProjectName, focusProjectID) {
        for (let x = 0; x < this.player.projects.length; x++) {
            if (this.player.projects[x].ID == focusProjectID) {
                this.player.projects[x].name = newProjectName;
                break;
            }
        }
    }
    updateTaskData(thisfocusID, focusTaskname, focusTaskdue, focusTasklevel, focusTaskdescription) {
        for (let x = 0; x < this.player.tasks.length; x++) {
            if (this.player.tasks[x].ID == thisfocusID) {
                this.player.tasks[x].name = focusTaskname;
                this.player.tasks[x].due = focusTaskdue;
                this.player.tasks[x].level = focusTasklevel;
                this.player.tasks[x].description = focusTaskdescription;
                break;
            }
        }
    }
    updateSubTaskData(thisfocusID, focusTaskname, focusTaskdue, focusTasklevel, focusTaskdescription) {
        for (let x = 0; x < this.player.subTasks.length; x++) {
            if (this.player.subTasks[x].ID == thisfocusID) {
                this.player.subTasks[x].name = focusTaskname;
                this.player.subTasks[x].due = focusTaskdue;
                this.player.subTasks[x].level = focusTasklevel;
                this.player.subTasks[x].description = focusTaskdescription;
                break;
            }
        }
    }
    updateSectionData(dataSectionID, dataSectionName) {
        for (let x = 0; x < this.player.sections.length; x++) {
            if (this.player.sections[x].ID == dataSectionID) {
                this.player.sections[x].name = dataSectionName;
                break;
            }
        }
    }
    findThisTask(thisID) {
        //console.log(thisID);
        for (let x = 0; x < this.player.tasks.length; x++) {
            if (this.player.tasks[x].ID == thisID) {
                return this.player.tasks[x];
            }
        }
    }
    findThisSection(thisID) {
        for (let x = 0; x < this.player.sections.length; x++) {
            if (this.player.sections[x].ID == thisID) {
                return this.player.sections[x];
            }
        }
    }
    findThisSubTask(thisID) {
        for (let x = 0; x < this.player.subTasks.length; x++) {
            if (this.player.subTasks[x].ID == thisID) {
                return this.player.subTasks[x];
            }
        }
    }
    findThisProject(thisID) {
        for (let z = 0; z < this.player.projects.length; z++) {
            // console.log(this.player.projects[z].ID);
            // console.log(thisID);
            if (this.player.projects[z].ID == thisID) {
                return this.player.projects[z];
            }
        }
    }
    setNavBackState(codekey, typeOBJ) {
        switch (codekey) {
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
    setStatusTask(thisID, someStatus) {
        for (let z = 0; z < this.player.tasks.length; z++) {
            if (this.player.tasks[z].ID == thisID) {
                this.player.tasks[z].status = someStatus;
                break;
            }
        }
    }
    setStatusSubTask(thisID, someStatus) {
        for (let z = 0; z < this.player.subTasks.length; z++) {
            if (this.player.subTasks[z].ID == thisID) {
                this.player.subTasks[z].status = someStatus;
                break;
            }
        }
    }
};
Player.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
Player = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], Player);

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
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


/***/ }),

/***/ "./src/app/projectcreate/projectcreate.component.css":
/*!***********************************************************!*\
  !*** ./src/app/projectcreate/projectcreate.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3RjcmVhdGUvcHJvamVjdGNyZWF0ZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/projectcreate/projectcreate.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/projectcreate/projectcreate.component.ts ***!
  \**********************************************************/
/*! exports provided: ProjectcreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectcreateComponent", function() { return ProjectcreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../player */ "./src/app/player.ts");



let ProjectcreateComponent = class ProjectcreateComponent {
    constructor(player) {
        this.player = player;
    }
    ngOnInit() {
    }
    createProject() {
        var x = document.getElementById("taskName").value;
        var newProject = new Project(x);
        //console.log(newTask);
        this.player.addProject(newProject);
    }
};
ProjectcreateComponent.ctorParameters = () => [
    { type: _player__WEBPACK_IMPORTED_MODULE_2__["Player"] }
];
ProjectcreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-projectcreate',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./projectcreate.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/projectcreate/projectcreate.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./projectcreate.component.css */ "./src/app/projectcreate/projectcreate.component.css")).default]
    })
], ProjectcreateComponent);

class Project {
    constructor(name) {
        this.name = name;
    }
}


/***/ }),

/***/ "./src/app/projectsview/projectsview.component.css":
/*!*********************************************************!*\
  !*** ./src/app/projectsview/projectsview.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3Rzdmlldy9wcm9qZWN0c3ZpZXcuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/projectsview/projectsview.component.ts":
/*!********************************************************!*\
  !*** ./src/app/projectsview/projectsview.component.ts ***!
  \********************************************************/
/*! exports provided: ProjectsviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsviewComponent", function() { return ProjectsviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../player */ "./src/app/player.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let ProjectsviewComponent = class ProjectsviewComponent {
    constructor(player, router) {
        this.player = player;
        this.router = router;
    }
    ngOnInit() {
        //console.log(this.player);
        console.log(this.player);
        let focus = this.player.getAllProjects();
        this.allprojects = focus;
        //console.log(this.allprojects);
    }
    viewClickedProject(focusProject) {
        //console.log(focusTask)
        this.router.navigate(['/viewproject', JSON.stringify(focusProject)]);
    }
    projectSaveNewName(focusProject) {
        //console.log(focusProject);
        //get html element value
        let inputNewProjectName = document.getElementById(focusProject.name).value;
        this.player.updateProjectName(inputNewProjectName, focusProject.ID);
        //console.log(this.player.player.projects);
    }
    projectDelete(focusProject) {
        this.player.deleteProject(focusProject);
    }
};
ProjectsviewComponent.ctorParameters = () => [
    { type: _player__WEBPACK_IMPORTED_MODULE_2__["Player"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ProjectsviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-projectsview',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./projectsview.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/projectsview/projectsview.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./projectsview.component.css */ "./src/app/projectsview/projectsview.component.css")).default]
    })
], ProjectsviewComponent);



/***/ }),

/***/ "./src/app/projectview/projectview.component.css":
/*!*******************************************************!*\
  !*** ./src/app/projectview/projectview.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3R2aWV3L3Byb2plY3R2aWV3LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/projectview/projectview.component.ts":
/*!******************************************************!*\
  !*** ./src/app/projectview/projectview.component.ts ***!
  \******************************************************/
/*! exports provided: ProjectviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectviewComponent", function() { return ProjectviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../player */ "./src/app/player.ts");




let ProjectviewComponent = class ProjectviewComponent {
    constructor(route, router, player) {
        this.route = route;
        this.router = router;
        this.player = player;
    }
    ngOnInit() {
        this.route.params.forEach((params) => {
            this.focusproject = JSON.parse(params.project);
            this.focusID = this.focusproject.ID;
            this.focussections = this.player.getAllSections4Project(this.focusID);
            this.focustasks = this.player.getAllTasks4Project(this.focusID);
            this.zeroTasks = this.getZeroTasks();
            this.sectionTasks = this.getSectionTasks();
        });
    }
    getZeroTasks() {
        let thisArray = [];
        for (let x = 0; x < this.focustasks.length; x++) {
            if (this.focustasks[x].section == null || this.focustasks[x].section == undefined) {
                thisArray.push(this.focustasks[x]);
            }
        }
        return thisArray;
    }
    getSectionTasks() {
        let thisArray = [];
        for (let x = 0; x < this.focustasks.length; x++) {
            if ((this.focustasks[x].section != null || this.focustasks[x].section != undefined) && this.focustasks[x].section >= 0) {
                thisArray.push(this.focustasks[x]);
            }
        }
        return thisArray;
    }
    navigate2CreateTaskProject() {
        console.log(this.focusproject.ID);
        let info = { typeID: 1, projectID: this.focusproject.ID };
        this.router.navigate(['/createtask', JSON.stringify(info)]);
    }
    navigate2CreateTaskSection(infoID) {
        let info = { typeID: 2, projectID: this.focusproject.ID, sectionID: infoID };
        //console.log(info);
        this.router.navigate(['/createtask', JSON.stringify(info)]);
    }
    viewClickedTask(focusEle) {
        this.player.setNavBackState("project", this.focusproject);
        this.router.navigate(['/viewtask', JSON.stringify(focusEle)]);
    }
    createSection4Project() {
        let inputSectionName = document.getElementById("sectionName").value;
        let newSection = new Section(inputSectionName, this.focusproject.ID);
        this.player.addSection(newSection);
        this.focussections = this.player.getAllSections4Project(this.focusID); //.push(newSection);
        //this.sectionTasks.push(newSection)
        console.log(newSection);
    }
    taskDelete(focusEleTask) {
        //console.log(focusEleTask);
        this.player.deleteTask(focusEleTask);
        this.focustasks = this.player.getAllTasks4Project(this.focusID);
        this.zeroTasks = this.getZeroTasks();
        this.sectionTasks = this.getSectionTasks();
        //console.log(this.player.player.tasks);
    }
    sectionDelete(focusEleSection) {
        this.player.deleteSection(focusEleSection);
        this.focussections = this.player.getAllSections4Project(this.focusID);
        this.focustasks = this.player.getAllTasks4Project(this.focusID);
        this.zeroTasks = this.getZeroTasks();
        this.sectionTasks = this.getSectionTasks();
    }
    sectionSave(focusEleSection) {
        let focusSectionName = document.getElementById("sectionName").value;
        this.player.updateSectionData(focusEleSection.ID, focusSectionName);
    }
    toggleSetTask(key, focusEleTask) {
        switch (key) {
            case 0:
                // code block switch it to complete
                this.player.setStatusTask(focusEleTask.ID, "done");
                break;
            case 1:
                // switch it to active
                this.player.setStatusTask(focusEleTask.ID, "active");
                break;
        }
    }
};
ProjectviewComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _player__WEBPACK_IMPORTED_MODULE_3__["Player"] }
];
ProjectviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-projectview',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./projectview.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/projectview/projectview.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./projectview.component.css */ "./src/app/projectview/projectview.component.css")).default]
    })
], ProjectviewComponent);

class Section {
    constructor(name, project) {
        this.name = name;
        this.project = project;
    }
}
class Project {
    constructor(name) {
        this.name = name;
    }
}
// createProject(){
//   let x = "Liltte timmy turner";
//   let newProject = new Project(x);
//   this.player.addProject(newProject);
// }


/***/ }),

/***/ "./src/app/sidebar/sidebar.component.css":
/*!***********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body{\r\n    font-size: 20px;\r\n    background-color: #F5853F;\r\n}\r\na{\r\n    color: black;\r\n}\r\nh5{\r\n    -webkit-text-decoration-line: underline;\r\n            text-decoration-line: underline;\r\n    -webkit-text-decoration-style: wavy;\r\n            text-decoration-style: wavy;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSx1Q0FBK0I7WUFBL0IsK0JBQStCO0lBQy9CLG1DQUEyQjtZQUEzQiwyQkFBMkI7QUFDL0IiLCJmaWxlIjoic3JjL2FwcC9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjU4NTNGO1xyXG59XHJcbmF7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuaDV7XHJcbiAgICB0ZXh0LWRlY29yYXRpb24tbGluZTogdW5kZXJsaW5lO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uLXN0eWxlOiB3YXZ5O1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../player */ "./src/app/player.ts");




let SidebarComponent = class SidebarComponent {
    constructor(router, player) {
        this.router = router;
        this.player = player;
    }
    ngOnInit() {
        //get all the project to list on sidebar
        this.projects = this.player.getAllProjects();
        //console.log(this.projects)
    }
    navigate2CreateTaskQuicky() {
        let info = { typeID: 0 };
        this.router.navigate(['/createtask', JSON.stringify(info)]);
    }
    viewClickedProject(focusProject) {
        //console.log(focusTask)
        this.router.navigate(['/viewproject', JSON.stringify(focusProject)]);
    }
};
SidebarComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _player__WEBPACK_IMPORTED_MODULE_3__["Player"] }
];
SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sidebar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sidebar/sidebar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sidebar.component.css */ "./src/app/sidebar/sidebar.component.css")).default]
    })
], SidebarComponent);



/***/ }),

/***/ "./src/app/taskcreate/taskcreate.component.css":
/*!*****************************************************!*\
  !*** ./src/app/taskcreate/taskcreate.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rhc2tjcmVhdGUvdGFza2NyZWF0ZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/taskcreate/taskcreate.component.ts":
/*!****************************************************!*\
  !*** ./src/app/taskcreate/taskcreate.component.ts ***!
  \****************************************************/
/*! exports provided: TaskcreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskcreateComponent", function() { return TaskcreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../player */ "./src/app/player.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let TaskcreateComponent = class TaskcreateComponent {
    constructor(player, route, router) {
        this.player = player;
        this.route = route;
        this.router = router;
        //console.log(this.player)
    }
    ngOnInit() {
        this.route.params.forEach((params) => {
            // either make a quick task or use project id from params
            this.focustype = JSON.parse(params.tasktype);
        });
    }
    createTask() {
        var x = document.getElementById("taskName").value;
        var y = document.getElementById("description").value;
        var z = document.getElementById("duedate").value;
        //var newTask = new quickTask(x,y,z);
        //console.log(newTask);
        //this.player.addTask(newTask);
        // console.log(this.focustype);
        let newTask;
        switch (this.focustype.typeID) {
            case 0:
                newTask = new quickTask(x, y, z);
                this.player.addTask(newTask);
                this.router.navigate(['/inbox']);
                break;
            case 1:
                newTask = new projectTask(x, y, z, this.focustype.projectID);
                this.player.addTask(newTask);
                let sendProject = this.player.findThisProject(this.focustype.projectID);
                this.router.navigate(['/viewproject', JSON.stringify(sendProject)]);
                break;
            case 2:
                newTask = new sectionTask(x, y, z, this.focustype.projectID, this.focustype.sectionID);
                this.player.addTask(newTask);
                let sendProject2 = this.player.findThisProject(this.focustype.projectID);
                this.router.navigate(['/viewproject', JSON.stringify(sendProject2)]);
                break;
            case 3:
                newTask = new subTask(x, y, z, this.focustype.taskID);
                this.player.addSubTask(newTask);
                let sendTask = this.player.findThisTask(this.focustype.taskID);
                this.router.navigate(['/viewtask', JSON.stringify(sendTask)]);
                break;
        }
        //we can go to inbox, viewtask yup thats it right
        //this.router.navigate( ['/inbox'] );
        //this.router.navigate( ['/viewtask', JSON.stringify(focusEle)] );
    }
};
TaskcreateComponent.ctorParameters = () => [
    { type: _player__WEBPACK_IMPORTED_MODULE_2__["Player"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
TaskcreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-taskcreate',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./taskcreate.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/taskcreate/taskcreate.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./taskcreate.component.css */ "./src/app/taskcreate/taskcreate.component.css")).default]
    })
], TaskcreateComponent);

class quickTask {
    constructor(name, description, duedate) {
        this.name = name;
        this.description = description;
        this.created = new Date();
        this.due = duedate;
        this.level = 1;
        this.status = "active";
    }
}
class projectTask {
    constructor(name, description, duedate, project) {
        this.name = name;
        this.description = description;
        this.created = new Date();
        this.due = duedate;
        this.level = 1;
        this.status = "active";
        this.project = project;
    }
}
class sectionTask {
    constructor(name, description, duedate, project, section) {
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
class subTask {
    constructor(name, description, duedate, taskID) {
        this.name = name;
        this.description = description;
        this.created = new Date();
        this.due = duedate;
        this.level = 1;
        this.status = "active";
        this.task = taskID;
    }
}


/***/ }),

/***/ "./src/app/taskview/taskview.component.css":
/*!*************************************************!*\
  !*** ./src/app/taskview/taskview.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rhc2t2aWV3L3Rhc2t2aWV3LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/taskview/taskview.component.ts":
/*!************************************************!*\
  !*** ./src/app/taskview/taskview.component.ts ***!
  \************************************************/
/*! exports provided: TaskviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskviewComponent", function() { return TaskviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../player */ "./src/app/player.ts");




let TaskviewComponent = class TaskviewComponent {
    constructor(route, player, router) {
        this.route = route;
        this.player = player;
        this.router = router;
    }
    ngOnInit() {
        this.route.params.forEach((params) => {
            let thish = JSON.parse(params.task);
            if (thish.type == "subTask") {
                let tempfocus = JSON.parse(params.task);
                this.focusTask = tempfocus.task;
                //console.log("subtask view was loaded");
                this.subToggle = false;
            }
            else {
                this.focusTask = JSON.parse(params.task);
                this.subTasks = this.player.getAllSubTasks4Task(this.focusTask.ID);
                // console.log("regular view was loaded");
                this.subToggle = true;
            }
        });
    }
    navigate2CreateSubTask() {
        //console.log(this.focusTask.ID);
        let info = { typeID: 3, taskID: this.focusTask.ID };
        this.router.navigate(['/createtask', JSON.stringify(info)]);
    }
    viewClickedSubTask(focusEleSubTask) {
        this.subTasks = null;
        let folder = { type: "subTask", task: focusEleSubTask };
        //console.log(focusEleSubTask);
        this.player.setNavBackState("task", this.focusTask);
        this.router.navigate(['/viewtask', JSON.stringify(folder)]);
    }
    taskDelete(thisfocusTask) {
        //route back to the correct project page after you delete the task
        //subsTask -> Tasks with no projects -> Project Tasks
        if (thisfocusTask.task >= 0) {
            let focusTask = this.player.findThisTask(thisfocusTask.task);
            this.router.navigate(['/viewtask', JSON.stringify(focusTask)]);
            this.player.deleteSubTask(thisfocusTask);
            //console.log(this.player.player)
        }
        else if (thisfocusTask.project == null || thisfocusTask.project == undefined) {
            //route back to indbox page or something
            this.router.navigate(['/inbox']);
            this.player.deleteTask(thisfocusTask);
        }
        else {
            let focusProjectID = thisfocusTask.project;
            let focusProject = this.player.findThisProject(focusProjectID);
            //route back to proper project view page
            this.router.navigate(['/viewproject', JSON.stringify(focusProject)]);
            this.player.deleteTask(thisfocusTask);
        }
    }
    subTaskDeleteDropdown(thisFocusSubTask) {
        this.player.deleteSubTask(thisFocusSubTask);
        this.subTasks = this.player.getAllSubTasks4Task(this.focusTask.ID);
    }
    taskSaveNewData(thisfocusTask) {
        let focusTaskname = document.getElementById("focusTaskname").value;
        let focusTaskdue = document.getElementById("focusTaskdue").value;
        let focusTasklevel = document.getElementById("focusTasklevel").value;
        //let focusTaskcreated = (document.getElementById("focusTaskcreated") as HTMLInputElement).value
        let focusTaskdescription = document.getElementById("focusTaskdescription").value;
        this.player.updateTaskData(thisfocusTask.ID, focusTaskname, focusTaskdue, focusTasklevel, focusTaskdescription);
    }
    subTaskSaveNewData(thisfocusSubTask) {
        let focusTaskname = document.getElementById("focusTaskname").value;
        let focusTaskdue = document.getElementById("focusTaskdue").value;
        let focusTasklevel = document.getElementById("focusTasklevel").value;
        //let focusTaskcreated = (document.getElementById("focusTaskcreated") as HTMLInputElement).value
        let focusTaskdescription = document.getElementById("focusTaskdescription").value;
        this.player.updateSubTaskData(thisfocusSubTask.ID, focusTaskname, focusTaskdue, focusTasklevel, focusTaskdescription);
    }
    toggleSetSubTask(key, focusEleTask) {
        switch (key) {
            case 0:
                // code block switch it to complete
                this.player.setStatusSubTask(focusEleTask.ID, "complete");
                break;
            case 1:
                // switch it to active
                this.player.setStatusSubTask(focusEleTask.ID, "active");
                break;
        }
    }
};
TaskviewComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _player__WEBPACK_IMPORTED_MODULE_3__["Player"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
TaskviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-taskview',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./taskview.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/taskview/taskview.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./taskview.component.css */ "./src/app/taskview/taskview.component.css")).default]
    })
], TaskviewComponent);



/***/ }),

/***/ "./src/app/today/today.component.css":
/*!*******************************************!*\
  !*** ./src/app/today/today.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvZGF5L3RvZGF5LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/today/today.component.ts":
/*!******************************************!*\
  !*** ./src/app/today/today.component.ts ***!
  \******************************************/
/*! exports provided: TodayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodayComponent", function() { return TodayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../player */ "./src/app/player.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let TodayComponent = class TodayComponent {
    constructor(player, router) {
        this.player = player;
        this.router = router;
    }
    ngOnInit() {
        let tempFullDate = new Date();
        let tempYear = tempFullDate.getFullYear();
        let tempMonth = tempFullDate.getMonth() + 1 + "";
        if (tempMonth.length == 1) {
            tempMonth = "0" + tempMonth;
        }
        let tempDate = tempFullDate.getDate();
        this.todaysDate = tempYear + "-" + tempMonth + "-" + tempDate;
        this.viewTodayTasks();
    }
    viewTodayTasks() {
        this.todaysTasks = this.player.getTodayTasks(this.todaysDate);
        //this.todaysTasks = takshold;
    }
    toggleSetTask(key, focusEleTask) {
        switch (key) {
            case 0:
                // code block switch it to complete
                this.player.setStatusTask(focusEleTask.ID, "done");
                break;
            case 1:
                // switch it to active
                this.player.setStatusTask(focusEleTask.ID, "active");
                break;
        }
    }
    viewClickedTask(focusTask) {
        //console.log(focusTask)
        this.player.setNavBackState("inbox", "empty");
        this.router.navigate(['/viewtask', JSON.stringify(focusTask)]);
    }
};
TodayComponent.ctorParameters = () => [
    { type: _player__WEBPACK_IMPORTED_MODULE_2__["Player"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
TodayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-today',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./today.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/today/today.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./today.component.css */ "./src/app/today/today.component.css")).default]
    })
], TodayComponent);



/***/ }),

/***/ "./src/app/topbar/topbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/topbar/topbar.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div{\r\n    margin-right: 0px;\r\n    margin-left: 0px;\r\n    padding-left: 0;\r\n    padding-right: 0;\r\n    width: 100%;\r\n}\r\n.btn-black{\r\n    background-color: #EF7B45;\r\n    color: black;\r\n}\r\n@media (min-width: 576px){\r\n.container {\r\n    max-width: none;\r\n}}\r\n@media (min-width: 768px){\r\n.container {\r\n    max-width: none;\r\n}}\r\n@media (min-width: 992px){\r\n.container {\r\n    max-width: none;\r\n}}\r\n@media (min-width: 578px){\r\n.container {\r\n    max-width: none;\r\n}}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9wYmFyL3RvcGJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7QUFDQTtBQUNBO0lBQ0ksZUFBZTtBQUNuQixDQUFDO0FBRUQ7QUFDQTtJQUNJLGVBQWU7QUFDbkIsQ0FBQztBQUVEO0FBQ0E7SUFDSSxlQUFlO0FBQ25CLENBQUM7QUFFRDtBQUNBO0lBQ0ksZUFBZTtBQUNuQixDQUFDIiwiZmlsZSI6InNyYy9hcHAvdG9wYmFyL3RvcGJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2e1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgcGFkZGluZy1yaWdodDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5idG4tYmxhY2t7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUY3QjQ1O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCl7XHJcbi5jb250YWluZXIge1xyXG4gICAgbWF4LXdpZHRoOiBub25lO1xyXG59fVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KXtcclxuLmNvbnRhaW5lciB7XHJcbiAgICBtYXgtd2lkdGg6IG5vbmU7XHJcbn19XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpe1xyXG4uY29udGFpbmVyIHtcclxuICAgIG1heC13aWR0aDogbm9uZTtcclxufX1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA1NzhweCl7XHJcbi5jb250YWluZXIge1xyXG4gICAgbWF4LXdpZHRoOiBub25lO1xyXG59fSJdfQ== */");

/***/ }),

/***/ "./src/app/topbar/topbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/topbar/topbar.component.ts ***!
  \********************************************/
/*! exports provided: TopbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopbarComponent", function() { return TopbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../player */ "./src/app/player.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let TopbarComponent = class TopbarComponent {
    constructor(router, http, player) {
        this.router = router;
        this.http = http;
        this.player = player;
    }
    ngOnInit() {
        //console.log("Top bar ngONInit called")
    }
    navigate2CreateTaskQuicky() {
        let info = { typeID: 0 };
        this.router.navigate(['/createtask', JSON.stringify(info)]);
    }
    savePlayer() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log(JSON.stringify(this.player.player));
            let url = "/playerplanner/save";
            let userplayer = JSON.stringify(this.player.player);
            var xhr = new XMLHttpRequest();
            xhr.open("POST", url, true);
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    var json = xhr.responseText;
                    console.log(json);
                }
            };
            var data = userplayer;
            xhr.send(data);
        });
    }
    goBackButton() {
        let focusState = this.player.backState;
        switch (focusState) {
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
};
TopbarComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _player__WEBPACK_IMPORTED_MODULE_3__["Player"] }
];
TopbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-topbar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./topbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/topbar/topbar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./topbar.component.css */ "./src/app/topbar/topbar.component.css")).default]
    })
], TopbarComponent);



/***/ }),

/***/ "./src/app/week/week.component.css":
/*!*****************************************!*\
  !*** ./src/app/week/week.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlZWsvd2Vlay5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/week/week.component.ts":
/*!****************************************!*\
  !*** ./src/app/week/week.component.ts ***!
  \****************************************/
/*! exports provided: WeekComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeekComponent", function() { return WeekComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../player */ "./src/app/player.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let WeekComponent = class WeekComponent {
    constructor(player, router) {
        this.player = player;
        this.router = router;
    }
    ngOnInit() {
        let tempFullDate = new Date();
        let tempYear = tempFullDate.getFullYear();
        let tempMonth = tempFullDate.getMonth() + 1 + "";
        if (tempMonth.length == 1) {
            tempMonth = "0" + tempMonth;
        }
        let tempDate = tempFullDate.getDate();
        this.todaysDate = tempYear + "-" + tempMonth + "-" + tempDate;
        console.log(this.todaysDate);
        this.viewWeeksTasks();
    }
    viewWeeksTasks() {
        let tempFullDate = new Date();
        let tempYear = tempFullDate.getFullYear();
        let tempMonth = tempFullDate.getMonth() + "";
        if (tempMonth.length == 1) {
            tempMonth = "0" + tempMonth;
        }
        let tempDate = tempFullDate.getDate();
        this.weeksTasks = this.player.getWeeksTask(this.todaysDate, tempYear, tempMonth, tempDate);
    }
    toggleSetTask(key, focusEleTask) {
        switch (key) {
            case 0:
                // code block switch it to complete
                this.player.setStatusTask(focusEleTask.ID, "done");
                break;
            case 1:
                // switch it to active
                this.player.setStatusTask(focusEleTask.ID, "active");
                break;
        }
    }
    viewClickedTask(focusTask) {
        //console.log(focusTask)
        this.player.setNavBackState("inbox", "empty");
        this.router.navigate(['/viewtask', JSON.stringify(focusTask)]);
    }
};
WeekComponent.ctorParameters = () => [
    { type: _player__WEBPACK_IMPORTED_MODULE_2__["Player"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
WeekComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-week',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./week.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/week/week.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./week.component.css */ "./src/app/week/week.component.css")).default]
    })
], WeekComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! c:\Apache24\htdocs\ngGatordone\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map