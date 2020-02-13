function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<mat-sidenav-container class=\"example-container\">\n  <mat-sidenav #sidenav mode=\"side\" [(opened)]=\"opened\" (opened)=\"events.push('open!')\"\n               (closed)=\"events.push('close!')\" id=\"sidebar\">\n    <app-sidebar ></app-sidebar>\n  </mat-sidenav>\n\n\n\n<div class=\"container\">\n  <div id=\"topbarContainer\" class=\"row\" >\n    <div class=\"col-4\" (click)=\"sidenav.toggle()\">\n      <img src=\"assets/menu.png\" alt=\"menubutton\" width=\"50\" height=\"100%\" >\n    </div>\n    <div class=\"col-8\">\n      <app-topbar id=\"topbar\"></app-topbar>\n    </div>\n  </div>\n\n\n  <div class=\"row\">\n      <div id=\"routerbar\" class=\"col-12\">\n        <router-outlet></router-outlet>\n      </div>\n  </div>\n\n</div>\n\n\n</mat-sidenav-container>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/inbox/inbox.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/inbox/inbox.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppInboxInboxComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>All Future Tasks</p>\n\n<style>\n.makeInline{\n    display: inline-block;\n}\n.divider{\n    border-bottom-style:ridge;\n}\n\n</style>\n\n<div *ngFor=\"let task of futureTasks\" class=\"divider\">\n\n  <div *ngIf=\"task.status == 'done'\"  style=\"color: blue; opacity: .7;\">\n    <div style=\"width:70%\" class=\"makeInline\">\n     <h4 style=\"display:inline-block;\" (click)=\"viewClickedTask(task)\" >{{task.name}}</h4>\n           <!-- <span style=\"float: right;\">Due : {{task.due}} Priority : {{task.level}}</span>  -->\n\n    </div>\n    \n    <div style=\"width:30%\" class=\"makeInline\">\n      <div class=\"dropdown makeInline\" style=\"float: right;\">\n        <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          {{task.status}}\n        </button>\n        <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n          <span class=\"dropdown-item\" (click)=\"toggleSetTask(0,task)\">Complete</span>\n          <span class=\"dropdown-item\" (click)=\"toggleSetTask(1,task)\">Active</span>\n          <span class=\"dropdown-item\" (click)=\"taskDelete(task)\">Delete</span>\n        </div>\n    </div>\n    </div>\n\n  </div>\n\n  <div *ngIf=\"task.status == 'active'\">\n      <div style=\"width:70%\" class=\"makeInline\">\n        <h4 style=\"display:inline-block;\" (click)=\"viewClickedTask(task)\" >{{task.name}}</h4>\n        <span  style=\"display: inline-block;\">Due : {{task.due.substring(5)}} Priority : {{task.level}}</span>  \n\n      </div>\n      \n      <div style=\"width:30%\" class=\"makeInline\">\n        <div class=\"dropdown makeInline\" style=\"float: right;\">\n          <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            {{task.status}}\n          </button>\n          <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n            <span class=\"dropdown-item\" (click)=\"toggleSetTask(0,task)\">Complete</span>\n            <span class=\"dropdown-item\" (click)=\"toggleSetTask(1,task)\">Active</span>\n            <span class=\"dropdown-item\" (click)=\"taskDelete(task)\">Delete</span>\n          </div>\n      </div>\n      </div>\n  \n\n  </div>\n\n\n</div>\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/landing/landing.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/landing/landing.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLandingLandingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h3>Underconstruction</h3>\n<p> May we will put the color coding time calendar here. hehehehe</p>\n<p>This is Zen Garden. This would be the container zen apps. The first zen app is inputnews </p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/month/month.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/month/month.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMonthMonthComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<p>Monthly task</p>\n\n<style>\n.makeInline{\n    display: inline-block;\n}\n.divider{\n    border-bottom-style:ridge;\n}\n</style>\n\n<div *ngFor=\"let task of monthsTasks\" class=\"divider\">\n\n  <div *ngIf=\"task.status == 'done'\"  style=\"color: blue; opacity: .7;\">\n    <div style=\"width:70%\" class=\"makeInline\">\n      <h4 style=\"display:inline-block;\" (click)=\"viewClickedTask(task)\" >{{task.name}}</h4>\n           <!-- <span style=\"float: right;\">Due : {{task.due}} Priority : {{task.level}}</span>  -->\n\n    </div>\n    \n    <div style=\"width:30%\" class=\"makeInline\">\n      <div class=\"dropdown makeInline\" style=\"float: right;\">\n        <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          {{task.status}}\n        </button>\n        <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n          <span class=\"dropdown-item\" (click)=\"toggleSetTask(0,task)\">Complete</span>\n          <span class=\"dropdown-item\" (click)=\"toggleSetTask(1,task)\">Active</span>\n          <span class=\"dropdown-item\" (click)=\"taskDelete(task)\">Delete</span>\n        </div>\n    </div>\n    </div>\n\n  </div>\n\n  <div *ngIf=\"task.status == 'active'\">\n    <div style=\"width:70%\" class=\"makeInline\">\n      <h4 style=\"display:inline-block;\" (click)=\"viewClickedTask(task)\" >{{task.name}}</h4>\n      <span style=\"display: inline-block;\">Due : {{task.due.substring(5)}} Priority : {{task.level}}</span>  \n\n    </div>\n    \n    <div style=\"width:30%\" class=\"makeInline\">\n      <div class=\"dropdown makeInline\" style=\"float: right;\">\n        <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          {{task.status}}\n        </button>\n        <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n          <span class=\"dropdown-item\" (click)=\"toggleSetTask(0,task)\">Complete</span>\n          <span class=\"dropdown-item\" (click)=\"toggleSetTask(1,task)\">Active</span>\n          <span class=\"dropdown-item\" (click)=\"taskDelete(task)\">Delete</span>\n        </div>\n    </div>\n    </div>\n\n  </div>\n\n\n</div>\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/overdue/overdue.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/overdue/overdue.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOverdueOverdueComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>Overdue Task</p>\n\n<style>\n.makeInline{\n    display: inline-block;\n}\n.divider{\n    border-bottom-style:ridge;\n}\n</style>\n\n<div *ngFor=\"let task of overdueTasks\" class=\"divider\">\n\n  <div *ngIf=\"task.status == 'done'\"  style=\"color: blue; opacity: .7;\">\n    <div style=\"width:70%\" class=\"makeInline\">\n      <h4 style=\"display:inline-block;\" (click)=\"viewClickedTask(task)\" >{{task.name}}</h4>\n           <!-- <span style=\"float: right;\">Due : {{task.due}} Priority : {{task.level}}</span>  -->\n\n    </div>\n    \n    <div style=\"width:30%\" class=\"makeInline\">\n      <div class=\"dropdown makeInline\" style=\"float: right;\">\n        <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          {{task.status}}\n        </button>\n        <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n          <span class=\"dropdown-item\" (click)=\"toggleSetTask(0,task)\">Complete</span>\n          <span class=\"dropdown-item\" (click)=\"toggleSetTask(1,task)\">Active</span>\n          <span class=\"dropdown-item\" (click)=\"taskDelete(task)\">Delete</span>\n        </div>\n    </div>\n    </div>\n\n  </div>\n\n  <div *ngIf=\"task.status == 'active'\" style=\"color: #EF7B45;\">\n    <div style=\"width:70%\" class=\"makeInline\">\n      <h4 style=\"display:inline-block;\" (click)=\"viewClickedTask(task)\" >{{task.name}}</h4>\n      <span style=\"display: inline-block;\">Due : {{task.due.substring(5)}} Priority : {{task.level}}</span>  \n\n    </div>\n    \n    <div style=\"width:30%\" class=\"makeInline\">\n      <div class=\"dropdown makeInline\" style=\"float: right;\">\n        <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          {{task.status}}\n        </button>\n        <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n          <span class=\"dropdown-item\" (click)=\"toggleSetTask(0,task)\">Complete</span>\n          <span class=\"dropdown-item\" (click)=\"toggleSetTask(1,task)\">Active</span>\n          <span class=\"dropdown-item\" (click)=\"taskDelete(task)\">Delete</span>\n        </div>\n    </div>\n    </div>\n\n  </div>\n\n\n</div>\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/projectcreate/projectcreate.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/projectcreate/projectcreate.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProjectcreateProjectcreateComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>project create works!</p>\n\n\n<label>Project Name:</label>\n<input type=\"text\" id=\"taskName\" value=\"\">\n<button type=\"button\" class=\"btn btn-primary\" (click)=\"createProject()\">Create</button>\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/projectsview/projectsview.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/projectsview/projectsview.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProjectsviewProjectsviewComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>projects all view works!</p>\n\n<style>\n.projectlisting{\n    border-style:ridge;\n    height:  15%;\n}\nimg{\n    float: right;\n}\ninput{\n    height: 100%;\n    width: 30%;\n    border-style: none;\n    background-color: black;\n    color: white;\n}\n</style>\n\n\n\n\n<div *ngFor=\"let project of allprojects\" class=\"projectlisting\">\n    <input type=\"text\" id=\"{{project.name}}\" value=\"{{project.name}}\">\n    <img (click)=\"projectDelete(project)\" src=\"assets/delete.png\" alt=\"deleteproject\" width=\"50\" height=\"100%\">\n    <img (click)=\"projectSaveNewName(project)\" src=\"assets/save.png\" alt=\"saveproject\" width=\"50\" height=\"100%\" >\n    <img (click)=\"viewClickedProject(project)\" src=\"assets/folder.png\" alt=\"openproject\" width=\"50\" height=\"100%\">\n</div>\n\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/projectview/projectview.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/projectview/projectview.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProjectviewProjectviewComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n<div style=\"overflow: auto;\">\n\n  <h4>{{this.focusproject.name}}</h4>\n  <img src=\"https://upload.wikimedia.org/wikipedia/commons/a/a2/Icon_Add_256x256.png\" alt=\"addtask\" width=\"42\" height=\"42\" (click)=\"navigate2CreateTaskProject()\">Add task \n  <img style=\"float:right;\" src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/More_Icon_C.svg/768px-More_Icon_C.svg.png\n  \" alt=\"addtask\" width=\"42\" height=\"42\" (click)=\"createSection4Project()\" > \n  <input type=\"text\" id=\"sectionName\" value=\"Add section\" style=\"float:right;\">\n  \n    \n  </div>\n  \n  <style>\n  input{\n    text-align: center;\n  }\n  .makeDiv{\n  display: inline-block;\n}\n  .divider{\n      border-bottom-style:ridge;\n  }\n  .divMax{\n      height: 100%;\n      width: 100%;\n  }\n  .floatRightTHings{\n      float: right;\n  }\n  .makeInline{\n      display: inline-block;\n  }\n  .makeCenterInDiv{\n    display: flex;\n  align-items: center;\n  justify-content: center;\n  }\n  .container{\n      padding: 0;\n  }\n  .fixit{\n    padding: 0;\n    border-style: none;\n  }\n  @media (min-width: 576px){\n    .container{\n        max-width: none; \n    }     \n}\n  </style>\n  \n  \n\n<div *ngFor=\"let task of zeroTasks\"  class=\"divider\">   \n  \n  <div *ngIf=\"task.status == 'done'\"  style=\"color: blue; opacity: .7;\">\n            <h4 style=\"display:inline-block;\" (click)=\"viewClickedTask(task)\">{{task.name}}</h4>\n            <div class=\"dropdown makeInline\" style=\"float: right;\">\n                <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                  \n                </button>\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n                  <span class=\"dropdown-item\" (click)=\"toggleSetTask(0,task)\">Complete</span>\n                  <span class=\"dropdown-item\" (click)=\"toggleSetTask(1,task)\">Active</span>\n                  <span class=\"dropdown-item\" (click)=\"taskDelete(task)\">Delete</span>\n                </div>\n              </div>\n\n    </div>\n\n    <div *ngIf=\"task.status == 'active'\">\n      <h4 style=\"display:inline-block;\" (click)=\"viewClickedTask(task)\">{{task.name}}</h4>\n      <div class=\"dropdown makeInline\" style=\"float: right;\">\n          <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            \n          </button>\n          <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n            <span class=\"dropdown-item\" (click)=\"toggleSetTask(0,task)\">Complete</span>\n            <span class=\"dropdown-item\" (click)=\"toggleSetTask(1,task)\">Active</span>\n            <span class=\"dropdown-item\" (click)=\"taskDelete(task)\">Delete</span>\n          </div>\n        </div>\n      <span style=\"display: inline-block;\">Due : {{task.due}} Priority : {{task.level}}</span>  \n</div>\n\n</div>\n  \n  \n<div *ngFor=\"let section of focussections\" ><br><br>\n\n\n  <div class=\"dropdown makeCenterInDiv\">\n    <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n      {{section.name}}\n    </button>\n    <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n      <span class=\"dropdown-item\" (click)=\"sectionSave(section)\">Edit</span>\n      <span class=\"dropdown-item\" (click)=\"sectionDelete(section)\">Delete</span>\n    </div>\n  </div>\n  \n  <img (click)=\"navigate2CreateTaskSection(section.ID)\"  src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Toicon-icon-pictogram-add.svg/1024px-Toicon-icon-pictogram-add.svg.png\" alt=\"addtask\" width=\"42\" height=\"42\">\n  \n  <div *ngFor=\"let task of sectionTasks\" >\n\n    <div *ngIf=\"task.section == section.ID\" class=\"divider\">\n\n      <div *ngIf=\"task.status == 'done'\"  style=\"color: blue; opacity: .7;\">\n        <div style=\"width:70%\" class=\"makeInline\">\n         <h4 style=\"display:inline-block;\" (click)=\"viewClickedTask(task)\" >{{task.name}}</h4>\n\n        </div>\n        \n        <div style=\"width:30%\" class=\"makeInline\">\n                 <div class=\"dropdown makeInline\" style=\"float: right;\">\n            <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n              \n            </button>\n            <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n              <span class=\"dropdown-item\" (click)=\"toggleSetTask(0,task)\">Complete</span>\n              <span class=\"dropdown-item\" (click)=\"toggleSetTask(1,task)\">Active</span>\n              <span class=\"dropdown-item\" (click)=\"taskDelete(task)\">Delete</span>\n            </div>\n        </div>\n        </div>\n\n \n      </div>\n\n      <div *ngIf=\"task.status == 'active'\" >\n        <div style=\"width:70%\" class=\"makeInline\">\n         <h4 style=\"display:inline-block;\" (click)=\"viewClickedTask(task)\" >{{task.name}}</h4>\n        <span style=\"display: inline-block;\">Due : {{task.due}} Priority : {{task.level}}</span>  \n\n        </div>\n        \n        <div style=\"width:30%\" class=\"makeInline\">\n                <div class=\"dropdown makeInline\" style=\"float: right;\">\n            <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n              \n            </button>\n            <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n              <span class=\"dropdown-item\" (click)=\"toggleSetTask(0,task)\">Complete</span>\n              <span class=\"dropdown-item\" (click)=\"toggleSetTask(1,task)\">Active</span>\n              <span class=\"dropdown-item\" (click)=\"taskDelete(task)\">Delete</span>\n            </div>\n        </div>\n        </div>\n \n      </div>\n\n    </div>\n        \n  </div>\n\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/quicktasksview/quicktasksview.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/quicktasksview/quicktasksview.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppQuicktasksviewQuicktasksviewComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>All Quick Tasks</p>\n\n<style>\n.makeInline{\n    display: inline-block;\n}\n.divider{\n    border-bottom-style:ridge;\n}\n\n</style>\n\n<div *ngFor=\"let task of quickTasks\" class=\"divider\">\n\n  <div *ngIf=\"task.status == 'done'\"  style=\"color: blue; opacity: .7;\">\n    <div style=\"width:70%\" class=\"makeInline\">\n     <h4 style=\"display:inline-block;\" (click)=\"viewClickedTask(task)\" >{{task.name}}</h4>\n           <!-- <span style=\"float: right;\">Due : {{task.due}} Priority : {{task.level}}</span>  -->\n\n    </div>\n    \n    <div style=\"width:30%\" class=\"makeInline\">\n      <div class=\"dropdown makeInline\" style=\"float: right;\">\n        <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          {{task.status}}\n        </button>\n        <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n          <span class=\"dropdown-item\" (click)=\"toggleSetTask(0,task)\">Complete</span>\n          <span class=\"dropdown-item\" (click)=\"toggleSetTask(1,task)\">Active</span>\n          <span class=\"dropdown-item\" (click)=\"taskDelete(task)\">Delete</span>\n        </div>\n    </div>\n    </div>\n\n  </div>\n\n  <div *ngIf=\"task.status == 'active'\">\n      <div style=\"width:70%\" class=\"makeInline\">\n        <h4 style=\"display:inline-block;\" (click)=\"viewClickedTask(task)\" >{{task.name}}</h4>\n        <span  style=\"display: inline-block;\">Due : {{task.due.substring(5)}} Priority : {{task.level}}</span>  \n\n      </div>\n      \n      <div style=\"width:30%\" class=\"makeInline\">\n        <div class=\"dropdown makeInline\" style=\"float: right;\">\n          <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            {{task.status}}\n          </button>\n          <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n            <span class=\"dropdown-item\" (click)=\"toggleSetTask(0,task)\">Complete</span>\n            <span class=\"dropdown-item\" (click)=\"toggleSetTask(1,task)\">Active</span>\n            <span class=\"dropdown-item\" (click)=\"taskDelete(task)\">Delete</span>\n          </div>\n      </div>\n      </div>\n  \n\n  </div>\n\n\n</div>\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/sidebar/sidebar.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sidebar/sidebar.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSidebarSidebarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<a  routerLink=\"\">Zen</a><br><br>\n<a  routerLink=\"/inbox\" >Inbox</a><br>\n<a  routerLink=\"/today\">Today</a><br>\n<a  routerLink=\"/tomorrow\" >Tomorrow</a><br>\n<a  routerLink=\"/week\">Week</a><br>\n<a  routerLink=\"/month\">Month</a><br>\n<a  routerLink=\"/overdue\" >Delinquent</a><br><br>\n<a  (click)=\"navigate2CreateTaskQuicky()\">Add Quick Task</a><br>\n<a  routerLink=\"/quicktasksview\">View Quick Tasks</a><br><br>\n\n<h5>Projects</h5>\n<a  routerLink=\"/createproject\">Add Project</a><br>\n<a  routerLink=\"/viewprojects\">View Projects</a><br>\n<span *ngFor=\"let project of projects\"  (click)=\"viewClickedProject(project)\">\n        <a>{{project.name}}</a><br>\n</span><br><br>\n\n<!--\n<h5>Filters</h5>\n<a  href=\"#\">Priority 1</a><br>\n<a  href=\"#\">Priority 2</a><br>\n<a  href=\"#\">Labels</a>\n-->\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/taskcreate/taskcreate.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/taskcreate/taskcreate.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTaskcreateTaskcreateComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>{{pageTitle}}</p>\n\n<input type=\"text\" id=\"taskName\" value=\"task name\"><br>\n<input type=\"text\" id=\"description\" value=\"description\"><br>\n<input type=\"date\" id=\"duedate\" value=\"{{currentDate}}\"><br>\n\n<button type=\"button\" class=\"btn btn-primary\" (click)=\"createTask()\">Create</button>\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/taskview/taskview.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/taskview/taskview.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTaskviewTaskviewComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n<style>\n    .h4center{\n        text-align: center;\n    }\n\n.divider{\n    border-bottom-style:ridge;\n}\n.divMax{\n    height: 100%;\n    width: 100%;\n}\n.floatRightTHings{\n    float: right;\n}\n.makeInline{\n    display: inline-block;\n}\ninput {\n    display: block;\n    width: 100%;\n}\n.scription{\n    height: 100%;\n}\n.container{\n    padding: 0;\n}\n.taa{\n    display: block;\n    height: 50%;  \n    width: 100%;\n}\n.spanny{\n    display: block;\n    text-align: center;\n    height: 25%;   \n    width: 100%;\n}\n.spanny0{\n    display: block;\n    text-align: center;\n    width: 100%;\n}\n@media (min-width: 576px){\n    .container{\n        max-width: none; \n    }     \n}\n</style>\n        \n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-6\">\n            <span class=\"spanny0\">Name</span>\n            <input type=\"text\" id=\"focusTaskname\" value=\"{{focusTask.name}}\">\n            <span class=\"spanny0\">Due</span>\n            <input type=\"date\" id=\"focusTaskdue\" value=\"{{focusTask.due}}\">\n            <span class=\"spanny0\">Level</span>\n            <input type=\"number\" id=\"focusTasklevel\" value=\"{{focusTask.level}}\">\n            <span class=\"spanny0\">Status</span>\n            <div>{{focusTask.status}}</div>\n            <span class=\"spanny0\">Created</span>\n            <div>{{focusTask.created}}</div>\n        </div>\n\n        <div class=\"col-6\">\n            <span class=\"spanny\">Description</span>\n            <textarea  type=\"textarea\" class=\"taa\" id=\"focusTaskdescription\" value=\"{{focusTask.description}}\" >\n            </textarea>\n            <img *ngIf=\"subToggle\" (click)=\"navigate2CreateSubTask(focusTask.ID)\"  src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Toicon-icon-pictogram-add.svg/1024px-Toicon-icon-pictogram-add.svg.png\" alt=\"addtask\" width=\"42\" height=\"42\">\n            <img style=\"float: right;\" (click)=\"taskDelete(focusTask)\" src=\"https://upload.wikimedia.org/wikipedia/en/thumb/5/58/Icon_delete_yellow.svg/320px-Icon_delete_yellow.svg.png\" alt=\"deleteproject\" width=\"50\" >\n            <img *ngIf=\"subToggle\" style=\"float: right;\" (click)=\"taskSaveNewData(focusTask)\" src=\"assets/save.png\" alt=\"saveproject\" width=\"50\" >   \n            <img *ngIf=\"subToggle == false\" style=\"float: right;\" (click)=\"subTaskSaveNewData(focusTask)\" src=\"assets/save.png\" alt=\"saveproject\" width=\"50\" >   \n        </div>\n    </div>\n</div>\n\n  \n\n<br><br>\n<h4  class=\"h4center\" *ngIf=\"subToggle\">Sub Tasks</h4>\n\n\n<div *ngFor=\"let subTask of subTasks\"  class=\"divider\">\n    <div *ngIf=\"subTask.task == focusTask.ID\">\n\n\n        <div *ngIf=\"subTask.status == 'done'\"  style=\"color: blue; opacity: .7;\">\n            <div style=\"width:70%\" class=\"makeInline\">\n                <h4 style=\"display:inline-block;\" (click)=\"viewClickedSubTask(subTask)\">{{subTask.name}}</h4>\n\n            </div>\n            \n            <div style=\"width:30%\" class=\"makeInline\">\n                            <div class=\"dropdown makeInline\" style=\"float: right;\">\n                    <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                    \n                    </button>\n                    <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n                        <span class=\"dropdown-item\" (click)=\"toggleSetSubTask(0,subTask)\">Complete</span>\n                        <span class=\"dropdown-item\" (click)=\"toggleSetSubTask(1,subTask)\">Active</span>\n                    <span class=\"dropdown-item\" (click)=\"subTaskDeleteDropdown(subTask)\">Delete</span>\n                    </div>\n                </div>\n            </div>\n\n\n        </div>\n\n        <div *ngIf=\"subTask.status == 'active'\" >\n            <div style=\"width:70%\" class=\"makeInline\">\n             <h4 style=\"display:inline-block;\" (click)=\"viewClickedSubTask(subTask)\">{{subTask.name}}</h4>\n            <span style=\"display: inline-block;\">Due : {{subTask.due}} Priority : {{subTask.level}}</span>  \n\n            </div>\n            \n            <div style=\"width:30%\" class=\"makeInline\">\n                <div class=\"dropdown makeInline\" style=\"float: right;\">\n                    <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                      \n                    </button>\n                    <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n                        <span class=\"dropdown-item\" (click)=\"toggleSetSubTask(0,subTask)\">Complete</span>\n                        <span class=\"dropdown-item\" (click)=\"toggleSetSubTask(1,subTask)\">Active</span>\n                      <span class=\"dropdown-item\" (click)=\"subTaskDeleteDropdown(subTask)\">Delete</span>\n                    </div>\n                </div>\n            </div>\n\n    \n        </div>\n\n\n    </div>\n</div>\n\n      \n                \n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/today/today.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/today/today.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTodayTodayComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>Todays task</p>\n\n<style>\n.makeInline{\n    display: inline-block;\n}\n.divider{\n    border-bottom-style:ridge;\n\n}\n\n</style>\n\n<div *ngFor=\"let task of todaysTasks\" class=\"divider\">\n\n  <div *ngIf=\"task.status == 'done'\"  style=\"color: blue; opacity: .7;\">\n    <div style=\"width:70%\" class=\"makeInline\">\n      <h4 style=\"display:inline-block;\" (click)=\"viewClickedTask(task)\" >{{task.name}}</h4>\n      <!-- <span style=\"float: right;\">Due : {{task.due}} Priority : {{task.level}}</span>  -->\n    </div>\n    <div style=\"width:30%\" class=\"makeInline\">\n      <div class=\"dropdown makeInline\" style=\"float: right;\">\n        <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          {{task.status}}\n        </button>\n        <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n          <span class=\"dropdown-item\" (click)=\"toggleSetTask(0,task)\">Complete</span>\n          <span class=\"dropdown-item\" (click)=\"toggleSetTask(1,task)\">Active</span>\n          <span class=\"dropdown-item\" (click)=\"taskDelete(task)\">Delete</span>\n        </div>\n    </div>\n    </div>\n\n           \n  </div>\n\n  <div *ngIf=\"task.status == 'active'\">\n      <div style=\"width:70%\" class=\"makeInline\">\n        <h4 style=\"display:inline-block;\" (click)=\"viewClickedTask(task)\" >{{task.name}}</h4>\n        <span style=\"display: inline-block;\">Due : {{task.due.substring(5)}} Priority : {{task.level}}</span>  \n\n    </div>\n    <div style=\"width:30%\" class=\"makeInline\">\n        <div class=\"dropdown makeInline\" style=\"float: right;\">\n                <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                  {{task.status}}\n                </button>\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n                  <span class=\"dropdown-item\" (click)=\"toggleSetTask(0,task)\">Complete</span>\n                  <span class=\"dropdown-item\" (click)=\"toggleSetTask(1,task)\">Active</span>\n                  <span class=\"dropdown-item\" (click)=\"taskDelete(task)\">Delete</span>\n                </div>\n          </div>\n    </div>\n  \n  </div>\n\n\n</div>\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tomorrow/tomorrow.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tomorrow/tomorrow.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTomorrowTomorrowComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>Tomorrows task</p>\n\n<style>\n.makeInline{\n    display: inline-block;\n}\n.divider{\n    border-bottom-style:ridge;\n\n}\n\n\n</style>\n\n<div *ngFor=\"let task of tomorrowsTasks\" class=\"divider\">\n\n  <div *ngIf=\"task.status == 'done'\"  style=\"color: blue; opacity: .7;\">\n    <div style=\"width:70%\" class=\"makeInline\">\n      <h4 style=\"display:inline-block;\" (click)=\"viewClickedTask(task)\" >{{task.name}}</h4>\n      <!-- <span style=\"float: right;\">Due : {{task.due}} Priority : {{task.level}}</span>  -->\n\n    </div>\n    \n    <div style=\"width:30%\" class=\"makeInline\">\n      <div class=\"dropdown makeInline\" style=\"float: right;\">\n        <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          {{task.status}}\n        </button>\n        <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n          <span class=\"dropdown-item\" (click)=\"toggleSetTask(0,task)\">Complete</span>\n          <span class=\"dropdown-item\" (click)=\"toggleSetTask(1,task)\">Active</span>\n          <span class=\"dropdown-item\" (click)=\"taskDelete(task)\">Delete</span>\n        </div>\n    </div>\n    </div>\n\n  </div>\n\n  <div *ngIf=\"task.status == 'active'\">\n\n    <div style=\"width:70%\" class=\"makeInline\">\n      <h4 style=\"display:inline-block;\" (click)=\"viewClickedTask(task)\" >{{task.name}}</h4>\n      <span style=\"display: inline-block;\">Due : {{task.due.substring(5)}} Priority : {{task.level}}</span>  \n\n    </div>\n    \n    <div style=\"width:30%\" class=\"makeInline\">\n      <div class=\"dropdown makeInline\" style=\"float: right;\">\n        <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          {{task.status}}\n        </button>\n        <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n          <span class=\"dropdown-item\" (click)=\"toggleSetTask(0,task)\">Complete</span>\n          <span class=\"dropdown-item\" (click)=\"toggleSetTask(1,task)\">Active</span>\n          <span class=\"dropdown-item\" (click)=\"taskDelete(task)\">Delete</span>\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n\n</div>\n\n\n\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/topbar/topbar.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/topbar/topbar.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTopbarTopbarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<style>\n    button{\n        float: right;\n        height: 10vh;\n    }\n    h1{\n        color: #EF7B45;\n    }\n</style>\n\n\n<div class=\"container\" >\n    <div class=\"row\" >\n\n        \n      <div class=\"col-4\">\n         <!-- <h1>TaskIt</h1>  --> \n      </div>\n\n      <div class=\"col-4\">\n        <button type=\"button\" class=\"btn btn-black\" (click)=\"goBackButton()\">Back</button>\n      </div>\n\n        <div class=\"col-4\">\n            <button type=\"button\"  (click)=\"savePlayer()\" class=\"btn btn-black\">\n            Save\n            </button> \n        </div>\n\n\n\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/week/week.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/week/week.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppWeekWeekComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>Weekly task</p>\n\n<style>\n.makeInline{\n    display: inline-block;\n}\n.divider{\n    border-bottom-style:ridge;\n}\n\n</style>\n\n<div *ngFor=\"let task of weeksTasks\" class=\"divider\">\n\n  <div *ngIf=\"task.status == 'done'\"  style=\"color: blue; opacity: .7;\">\n\n    <div style=\"width:70%\" class=\"makeInline\">\n      <h4 style=\"display:inline-block;\" (click)=\"viewClickedTask(task)\" >{{task.name}}</h4>\n      <span style=\"display: inline-block;\">Due : {{task.due.substring(5)}} Priority : {{task.level}}</span>  \n    </div>\n    \n    <div style=\"width:30%\" class=\"makeInline\">\n      <div class=\"dropdown makeInline\" style=\"float: right;\">\n        <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          {{task.status}}\n        </button>\n        <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n          <span class=\"dropdown-item\" (click)=\"toggleSetTask(0,task)\">Complete</span>\n          <span class=\"dropdown-item\" (click)=\"toggleSetTask(1,task)\">Active</span>\n          <span class=\"dropdown-item\" (click)=\"taskDelete(task)\">Delete</span>\n        </div>\n      </div>\n    </div>\n\n  </div>\n \n  <!--  -->\n  <div *ngIf=\"task.status == 'active'\">\n    <div style=\"width:70%\" class=\"makeInline\">\n      <h4 style=\"display:inline-block;\" (click)=\"viewClickedTask(task)\" >{{task.name}}</h4>\n      <span style=\"display: inline-block;\">Due : {{task.due.substring(5)}} Priority : {{task.level}}</span>  \n    </div>\n    \n    <div style=\"width:30%\" class=\"makeInline\">\n      <div class=\"dropdown makeInline\" style=\"float: right;\">\n        <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          {{task.status}}\n        </button>\n        <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n          <span class=\"dropdown-item\" (click)=\"toggleSetTask(0,task)\">Complete</span>\n          <span class=\"dropdown-item\" (click)=\"toggleSetTask(1,task)\">Active</span>\n          <span class=\"dropdown-item\" (click)=\"taskDelete(task)\">Delete</span>\n        </div>\n    </div>\n    </div>\n  </div>\n\n\n</div>\n\n\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
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


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _inbox_inbox_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./inbox/inbox.component */
    "./src/app/inbox/inbox.component.ts");
    /* harmony import */


    var _today_today_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./today/today.component */
    "./src/app/today/today.component.ts");
    /* harmony import */


    var _tomorrow_tomorrow_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./tomorrow/tomorrow.component */
    "./src/app/tomorrow/tomorrow.component.ts");
    /* harmony import */


    var _week_week_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./week/week.component */
    "./src/app/week/week.component.ts");
    /* harmony import */


    var _month_month_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./month/month.component */
    "./src/app/month/month.component.ts");
    /* harmony import */


    var _taskcreate_taskcreate_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./taskcreate/taskcreate.component */
    "./src/app/taskcreate/taskcreate.component.ts");
    /* harmony import */


    var _projectcreate_projectcreate_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./projectcreate/projectcreate.component */
    "./src/app/projectcreate/projectcreate.component.ts");
    /* harmony import */


    var _projectsview_projectsview_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./projectsview/projectsview.component */
    "./src/app/projectsview/projectsview.component.ts");
    /* harmony import */


    var _projectview_projectview_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./projectview/projectview.component */
    "./src/app/projectview/projectview.component.ts");
    /* harmony import */


    var _landing_landing_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./landing/landing.component */
    "./src/app/landing/landing.component.ts");
    /* harmony import */


    var _taskview_taskview_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./taskview/taskview.component */
    "./src/app/taskview/taskview.component.ts");
    /* harmony import */


    var _quicktasksview_quicktasksview_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./quicktasksview/quicktasksview.component */
    "./src/app/quicktasksview/quicktasksview.component.ts");
    /* harmony import */


    var _overdue_overdue_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./overdue/overdue.component */
    "./src/app/overdue/overdue.component.ts");

    var routes = [{
      path: '',
      component: _landing_landing_component__WEBPACK_IMPORTED_MODULE_12__["LandingComponent"]
    }, {
      path: 'inbox',
      component: _inbox_inbox_component__WEBPACK_IMPORTED_MODULE_3__["InboxComponent"]
    }, {
      path: 'today',
      component: _today_today_component__WEBPACK_IMPORTED_MODULE_4__["TodayComponent"]
    }, {
      path: 'tomorrow',
      component: _tomorrow_tomorrow_component__WEBPACK_IMPORTED_MODULE_5__["TomorrowComponent"]
    }, {
      path: 'week',
      component: _week_week_component__WEBPACK_IMPORTED_MODULE_6__["WeekComponent"]
    }, {
      path: 'month',
      component: _month_month_component__WEBPACK_IMPORTED_MODULE_7__["MonthComponent"]
    }, {
      path: 'overdue',
      component: _overdue_overdue_component__WEBPACK_IMPORTED_MODULE_15__["OverdueComponent"]
    }, {
      path: 'createtask/:tasktype',
      component: _taskcreate_taskcreate_component__WEBPACK_IMPORTED_MODULE_8__["TaskcreateComponent"]
    }, {
      path: 'createproject',
      component: _projectcreate_projectcreate_component__WEBPACK_IMPORTED_MODULE_9__["ProjectcreateComponent"]
    }, {
      path: 'viewtask/:task',
      component: _taskview_taskview_component__WEBPACK_IMPORTED_MODULE_13__["TaskviewComponent"]
    }, {
      path: 'viewproject/:project',
      component: _projectview_projectview_component__WEBPACK_IMPORTED_MODULE_11__["ProjectviewComponent"]
    }, {
      path: 'viewprojects',
      component: _projectsview_projectsview_component__WEBPACK_IMPORTED_MODULE_10__["ProjectsviewComponent"]
    }, {
      path: 'quicktasksview',
      component: _quicktasksview_quicktasksview_component__WEBPACK_IMPORTED_MODULE_14__["QuicktasksviewComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "mat-sidenav-container{\r\n    height: 99%;\r\n}\r\n\r\n#topbarContainer{\r\n    \r\n    background-color: #170DBF;\r\n    border-color: #EF7B45;\r\n    border-style: solid;\r\n    border-radius: 5px;\r\n    overflow: hidden;\r\n}\r\n\r\n#sidebar {\r\n    height: 100%;\r\n    border-color: #170DBF;\r\n    border-style: solid;\r\n    border-radius: 5px;\r\n}\r\n\r\n#routerbar {\r\n    height: 90vh;\r\n    background-color: black;\r\n    color: white;\r\n}\r\n\r\n#topbar{\r\n    width: 100%;\r\n}\r\n\r\ndiv{\r\n      margin-right: 0px;\r\n      margin-left: 0px;\r\n      padding-left: 0;\r\n      padding-right: 0;\r\n  }\r\n\r\n.mat-drawer-side{\r\n    background-color: #EF7B45;\r\n    color: black;\r\n}\r\n\r\n.mat-drawer-container{\r\n    background-color: black;\r\n}\r\n\r\n@media (min-width: 576px){\r\n  .container {\r\n      max-width: none;\r\n  }}\r\n\r\n@media (min-width: 768px){\r\n  .container {\r\n      max-width: none;\r\n  }}\r\n\r\n@media (min-width: 992px){\r\n  .container {\r\n      max-width: none;\r\n  }}\r\n\r\n@media (min-width: 578px){\r\n  .container {\r\n      max-width: none;\r\n  }}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7O0lBRUkseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtNQUNNLGlCQUFpQjtNQUNqQixnQkFBZ0I7TUFDaEIsZUFBZTtNQUNmLGdCQUFnQjtFQUNwQjs7QUFHRjtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUlFO0VBQ0E7TUFDSSxlQUFlO0VBQ25CLENBQUM7O0FBRUQ7RUFDQTtNQUNJLGVBQWU7RUFDbkIsQ0FBQzs7QUFFRDtFQUNBO01BQ0ksZUFBZTtFQUNuQixDQUFDOztBQUVEO0VBQ0E7TUFDSSxlQUFlO0VBQ25CLENBQUMiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1zaWRlbmF2LWNvbnRhaW5lcntcclxuICAgIGhlaWdodDogOTklO1xyXG59XHJcblxyXG4jdG9wYmFyQ29udGFpbmVye1xyXG4gICAgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTcwREJGO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjRUY3QjQ1O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbiNzaWRlYmFyIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJvcmRlci1jb2xvcjogIzE3MERCRjtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbiNyb3V0ZXJiYXIge1xyXG4gICAgaGVpZ2h0OiA5MHZoO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbiN0b3BiYXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuZGl2e1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gIH1cclxuXHJcblxyXG4ubWF0LWRyYXdlci1zaWRle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VGN0I0NTtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLm1hdC1kcmF3ZXItY29udGFpbmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbn1cclxuICBcclxuICBcclxuICBcclxuICBAbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpe1xyXG4gIC5jb250YWluZXIge1xyXG4gICAgICBtYXgtd2lkdGg6IG5vbmU7XHJcbiAgfX1cclxuICBcclxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpe1xyXG4gIC5jb250YWluZXIge1xyXG4gICAgICBtYXgtd2lkdGg6IG5vbmU7XHJcbiAgfX1cclxuICBcclxuICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpe1xyXG4gIC5jb250YWluZXIge1xyXG4gICAgICBtYXgtd2lkdGg6IG5vbmU7XHJcbiAgfX1cclxuICBcclxuICBAbWVkaWEgKG1pbi13aWR0aDogNTc4cHgpe1xyXG4gIC5jb250YWluZXIge1xyXG4gICAgICBtYXgtd2lkdGg6IG5vbmU7XHJcbiAgfX1cclxuXHJcblxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.events = [];
      this.title = 'ngGatordone'; //console.log("app component loaded")
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: initializeApp1, AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "initializeApp1", function () {
      return initializeApp1;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./player */
    "./src/app/player.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _topbar_topbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./topbar/topbar.component */
    "./src/app/topbar/topbar.component.ts");
    /* harmony import */


    var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./sidebar/sidebar.component */
    "./src/app/sidebar/sidebar.component.ts");
    /* harmony import */


    var _inbox_inbox_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./inbox/inbox.component */
    "./src/app/inbox/inbox.component.ts");
    /* harmony import */


    var _projectcreate_projectcreate_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./projectcreate/projectcreate.component */
    "./src/app/projectcreate/projectcreate.component.ts");
    /* harmony import */


    var _taskcreate_taskcreate_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./taskcreate/taskcreate.component */
    "./src/app/taskcreate/taskcreate.component.ts");
    /* harmony import */


    var _landing_landing_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./landing/landing.component */
    "./src/app/landing/landing.component.ts");
    /* harmony import */


    var _taskview_taskview_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./taskview/taskview.component */
    "./src/app/taskview/taskview.component.ts");
    /* harmony import */


    var _projectsview_projectsview_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./projectsview/projectsview.component */
    "./src/app/projectsview/projectsview.component.ts");
    /* harmony import */


    var _projectview_projectview_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./projectview/projectview.component */
    "./src/app/projectview/projectview.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _today_today_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./today/today.component */
    "./src/app/today/today.component.ts");
    /* harmony import */


    var _week_week_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./week/week.component */
    "./src/app/week/week.component.ts");
    /* harmony import */


    var _month_month_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./month/month.component */
    "./src/app/month/month.component.ts");
    /* harmony import */


    var _tomorrow_tomorrow_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./tomorrow/tomorrow.component */
    "./src/app/tomorrow/tomorrow.component.ts");
    /* harmony import */


    var _quicktasksview_quicktasksview_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./quicktasksview/quicktasksview.component */
    "./src/app/quicktasksview/quicktasksview.component.ts");
    /* harmony import */


    var _overdue_overdue_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./overdue/overdue.component */
    "./src/app/overdue/overdue.component.ts");

    function initializeApp1(player) {
      return function () {
        return player.loadPlayer();
      };
    }

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _topbar_topbar_component__WEBPACK_IMPORTED_MODULE_7__["TopbarComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__["SidebarComponent"], _inbox_inbox_component__WEBPACK_IMPORTED_MODULE_9__["InboxComponent"], _projectcreate_projectcreate_component__WEBPACK_IMPORTED_MODULE_10__["ProjectcreateComponent"], _taskcreate_taskcreate_component__WEBPACK_IMPORTED_MODULE_11__["TaskcreateComponent"], _landing_landing_component__WEBPACK_IMPORTED_MODULE_12__["LandingComponent"], _taskview_taskview_component__WEBPACK_IMPORTED_MODULE_13__["TaskviewComponent"], _projectsview_projectsview_component__WEBPACK_IMPORTED_MODULE_14__["ProjectsviewComponent"], _projectview_projectview_component__WEBPACK_IMPORTED_MODULE_15__["ProjectviewComponent"], _today_today_component__WEBPACK_IMPORTED_MODULE_18__["TodayComponent"], _week_week_component__WEBPACK_IMPORTED_MODULE_19__["WeekComponent"], _month_month_component__WEBPACK_IMPORTED_MODULE_20__["MonthComponent"], _tomorrow_tomorrow_component__WEBPACK_IMPORTED_MODULE_21__["TomorrowComponent"], _quicktasksview_quicktasksview_component__WEBPACK_IMPORTED_MODULE_22__["QuicktasksviewComponent"], _overdue_overdue_component__WEBPACK_IMPORTED_MODULE_23__["OverdueComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatSidenavModule"], _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatIconModule"]],
      providers: [_player__WEBPACK_IMPORTED_MODULE_4__["Player"], {
        provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["APP_INITIALIZER"],
        useFactory: initializeApp1,
        multi: true,
        deps: [_player__WEBPACK_IMPORTED_MODULE_4__["Player"]]
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/inbox/inbox.component.css":
  /*!*******************************************!*\
    !*** ./src/app/inbox/inbox.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppInboxInboxComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luYm94L2luYm94LmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/inbox/inbox.component.ts":
  /*!******************************************!*\
    !*** ./src/app/inbox/inbox.component.ts ***!
    \******************************************/

  /*! exports provided: InboxComponent */

  /***/
  function srcAppInboxInboxComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InboxComponent", function () {
      return InboxComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../player */
    "./src/app/player.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var InboxComponent =
    /*#__PURE__*/
    function () {
      function InboxComponent(player, router) {
        _classCallCheck(this, InboxComponent);

        this.player = player;
        this.router = router;
      }

      _createClass(InboxComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.viewInboxTasks();
        }
      }, {
        key: "viewInboxTasks",
        value: function viewInboxTasks() {
          var focus = this.player.getInboxTasks();
          this.futureTasks = focus; //console.log(this.quickTasks);
        }
      }, {
        key: "viewClickedTask",
        value: function viewClickedTask(focusTask) {
          //console.log(focusTask)
          this.player.setNavBackState("inbox", "empty");
          this.router.navigate(['/viewtask', JSON.stringify(focusTask)]);
        }
      }, {
        key: "taskDelete",
        value: function taskDelete(focusEleTask) {
          if (focusEleTask.task == null || focusEleTask.task == undefined) {
            this.player.deleteTask(focusEleTask);
            console.log(focusEleTask);
          } else {
            this.player.deleteSubTask(focusEleTask);
          }

          this.viewInboxTasks(); //console.log(this.player.player.tasks);
        }
      }, {
        key: "toggleSetTask",
        value: function toggleSetTask(key, focusEleTask) {
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
      }]);

      return InboxComponent;
    }();

    InboxComponent.ctorParameters = function () {
      return [{
        type: _player__WEBPACK_IMPORTED_MODULE_2__["Player"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    InboxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-inbox',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./inbox.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/inbox/inbox.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./inbox.component.css */
      "./src/app/inbox/inbox.component.css")).default]
    })], InboxComponent);
    /***/
  },

  /***/
  "./src/app/landing/landing.component.css":
  /*!***********************************************!*\
    !*** ./src/app/landing/landing.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppLandingLandingComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmcvbGFuZGluZy5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/landing/landing.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/landing/landing.component.ts ***!
    \**********************************************/

  /*! exports provided: LandingComponent */

  /***/
  function srcAppLandingLandingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LandingComponent", function () {
      return LandingComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var LandingComponent =
    /*#__PURE__*/
    function () {
      function LandingComponent() {
        _classCallCheck(this, LandingComponent);
      }

      _createClass(LandingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LandingComponent;
    }();

    LandingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-landing',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./landing.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/landing/landing.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./landing.component.css */
      "./src/app/landing/landing.component.css")).default]
    })], LandingComponent);
    /***/
  },

  /***/
  "./src/app/month/month.component.css":
  /*!*******************************************!*\
    !*** ./src/app/month/month.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppMonthMonthComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vbnRoL21vbnRoLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/month/month.component.ts":
  /*!******************************************!*\
    !*** ./src/app/month/month.component.ts ***!
    \******************************************/

  /*! exports provided: MonthComponent */

  /***/
  function srcAppMonthMonthComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MonthComponent", function () {
      return MonthComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../player */
    "./src/app/player.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var MonthComponent =
    /*#__PURE__*/
    function () {
      function MonthComponent(player, router) {
        _classCallCheck(this, MonthComponent);

        this.player = player;
        this.router = router;
      }

      _createClass(MonthComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var tempFullDate = new Date();
          var tempYear = tempFullDate.getFullYear();
          var tempMonth = tempFullDate.getMonth() + 1 + "";

          if (tempMonth.length == 1) {
            tempMonth = "0" + tempMonth;
          }

          var tempDate = tempFullDate.getDate();
          this.todaysDate = tempYear + "-" + tempMonth + "-" + tempDate; //console.log(this.todaysDate);

          this.viewMonthsTasks();
        }
      }, {
        key: "viewMonthsTasks",
        value: function viewMonthsTasks() {
          var tempFullDate = new Date();
          var tempYear = tempFullDate.getFullYear();
          var tempMonth = tempFullDate.getMonth() + "";

          if (tempMonth.length == 1) {
            tempMonth = "0" + tempMonth;
          }

          var tempDate = tempFullDate.getDate(); //this.monthsTasks = this.player.getMonthsTask(this.todaysDate,tempYear,tempMonth,tempDate);

          this.monthsTasks = this.player.getMonthsTask();
        }
      }, {
        key: "toggleSetTask",
        value: function toggleSetTask(key, focusEleTask) {
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
      }, {
        key: "viewClickedTask",
        value: function viewClickedTask(focusTask) {
          //console.log(focusTask)
          this.player.setNavBackState("inbox", "empty");
          this.router.navigate(['/viewtask', JSON.stringify(focusTask)]);
        }
      }, {
        key: "taskDelete",
        value: function taskDelete(focusEleTask) {
          if (focusEleTask.task == null || focusEleTask.task == undefined) {
            this.player.deleteTask(focusEleTask); //console.log(focusEleTask);
          } else {
            this.player.deleteSubTask(focusEleTask);
          }

          this.viewMonthsTasks(); //console.log(this.player.player.tasks);
        }
      }]);

      return MonthComponent;
    }();

    MonthComponent.ctorParameters = function () {
      return [{
        type: _player__WEBPACK_IMPORTED_MODULE_2__["Player"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    MonthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-month',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./month.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/month/month.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./month.component.css */
      "./src/app/month/month.component.css")).default]
    })], MonthComponent);
    /***/
  },

  /***/
  "./src/app/overdue/overdue.component.css":
  /*!***********************************************!*\
    !*** ./src/app/overdue/overdue.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppOverdueOverdueComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL292ZXJkdWUvb3ZlcmR1ZS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/overdue/overdue.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/overdue/overdue.component.ts ***!
    \**********************************************/

  /*! exports provided: OverdueComponent */

  /***/
  function srcAppOverdueOverdueComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OverdueComponent", function () {
      return OverdueComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../player */
    "./src/app/player.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var OverdueComponent =
    /*#__PURE__*/
    function () {
      function OverdueComponent(player, router) {
        _classCallCheck(this, OverdueComponent);

        this.player = player;
        this.router = router;
      }

      _createClass(OverdueComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.viewOverdueTasks();
        }
      }, {
        key: "viewOverdueTasks",
        value: function viewOverdueTasks() {
          this.overdueTasks = this.player.getOverdueTasks();
        }
      }, {
        key: "toggleSetTask",
        value: function toggleSetTask(key, focusEleTask) {
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
      }, {
        key: "viewClickedTask",
        value: function viewClickedTask(focusTask) {
          //console.log(focusTask)
          this.player.setNavBackState("inbox", "empty");
          this.router.navigate(['/viewtask', JSON.stringify(focusTask)]);
        }
      }, {
        key: "taskDelete",
        value: function taskDelete(focusEleTask) {
          if (focusEleTask.task == null || focusEleTask.task == undefined) {
            this.player.deleteTask(focusEleTask); //console.log(focusEleTask);
          } else {
            this.player.deleteSubTask(focusEleTask);
          }

          this.viewOverdueTasks(); //console.log(this.player.player.tasks);
        }
      }]);

      return OverdueComponent;
    }();

    OverdueComponent.ctorParameters = function () {
      return [{
        type: _player__WEBPACK_IMPORTED_MODULE_2__["Player"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    OverdueComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-overdue',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./overdue.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/overdue/overdue.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./overdue.component.css */
      "./src/app/overdue/overdue.component.css")).default]
    })], OverdueComponent);
    /***/
  },

  /***/
  "./src/app/player.ts":
  /*!***************************!*\
    !*** ./src/app/player.ts ***!
    \***************************/

  /*! exports provided: Player */

  /***/
  function srcAppPlayerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Player", function () {
      return Player;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! date-fns */
    "./node_modules/date-fns/esm/index.js"); //var url = "http://localhost:8080/ngGatordone/src/player.json";//"http://localhost/ngMovingProject/src/player.json";


    var url = "/taskit/load"; //player.json";//"http://localhost/ngMovingProject/src/player.json";

    var valueC = getCookie("gatorc");
    var valueP = getCookie("gatorp");
    var valueBody = {
      "codename": valueC,
      "pin": valueP
    };

    var Player =
    /*#__PURE__*/
    function () {
      //focusTask : number
      //focusSubTask : number
      function Player(http) {
        _classCallCheck(this, Player);

        this.http = http;
        this.ngOnInit();
      }

      _createClass(Player, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));
        }
      }, {
        key: "loadPlayer",
        value: function loadPlayer() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var _this = this;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.http.post(url, valueBody).toPromise().then(function (res) {
                      _this.player = res; //console.log("The player is fully loaded");
                      //console.log(res);
                    });

                  case 2:
                    return _context2.abrupt("return", _context2.sent);

                  case 3:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "addTask",
        value: function addTask(newTask) {
          var validID = this.getNextTaskID();
          newTask.ID = validID;
          this.player.tasks.push(newTask); //console.log(this.player.tasks);
        }
      }, {
        key: "addSubTask",
        value: function addSubTask(newTask) {
          var validID = this.getNextSubTaskID();
          newTask.ID = validID;
          this.player.subTasks.push(newTask); //console.log(this.player.tasks);
        }
      }, {
        key: "addSection",
        value: function addSection(newSection) {
          var validID = this.getNextSectionID();
          newSection.ID = validID;
          this.player.sections.push(newSection); //console.log(this.player.tasks);
        }
      }, {
        key: "addProject",
        value: function addProject(newProject) {
          var validID = this.getNextProjectID();
          newProject.ID = validID;
          this.player.projects.push(newProject); //console.log(this.player.projects);
        }
      }, {
        key: "deleteProject",
        value: function deleteProject(deleteThisProject) {
          var projectIdFocus = deleteThisProject.ID;
          var indexFocus = this.player.projects.indexOf(deleteThisProject);
          this.player.projects.splice(indexFocus, 1);
          this.deleteSections(projectIdFocus);
          this.deleteTasks(projectIdFocus);
        }
      }, {
        key: "deleteSections",
        value: function deleteSections(focusID) {
          for (var xy = 0; xy < this.player.sections.length; xy++) {
            if (this.player.sections[xy].project == focusID) {
              console.log(this.player.sections[xy]);
              var indexFocus = this.player.sections.indexOf(this.player.sections[xy]);
              this.player.sections.splice(indexFocus, 1);
              xy--;
            }
          }
        }
      }, {
        key: "deleteTasks",
        value: function deleteTasks(focusID) {
          for (var x = 0; x < this.player.tasks.length; x++) {
            if (this.player.tasks[x].project == focusID) {
              this.deleteSubTasks(this.player.tasks[x].ID);
              var indexFocus = this.player.tasks.indexOf(this.player.tasks[x]);
              this.player.tasks.splice(indexFocus, 1);
              x--;
            }
          }
        }
      }, {
        key: "deleteTasks4Section",
        value: function deleteTasks4Section(focusIDsection) {
          for (var x = 0; x < this.player.tasks.length; x++) {
            if (this.player.tasks[x].section == focusIDsection) {
              this.deleteSubTasks(this.player.tasks[x].ID);
              var indexFocus = this.player.tasks.indexOf(this.player.tasks[x]);
              this.player.tasks.splice(indexFocus, 1);
              x--;
            }
          }
        }
      }, {
        key: "deleteSubTasks",
        value: function deleteSubTasks(focusID) {
          for (var x = 0; x < this.player.subTasks.length; x++) {
            if (this.player.subTasks[x].task == focusID) {
              var indexFocus = this.player.subTasks.indexOf(this.player.subTasks[x]);
              this.player.subTasks.splice(indexFocus, 1);
              x--;
            }
          }
        } //////////

      }, {
        key: "deleteTask",
        value: function deleteTask(deleteThisTask) {
          var taskIdFocus = deleteThisTask.ID;
          var newfocutask = this.findThisTask(deleteThisTask.ID);
          var indexFocus = this.player.tasks.indexOf(newfocutask);
          this.player.tasks.splice(indexFocus, 1);
          this.deleteSubTasks(taskIdFocus);
        }
      }, {
        key: "deleteSection",
        value: function deleteSection(deleteThisSection) {
          var sectionIdFocus = deleteThisSection.ID;
          var newfocusection = this.findThisSection(deleteThisSection.ID);
          var indexFocus = this.player.sections.indexOf(newfocusection);
          this.player.sections.splice(indexFocus, 1);
          this.deleteTasks4Section(sectionIdFocus);
        }
      }, {
        key: "deleteSubTask",
        value: function deleteSubTask(deleteThisSubTask) {
          var taskIdFocus = deleteThisSubTask.ID;
          var newfocutask = this.findThisSubTask(deleteThisSubTask.ID);
          var indexFocus = this.player.subTasks.indexOf(newfocutask);
          this.player.subTasks.splice(indexFocus, 1);
        }
      }, {
        key: "getNextTaskID",
        value: function getNextTaskID() {
          var validID = false;
          var newID = -1;

          if (this.player.tasks.length > 0) {
            while (validID == false) {
              newID++;
              validID = true;

              for (var x = 0; x < this.player.tasks.length; x++) {
                if (newID == this.player.tasks[x].ID) {
                  //console.log("Dont use id number: " + newID);
                  validID = false;
                }
              } // loop through all tasks in player

            }
          } else {
            newID = 0;
          }

          return newID;
        }
      }, {
        key: "getNextSubTaskID",
        value: function getNextSubTaskID() {
          //console.log(this.player.tasks.length);
          var validID = false;
          var newID = -1;

          if (this.player.subTasks.length > 0) {
            while (validID == false) {
              newID++;
              validID = true;

              for (var x = 0; x < this.player.subTasks.length; x++) {
                if (newID == this.player.subTasks[x].ID) {
                  //console.log("Dont use id number: " + newID);
                  validID = false;
                }
              } // loop through all tasks in player

            }
          } else {
            newID = 0;
          }

          return newID;
        }
      }, {
        key: "getNextSectionID",
        value: function getNextSectionID() {
          //console.log(this.player.section.length);
          var validID = false;
          var newID = -1;

          if (this.player.sections.length > 0) {
            while (validID == false) {
              newID++;
              validID = true;

              for (var x = 0; x < this.player.sections.length; x++) {
                if (newID == this.player.sections[x].ID) {
                  //console.log("Dont use id number for section: " + newID);
                  validID = false;
                }
              } // loop through all tasks in player

            }
          } else {
            newID = 0;
          }

          return newID;
        }
      }, {
        key: "getNextProjectID",
        value: function getNextProjectID() {
          //console.log(this.player.tasks.length);
          var validID = false;
          var newID = -1;

          if (this.player.projects.length > 0) {
            while (validID == false) {
              newID++;
              validID = true;

              for (var x = 0; x < this.player.projects.length; x++) {
                if (newID == this.player.projects[x].ID) {
                  //console.log("Dont use id number for project: " + newID);
                  validID = false;
                }
              } // loop through all projects in player

            }
          } else {
            newID = 0;
          }

          return newID;
        }
      }, {
        key: "getOverdueTasks",
        value: function getOverdueTasks() {
          var inboxTaskStack = [];
          var startDate = new Date();

          for (var x = 0; x < this.player.tasks.length; x++) {
            var taskDate = this.player.tasks[x].due;
            var tempDate = Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["parseISO"])(taskDate);
            var result = Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["isPast"])(tempDate);

            if (this.player.tasks[x].status == "active" && result == true) {
              inboxTaskStack.push(this.player.tasks[x]);
            }
          } // loop through all tasks in player


          for (var _x = 0; _x < this.player.subTasks.length; _x++) {
            var _taskDate = this.player.subTasks[_x].due;

            var _tempDate = Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["parseISO"])(_taskDate);

            var _result = Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["isPast"])(_tempDate);

            if (this.player.subTasks[_x].status == "active" && _result == true) {
              inboxTaskStack.push(this.player.subTasks[_x]);
            }
          }

          return inboxTaskStack;
        }
      }, {
        key: "getInboxTasks",
        value: function getInboxTasks() {
          var inboxTaskStack = [];
          var startDate = new Date();
          var formattedstartDate = Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["format"])(startDate, 'yyyy-MM-dd');

          for (var x = 0; x < this.player.tasks.length; x++) {
            var taskDate = this.player.tasks[x].due;
            var tempDate = Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["parseISO"])(taskDate);
            var result = Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["isFuture"])(tempDate);

            if (this.player.tasks[x].due == formattedstartDate || result == true) {
              inboxTaskStack.push(this.player.tasks[x]);
            }
          } // loop through all tasks in player


          for (var _x2 = 0; _x2 < this.player.subTasks.length; _x2++) {
            var _taskDate2 = this.player.subTasks[_x2].due;

            var _tempDate2 = Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["parseISO"])(_taskDate2);

            var _result2 = Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["isFuture"])(_tempDate2);

            if (this.player.subTasks[_x2].due == formattedstartDate || _result2 == true) {
              inboxTaskStack.push(this.player.subTasks[_x2]);
            }
          }

          return inboxTaskStack;
        }
      }, {
        key: "getQuickTasks",
        value: function getQuickTasks() {
          var inboxTaskStack = [];

          for (var x = 0; x < this.player.tasks.length; x++) {
            if (this.player.tasks[x].project == undefined || this.player.tasks[x].project == null) {
              inboxTaskStack.push(this.player.tasks[x]); //console.log(this.player.tasks[x])
            }
          } // loop through all tasks in player


          return inboxTaskStack;
        }
      }, {
        key: "getTodayTasks",
        value: function getTodayTasks(focusDate) {
          var tasksHolder = []; //Loop for Tasks

          for (var x = 0; x < this.player.tasks.length; x++) {
            // console.log(focusDate);
            // console.log(this.player.tasks[x].due);
            if (this.player.tasks[x].due == focusDate) {
              tasksHolder.push(this.player.tasks[x]);
            }
          } //Loop for SubTaks


          for (var _x3 = 0; _x3 < this.player.subTasks.length; _x3++) {
            // console.log(focusDate);
            // console.log(this.player.tasks[x].due);
            if (this.player.subTasks[_x3].due == focusDate) {
              tasksHolder.push(this.player.subTasks[_x3]);
            }
          }

          return tasksHolder;
        }
      }, {
        key: "getTomorrowTasks",
        value: function getTomorrowTasks() {
          var tasksHolder = [];
          var startDate = new Date();
          var endDate = Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["addDays"])(startDate, 1);
          var formattedFocusDay = Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["format"])(endDate, 'yyyy-MM-dd');

          for (var x = 0; x < this.player.tasks.length; x++) {
            // console.log(focusDate);
            // console.log(this.player.tasks[x].due);
            if (this.player.tasks[x].due == formattedFocusDay) {
              tasksHolder.push(this.player.tasks[x]);
            }
          }

          for (var _x4 = 0; _x4 < this.player.subTasks.length; _x4++) {
            // console.log(focusDate);
            // console.log(this.player.tasks[x].due);
            if (this.player.subTasks[_x4].due == formattedFocusDay) {
              tasksHolder.push(this.player.subTasks[_x4]);
            }
          }

          return tasksHolder;
        }
      }, {
        key: "getMonthsTask",
        value: function getMonthsTask() {
          var tasksHolder = [];
          var startDate = new Date();
          var endDate = Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["addDays"])(startDate, 30);
          var result = Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["eachDayOfInterval"])({
            start: startDate,
            end: endDate
          });

          for (var y = 0; y < result.length; y++) {
            var formattedFocusDay = Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["format"])(result[y], 'yyyy-MM-dd'); // console.log(formattedFocusDay);

            for (var x = 0; x < this.player.tasks.length; x++) {
              if (this.player.tasks[x].due == formattedFocusDay) {
                tasksHolder.push(this.player.tasks[x]);
              }
            } //end of for loop

          }

          for (var _y = 0; _y < result.length; _y++) {
            var _formattedFocusDay = Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["format"])(result[_y], 'yyyy-MM-dd'); // console.log(formattedFocusDay);


            for (var _x5 = 0; _x5 < this.player.subTasks.length; _x5++) {
              if (this.player.subTasks[_x5].due == _formattedFocusDay) {
                tasksHolder.push(this.player.subTasks[_x5]);
              }
            } //end of for loop

          }

          return tasksHolder;
        }
      }, {
        key: "getWeeksTask",
        value: function getWeeksTask() {
          var tasksHolder = [];
          var startDate = new Date();
          var endDate = Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["addDays"])(startDate, 7);
          var result = Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["eachDayOfInterval"])({
            start: startDate,
            end: endDate
          });

          for (var y = 0; y < result.length; y++) {
            var formattedFocusDay = Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["format"])(result[y], 'yyyy-MM-dd'); // console.log(formattedFocusDay);

            for (var x = 0; x < this.player.tasks.length; x++) {
              if (this.player.tasks[x].due == formattedFocusDay) {
                tasksHolder.push(this.player.tasks[x]);
              }
            } //end of for loop

          }

          for (var _y2 = 0; _y2 < result.length; _y2++) {
            var _formattedFocusDay2 = Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["format"])(result[_y2], 'yyyy-MM-dd'); // console.log(formattedFocusDay);


            for (var _x6 = 0; _x6 < this.player.subTasks.length; _x6++) {
              if (this.player.subTasks[_x6].due == _formattedFocusDay2) {
                tasksHolder.push(this.player.subTasks[_x6]);
              }
            } //end of for loop

          }

          return tasksHolder;
        }
      }, {
        key: "getAllProjects",
        value: function getAllProjects() {
          return this.player.projects;
        }
      }, {
        key: "getAllSections",
        value: function getAllSections() {
          return this.player.sections;
        }
      }, {
        key: "getAllTasks4Project",
        value: function getAllTasks4Project(focusID) {
          //console.log(this.player);
          var inboxTaskStack = [];

          if (this.player) {
            for (var x = 0; x < this.player.tasks.length; x++) {
              if (this.player.tasks[x].project == focusID) {
                //console.log(focusID);
                inboxTaskStack.push(this.player.tasks[x]);
              }
            } // loop through all tasks in player

          }

          return inboxTaskStack;
        }
      }, {
        key: "getAllSubTasks4Task",
        value: function getAllSubTasks4Task(focusTaskID) {
          var inboxTaskStack = [];

          if (this.player) {
            for (var x = 0; x < this.player.subTasks.length; x++) {
              if (this.player.subTasks[x].task == focusTaskID) {
                //console.log(this.player.subTasks);
                inboxTaskStack.push(this.player.subTasks[x]);
              }
            } // loop through all tasks in player

          }

          return inboxTaskStack;
        }
      }, {
        key: "getAllSections4Project",
        value: function getAllSections4Project(focusID) {
          var inboxSectionStack = [];

          if (this.player) {
            for (var x = 0; x < this.player.sections.length; x++) {
              if (this.player.sections[x].project == focusID) {
                //console.log(focusID);
                inboxSectionStack.push(this.player.sections[x]);
              }
            } // loop through all tasks in player

          }

          return inboxSectionStack;
        }
      }, {
        key: "updateProjectName",
        value: function updateProjectName(newProjectName, focusProjectID) {
          for (var x = 0; x < this.player.projects.length; x++) {
            if (this.player.projects[x].ID == focusProjectID) {
              this.player.projects[x].name = newProjectName;
              break;
            }
          }
        }
      }, {
        key: "updateTaskData",
        value: function updateTaskData(thisfocusID, focusTaskname, focusTaskdue, focusTasklevel, focusTaskdescription) {
          for (var x = 0; x < this.player.tasks.length; x++) {
            if (this.player.tasks[x].ID == thisfocusID) {
              this.player.tasks[x].name = focusTaskname;
              this.player.tasks[x].due = focusTaskdue;
              this.player.tasks[x].level = focusTasklevel;
              this.player.tasks[x].description = focusTaskdescription;
              break;
            }
          }
        }
      }, {
        key: "updateSubTaskData",
        value: function updateSubTaskData(thisfocusID, focusTaskname, focusTaskdue, focusTasklevel, focusTaskdescription) {
          for (var x = 0; x < this.player.subTasks.length; x++) {
            if (this.player.subTasks[x].ID == thisfocusID) {
              this.player.subTasks[x].name = focusTaskname;
              this.player.subTasks[x].due = focusTaskdue;
              this.player.subTasks[x].level = focusTasklevel;
              this.player.subTasks[x].description = focusTaskdescription;
              break;
            }
          }
        }
      }, {
        key: "updateSectionData",
        value: function updateSectionData(dataSectionID, dataSectionName) {
          for (var x = 0; x < this.player.sections.length; x++) {
            if (this.player.sections[x].ID == dataSectionID) {
              this.player.sections[x].name = dataSectionName;
              break;
            }
          }
        }
      }, {
        key: "findThisTask",
        value: function findThisTask(thisID) {
          //console.log(thisID);
          for (var x = 0; x < this.player.tasks.length; x++) {
            if (this.player.tasks[x].ID == thisID) {
              return this.player.tasks[x];
            }
          }
        }
      }, {
        key: "findThisSection",
        value: function findThisSection(thisID) {
          for (var x = 0; x < this.player.sections.length; x++) {
            if (this.player.sections[x].ID == thisID) {
              return this.player.sections[x];
            }
          }
        }
      }, {
        key: "findThisSubTask",
        value: function findThisSubTask(thisID) {
          for (var x = 0; x < this.player.subTasks.length; x++) {
            if (this.player.subTasks[x].ID == thisID) {
              return this.player.subTasks[x];
            }
          }
        }
      }, {
        key: "findThisProject",
        value: function findThisProject(thisID) {
          for (var z = 0; z < this.player.projects.length; z++) {
            // console.log(this.player.projects[z].ID);
            // console.log(thisID);
            if (this.player.projects[z].ID == thisID) {
              return this.player.projects[z];
            }
          }
        }
      }, {
        key: "setNavBackState",
        value: function setNavBackState(codekey, typeOBJ) {
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
      }, {
        key: "setStatusTask",
        value: function setStatusTask(thisID, someStatus) {
          for (var z = 0; z < this.player.tasks.length; z++) {
            if (this.player.tasks[z].ID == thisID) {
              this.player.tasks[z].status = someStatus;
              break;
            }
          }
        }
      }, {
        key: "setStatusSubTask",
        value: function setStatusSubTask(thisID, someStatus) {
          for (var z = 0; z < this.player.subTasks.length; z++) {
            if (this.player.subTasks[z].ID == thisID) {
              this.player.subTasks[z].status = someStatus;
              break;
            }
          }
        }
      }]);

      return Player;
    }();

    Player.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    Player = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], Player);

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
    /***/

  },

  /***/
  "./src/app/projectcreate/projectcreate.component.css":
  /*!***********************************************************!*\
    !*** ./src/app/projectcreate/projectcreate.component.css ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProjectcreateProjectcreateComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3RjcmVhdGUvcHJvamVjdGNyZWF0ZS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/projectcreate/projectcreate.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/projectcreate/projectcreate.component.ts ***!
    \**********************************************************/

  /*! exports provided: ProjectcreateComponent */

  /***/
  function srcAppProjectcreateProjectcreateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectcreateComponent", function () {
      return ProjectcreateComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../player */
    "./src/app/player.ts");

    var ProjectcreateComponent =
    /*#__PURE__*/
    function () {
      function ProjectcreateComponent(player) {
        _classCallCheck(this, ProjectcreateComponent);

        this.player = player;
      }

      _createClass(ProjectcreateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "createProject",
        value: function createProject() {
          var x = document.getElementById("taskName").value;
          var newProject = new Project(x); //console.log(newTask);

          this.player.addProject(newProject);
        }
      }]);

      return ProjectcreateComponent;
    }();

    ProjectcreateComponent.ctorParameters = function () {
      return [{
        type: _player__WEBPACK_IMPORTED_MODULE_2__["Player"]
      }];
    };

    ProjectcreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-projectcreate',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./projectcreate.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/projectcreate/projectcreate.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./projectcreate.component.css */
      "./src/app/projectcreate/projectcreate.component.css")).default]
    })], ProjectcreateComponent);

    var Project = function Project(name) {
      _classCallCheck(this, Project);

      this.name = name;
    };
    /***/

  },

  /***/
  "./src/app/projectsview/projectsview.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/projectsview/projectsview.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProjectsviewProjectsviewComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3Rzdmlldy9wcm9qZWN0c3ZpZXcuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/projectsview/projectsview.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/projectsview/projectsview.component.ts ***!
    \********************************************************/

  /*! exports provided: ProjectsviewComponent */

  /***/
  function srcAppProjectsviewProjectsviewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectsviewComponent", function () {
      return ProjectsviewComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../player */
    "./src/app/player.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ProjectsviewComponent =
    /*#__PURE__*/
    function () {
      function ProjectsviewComponent(player, router) {
        _classCallCheck(this, ProjectsviewComponent);

        this.player = player;
        this.router = router;
      }

      _createClass(ProjectsviewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          //console.log(this.player);
          console.log(this.player);
          var focus = this.player.getAllProjects();
          this.allprojects = focus; //console.log(this.allprojects);
        }
      }, {
        key: "viewClickedProject",
        value: function viewClickedProject(focusProject) {
          //console.log(focusTask)
          this.router.navigate(['/viewproject', JSON.stringify(focusProject)]);
        }
      }, {
        key: "projectSaveNewName",
        value: function projectSaveNewName(focusProject) {
          //console.log(focusProject);
          //get html element value
          var inputNewProjectName = document.getElementById(focusProject.name).value;
          this.player.updateProjectName(inputNewProjectName, focusProject.ID); //console.log(this.player.player.projects);
        }
      }, {
        key: "projectDelete",
        value: function projectDelete(focusProject) {
          this.player.deleteProject(focusProject);
        }
      }]);

      return ProjectsviewComponent;
    }();

    ProjectsviewComponent.ctorParameters = function () {
      return [{
        type: _player__WEBPACK_IMPORTED_MODULE_2__["Player"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    ProjectsviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-projectsview',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./projectsview.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/projectsview/projectsview.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./projectsview.component.css */
      "./src/app/projectsview/projectsview.component.css")).default]
    })], ProjectsviewComponent);
    /***/
  },

  /***/
  "./src/app/projectview/projectview.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/projectview/projectview.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProjectviewProjectviewComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3R2aWV3L3Byb2plY3R2aWV3LmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/projectview/projectview.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/projectview/projectview.component.ts ***!
    \******************************************************/

  /*! exports provided: ProjectviewComponent */

  /***/
  function srcAppProjectviewProjectviewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectviewComponent", function () {
      return ProjectviewComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../player */
    "./src/app/player.ts");

    var ProjectviewComponent =
    /*#__PURE__*/
    function () {
      function ProjectviewComponent(route, router, player) {
        _classCallCheck(this, ProjectviewComponent);

        this.route = route;
        this.router = router;
        this.player = player;
      }

      _createClass(ProjectviewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.route.params.forEach(function (params) {
            _this2.focusproject = JSON.parse(params.project);
            _this2.focusID = _this2.focusproject.ID;
            _this2.focussections = _this2.player.getAllSections4Project(_this2.focusID);
            _this2.focustasks = _this2.player.getAllTasks4Project(_this2.focusID);
            _this2.zeroTasks = _this2.getZeroTasks();
            _this2.sectionTasks = _this2.getSectionTasks();
          });
        }
      }, {
        key: "getZeroTasks",
        value: function getZeroTasks() {
          var thisArray = [];

          for (var x = 0; x < this.focustasks.length; x++) {
            if (this.focustasks[x].section == null || this.focustasks[x].section == undefined) {
              thisArray.push(this.focustasks[x]);
            }
          }

          return thisArray;
        }
      }, {
        key: "getSectionTasks",
        value: function getSectionTasks() {
          var thisArray = [];

          for (var x = 0; x < this.focustasks.length; x++) {
            if ((this.focustasks[x].section != null || this.focustasks[x].section != undefined) && this.focustasks[x].section >= 0) {
              thisArray.push(this.focustasks[x]);
            }
          }

          return thisArray;
        }
      }, {
        key: "navigate2CreateTaskProject",
        value: function navigate2CreateTaskProject() {
          console.log(this.focusproject.ID);
          var info = {
            typeID: 1,
            projectID: this.focusproject.ID
          };
          this.router.navigate(['/createtask', JSON.stringify(info)]);
        }
      }, {
        key: "navigate2CreateTaskSection",
        value: function navigate2CreateTaskSection(infoID) {
          var info = {
            typeID: 2,
            projectID: this.focusproject.ID,
            sectionID: infoID
          }; //console.log(info);

          this.router.navigate(['/createtask', JSON.stringify(info)]);
        }
      }, {
        key: "viewClickedTask",
        value: function viewClickedTask(focusEle) {
          this.player.setNavBackState("project", this.focusproject);
          this.router.navigate(['/viewtask', JSON.stringify(focusEle)]);
        }
      }, {
        key: "createSection4Project",
        value: function createSection4Project() {
          var inputSectionName = document.getElementById("sectionName").value;
          var newSection = new Section(inputSectionName, this.focusproject.ID);
          this.player.addSection(newSection);
          this.focussections = this.player.getAllSections4Project(this.focusID); //.push(newSection);
          //this.sectionTasks.push(newSection)

          console.log(newSection);
        }
      }, {
        key: "taskDelete",
        value: function taskDelete(focusEleTask) {
          //console.log(focusEleTask);
          this.player.deleteTask(focusEleTask);
          this.focustasks = this.player.getAllTasks4Project(this.focusID);
          this.zeroTasks = this.getZeroTasks();
          this.sectionTasks = this.getSectionTasks(); //console.log(this.player.player.tasks);
        }
      }, {
        key: "sectionDelete",
        value: function sectionDelete(focusEleSection) {
          this.player.deleteSection(focusEleSection);
          this.focussections = this.player.getAllSections4Project(this.focusID);
          this.focustasks = this.player.getAllTasks4Project(this.focusID);
          this.zeroTasks = this.getZeroTasks();
          this.sectionTasks = this.getSectionTasks();
        }
      }, {
        key: "sectionSave",
        value: function sectionSave(focusEleSection) {
          var focusSectionName = document.getElementById("sectionName").value;
          this.player.updateSectionData(focusEleSection.ID, focusSectionName);
        }
      }, {
        key: "toggleSetTask",
        value: function toggleSetTask(key, focusEleTask) {
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
      }]);

      return ProjectviewComponent;
    }();

    ProjectviewComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _player__WEBPACK_IMPORTED_MODULE_3__["Player"]
      }];
    };

    ProjectviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-projectview',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./projectview.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/projectview/projectview.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./projectview.component.css */
      "./src/app/projectview/projectview.component.css")).default]
    })], ProjectviewComponent);

    var Section = function Section(name, project) {
      _classCallCheck(this, Section);

      this.name = name;
      this.project = project;
    };

    var Project = function Project(name) {
      _classCallCheck(this, Project);

      this.name = name;
    }; // createProject(){
    //   let x = "Liltte timmy turner";
    //   let newProject = new Project(x);
    //   this.player.addProject(newProject);
    // }

    /***/

  },

  /***/
  "./src/app/quicktasksview/quicktasksview.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/quicktasksview/quicktasksview.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppQuicktasksviewQuicktasksviewComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3F1aWNrdGFza3N2aWV3L3F1aWNrdGFza3N2aWV3LmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/quicktasksview/quicktasksview.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/quicktasksview/quicktasksview.component.ts ***!
    \************************************************************/

  /*! exports provided: QuicktasksviewComponent */

  /***/
  function srcAppQuicktasksviewQuicktasksviewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuicktasksviewComponent", function () {
      return QuicktasksviewComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../player */
    "./src/app/player.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var QuicktasksviewComponent =
    /*#__PURE__*/
    function () {
      function QuicktasksviewComponent(player, router) {
        _classCallCheck(this, QuicktasksviewComponent);

        this.player = player;
        this.router = router;
      }

      _createClass(QuicktasksviewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.viewQuickTasks();
        }
      }, {
        key: "viewQuickTasks",
        value: function viewQuickTasks() {
          var focus = this.player.getQuickTasks();
          this.quickTasks = focus; //console.log(this.quickTasks);
        }
      }, {
        key: "viewClickedTask",
        value: function viewClickedTask(focusTask) {
          //console.log(focusTask)
          this.player.setNavBackState("inbox", "empty");
          this.router.navigate(['/viewtask', JSON.stringify(focusTask)]);
        }
      }, {
        key: "taskDelete",
        value: function taskDelete(focusEleTask) {
          if (focusEleTask.task == null || focusEleTask.task == undefined) {
            this.player.deleteTask(focusEleTask);
            console.log(focusEleTask);
          } else {
            this.player.deleteSubTask(focusEleTask);
          }

          this.viewQuickTasks(); //console.log(this.player.player.tasks);
        }
      }, {
        key: "toggleSetTask",
        value: function toggleSetTask(key, focusEleTask) {
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
      }]);

      return QuicktasksviewComponent;
    }();

    QuicktasksviewComponent.ctorParameters = function () {
      return [{
        type: _player__WEBPACK_IMPORTED_MODULE_2__["Player"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    QuicktasksviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-quicktasksview',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./quicktasksview.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/quicktasksview/quicktasksview.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./quicktasksview.component.css */
      "./src/app/quicktasksview/quicktasksview.component.css")).default]
    })], QuicktasksviewComponent);
    /***/
  },

  /***/
  "./src/app/sidebar/sidebar.component.css":
  /*!***********************************************!*\
    !*** ./src/app/sidebar/sidebar.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppSidebarSidebarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "body{\r\n    font-size: 20px;\r\n    background-color: #F5853F;\r\n}\r\na{\r\n    color: black;\r\n}\r\nh5{\r\n    -webkit-text-decoration-line: underline;\r\n            text-decoration-line: underline;\r\n    -webkit-text-decoration-style: wavy;\r\n            text-decoration-style: wavy;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSx1Q0FBK0I7WUFBL0IsK0JBQStCO0lBQy9CLG1DQUEyQjtZQUEzQiwyQkFBMkI7QUFDL0IiLCJmaWxlIjoic3JjL2FwcC9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjU4NTNGO1xyXG59XHJcbmF7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuaDV7XHJcbiAgICB0ZXh0LWRlY29yYXRpb24tbGluZTogdW5kZXJsaW5lO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uLXN0eWxlOiB3YXZ5O1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/sidebar/sidebar.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/sidebar/sidebar.component.ts ***!
    \**********************************************/

  /*! exports provided: SidebarComponent */

  /***/
  function srcAppSidebarSidebarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
      return SidebarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../player */
    "./src/app/player.ts");

    var SidebarComponent =
    /*#__PURE__*/
    function () {
      function SidebarComponent(router, player) {
        _classCallCheck(this, SidebarComponent);

        this.router = router;
        this.player = player;
      }

      _createClass(SidebarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          //get all the project to list on sidebar
          this.projects = this.player.getAllProjects(); //console.log(this.projects)
        }
      }, {
        key: "navigate2CreateTaskQuicky",
        value: function navigate2CreateTaskQuicky() {
          var info = {
            typeID: 0
          };
          this.router.navigate(['/createtask', JSON.stringify(info)]);
        }
      }, {
        key: "viewClickedProject",
        value: function viewClickedProject(focusProject) {
          //console.log(focusTask)
          this.router.navigate(['/viewproject', JSON.stringify(focusProject)]);
        }
      }]);

      return SidebarComponent;
    }();

    SidebarComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _player__WEBPACK_IMPORTED_MODULE_3__["Player"]
      }];
    };

    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sidebar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sidebar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/sidebar/sidebar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sidebar.component.css */
      "./src/app/sidebar/sidebar.component.css")).default]
    })], SidebarComponent);
    /***/
  },

  /***/
  "./src/app/taskcreate/taskcreate.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/taskcreate/taskcreate.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTaskcreateTaskcreateComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rhc2tjcmVhdGUvdGFza2NyZWF0ZS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/taskcreate/taskcreate.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/taskcreate/taskcreate.component.ts ***!
    \****************************************************/

  /*! exports provided: TaskcreateComponent */

  /***/
  function srcAppTaskcreateTaskcreateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TaskcreateComponent", function () {
      return TaskcreateComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../player */
    "./src/app/player.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! date-fns */
    "./node_modules/date-fns/esm/index.js");

    var TaskcreateComponent =
    /*#__PURE__*/
    function () {
      function TaskcreateComponent(player, route, router) {
        _classCallCheck(this, TaskcreateComponent);

        this.player = player;
        this.route = route;
        this.router = router; //console.log(this.player)
      }

      _createClass(TaskcreateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          var unformattedFocusDay = new Date();
          this.currentDate = Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["format"])(unformattedFocusDay, 'yyyy-MM-dd');
          this.route.params.forEach(function (params) {
            // either make a quick task or use project id from params
            _this3.focustype = JSON.parse(params.tasktype);

            if (_this3.focustype.typeID == 3) {
              _this3.pageTitle = "Create a Sub Task";
            } else if (_this3.focustype.typeID == 0) {
              _this3.pageTitle = "Create a Quick Task";
            } else {
              _this3.pageTitle = "Create a Task";
            }
          });
        }
      }, {
        key: "createTask",
        value: function createTask() {
          var x = document.getElementById("taskName").value;
          var y = document.getElementById("description").value;
          var z = document.getElementById("duedate").value; //var newTask = new quickTask(x,y,z);
          //console.log(newTask);
          //this.player.addTask(newTask);
          // console.log(this.focustype);

          var newTask;

          switch (this.focustype.typeID) {
            case 0:
              newTask = new quickTask(x, y, z);
              this.player.addTask(newTask);
              this.router.navigate(['/inbox']);
              break;

            case 1:
              newTask = new projectTask(x, y, z, this.focustype.projectID);
              this.player.addTask(newTask);
              var sendProject = this.player.findThisProject(this.focustype.projectID);
              this.router.navigate(['/viewproject', JSON.stringify(sendProject)]);
              break;

            case 2:
              newTask = new sectionTask(x, y, z, this.focustype.projectID, this.focustype.sectionID);
              this.player.addTask(newTask);
              var sendProject2 = this.player.findThisProject(this.focustype.projectID);
              this.router.navigate(['/viewproject', JSON.stringify(sendProject2)]);
              break;

            case 3:
              newTask = new subTask(x, y, z, this.focustype.taskID);
              this.player.addSubTask(newTask);
              var sendTask = this.player.findThisTask(this.focustype.taskID);
              this.router.navigate(['/viewtask', JSON.stringify(sendTask)]);
              break;
          } //we can go to inbox, viewtask yup thats it right
          //this.router.navigate( ['/inbox'] );
          //this.router.navigate( ['/viewtask', JSON.stringify(focusEle)] );

        }
      }]);

      return TaskcreateComponent;
    }();

    TaskcreateComponent.ctorParameters = function () {
      return [{
        type: _player__WEBPACK_IMPORTED_MODULE_2__["Player"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    TaskcreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-taskcreate',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./taskcreate.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/taskcreate/taskcreate.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./taskcreate.component.css */
      "./src/app/taskcreate/taskcreate.component.css")).default]
    })], TaskcreateComponent);

    var quickTask = function quickTask(name, description, duedate) {
      _classCallCheck(this, quickTask);

      this.name = name;
      this.description = description;
      this.created = new Date();
      this.due = duedate;
      this.level = 1;
      this.status = "active";
    };

    var projectTask = function projectTask(name, description, duedate, project) {
      _classCallCheck(this, projectTask);

      this.name = name;
      this.description = description;
      this.created = new Date();
      this.due = duedate;
      this.level = 1;
      this.status = "active";
      this.project = project;
    };

    var sectionTask = function sectionTask(name, description, duedate, project, section) {
      _classCallCheck(this, sectionTask);

      this.name = name;
      this.description = description;
      this.created = new Date();
      this.due = duedate;
      this.level = 1;
      this.status = "active";
      this.project = project;
      this.section = section;
    };

    var subTask = function subTask(name, description, duedate, taskID) {
      _classCallCheck(this, subTask);

      this.name = name;
      this.description = description;
      this.created = new Date();
      this.due = duedate;
      this.level = 1;
      this.status = "active";
      this.task = taskID;
    };
    /***/

  },

  /***/
  "./src/app/taskview/taskview.component.css":
  /*!*************************************************!*\
    !*** ./src/app/taskview/taskview.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTaskviewTaskviewComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rhc2t2aWV3L3Rhc2t2aWV3LmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/taskview/taskview.component.ts":
  /*!************************************************!*\
    !*** ./src/app/taskview/taskview.component.ts ***!
    \************************************************/

  /*! exports provided: TaskviewComponent */

  /***/
  function srcAppTaskviewTaskviewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TaskviewComponent", function () {
      return TaskviewComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../player */
    "./src/app/player.ts");

    var TaskviewComponent =
    /*#__PURE__*/
    function () {
      function TaskviewComponent(route, player, router) {
        _classCallCheck(this, TaskviewComponent);

        this.route = route;
        this.player = player;
        this.router = router;
      }

      _createClass(TaskviewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.route.params.forEach(function (params) {
            var thish = JSON.parse(params.task);

            if (thish.type == "subTask") {
              var tempfocus = JSON.parse(params.task);
              _this4.focusTask = tempfocus.task; //console.log("subtask view was loaded");

              _this4.subToggle = false;
            } else {
              _this4.focusTask = JSON.parse(params.task);
              _this4.subTasks = _this4.player.getAllSubTasks4Task(_this4.focusTask.ID); // console.log("regular view was loaded");

              _this4.subToggle = true;
            }
          });
        }
      }, {
        key: "navigate2CreateSubTask",
        value: function navigate2CreateSubTask() {
          //console.log(this.focusTask.ID);
          var info = {
            typeID: 3,
            taskID: this.focusTask.ID
          };
          this.router.navigate(['/createtask', JSON.stringify(info)]);
        }
      }, {
        key: "viewClickedSubTask",
        value: function viewClickedSubTask(focusEleSubTask) {
          this.subTasks = null;
          var folder = {
            type: "subTask",
            task: focusEleSubTask
          }; //console.log(focusEleSubTask);

          this.player.setNavBackState("task", this.focusTask);
          this.router.navigate(['/viewtask', JSON.stringify(folder)]);
        }
      }, {
        key: "taskDelete",
        value: function taskDelete(thisfocusTask) {
          //route back to the correct project page after you delete the task
          //subsTask -> Tasks with no projects -> Project Tasks
          if (thisfocusTask.task >= 0) {
            var focusTask = this.player.findThisTask(thisfocusTask.task);
            this.router.navigate(['/viewtask', JSON.stringify(focusTask)]);
            this.player.deleteSubTask(thisfocusTask); //console.log(this.player.player)
          } else if (thisfocusTask.project == null || thisfocusTask.project == undefined) {
            //route back to indbox page or something
            this.router.navigate(['/inbox']);
            this.player.deleteTask(thisfocusTask);
          } else {
            var focusProjectID = thisfocusTask.project;
            var focusProject = this.player.findThisProject(focusProjectID); //route back to proper project view page

            this.router.navigate(['/viewproject', JSON.stringify(focusProject)]);
            this.player.deleteTask(thisfocusTask);
          }
        }
      }, {
        key: "subTaskDeleteDropdown",
        value: function subTaskDeleteDropdown(thisFocusSubTask) {
          this.player.deleteSubTask(thisFocusSubTask);
          this.subTasks = this.player.getAllSubTasks4Task(this.focusTask.ID);
        }
      }, {
        key: "taskSaveNewData",
        value: function taskSaveNewData(thisfocusTask) {
          var focusTaskname = document.getElementById("focusTaskname").value;
          var focusTaskdue = document.getElementById("focusTaskdue").value;
          var focusTasklevel = document.getElementById("focusTasklevel").value; //let focusTaskcreated = (document.getElementById("focusTaskcreated") as HTMLInputElement).value

          var focusTaskdescription = document.getElementById("focusTaskdescription").value;
          this.player.updateTaskData(thisfocusTask.ID, focusTaskname, focusTaskdue, focusTasklevel, focusTaskdescription);
        }
      }, {
        key: "subTaskSaveNewData",
        value: function subTaskSaveNewData(thisfocusSubTask) {
          var focusTaskname = document.getElementById("focusTaskname").value;
          var focusTaskdue = document.getElementById("focusTaskdue").value;
          var focusTasklevel = document.getElementById("focusTasklevel").value; //let focusTaskcreated = (document.getElementById("focusTaskcreated") as HTMLInputElement).value

          var focusTaskdescription = document.getElementById("focusTaskdescription").value;
          this.player.updateSubTaskData(thisfocusSubTask.ID, focusTaskname, focusTaskdue, focusTasklevel, focusTaskdescription);
        }
      }, {
        key: "toggleSetSubTask",
        value: function toggleSetSubTask(key, focusEleTask) {
          switch (key) {
            case 0:
              // code block switch it to complete
              this.player.setStatusSubTask(focusEleTask.ID, "done");
              break;

            case 1:
              // switch it to active
              this.player.setStatusSubTask(focusEleTask.ID, "active");
              break;
          }
        }
      }]);

      return TaskviewComponent;
    }();

    TaskviewComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _player__WEBPACK_IMPORTED_MODULE_3__["Player"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    TaskviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-taskview',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./taskview.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/taskview/taskview.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./taskview.component.css */
      "./src/app/taskview/taskview.component.css")).default]
    })], TaskviewComponent);
    /***/
  },

  /***/
  "./src/app/today/today.component.css":
  /*!*******************************************!*\
    !*** ./src/app/today/today.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppTodayTodayComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvZGF5L3RvZGF5LmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/today/today.component.ts":
  /*!******************************************!*\
    !*** ./src/app/today/today.component.ts ***!
    \******************************************/

  /*! exports provided: TodayComponent */

  /***/
  function srcAppTodayTodayComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TodayComponent", function () {
      return TodayComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../player */
    "./src/app/player.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! date-fns */
    "./node_modules/date-fns/esm/index.js");

    var TodayComponent =
    /*#__PURE__*/
    function () {
      function TodayComponent(player, router) {
        _classCallCheck(this, TodayComponent);

        this.player = player;
        this.router = router;
      }

      _createClass(TodayComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var unformattedFocusDay = new Date();
          this.todaysDate = Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["format"])(unformattedFocusDay, 'yyyy-MM-dd');
          this.viewTodayTasks();
        }
      }, {
        key: "viewTodayTasks",
        value: function viewTodayTasks() {
          this.todaysTasks = this.player.getTodayTasks(this.todaysDate); //this.todaysTasks = takshold;
        }
      }, {
        key: "toggleSetTask",
        value: function toggleSetTask(key, focusEleTask) {
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
      }, {
        key: "viewClickedTask",
        value: function viewClickedTask(focusTask) {
          //console.log(focusTask)
          this.player.setNavBackState("inbox", "empty");
          this.router.navigate(['/viewtask', JSON.stringify(focusTask)]);
        }
      }, {
        key: "taskDelete",
        value: function taskDelete(focusEleTask) {
          if (focusEleTask.task == null || focusEleTask.task == undefined) {
            this.player.deleteTask(focusEleTask); //console.log(focusEleTask);
          } else {
            this.player.deleteSubTask(focusEleTask);
          }

          this.viewTodayTasks(); //console.log(this.player.player.tasks);
        }
      }]);

      return TodayComponent;
    }();

    TodayComponent.ctorParameters = function () {
      return [{
        type: _player__WEBPACK_IMPORTED_MODULE_2__["Player"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    TodayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-today',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./today.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/today/today.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./today.component.css */
      "./src/app/today/today.component.css")).default]
    })], TodayComponent);
    /***/
  },

  /***/
  "./src/app/tomorrow/tomorrow.component.css":
  /*!*************************************************!*\
    !*** ./src/app/tomorrow/tomorrow.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTomorrowTomorrowComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvbW9ycm93L3RvbW9ycm93LmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/tomorrow/tomorrow.component.ts":
  /*!************************************************!*\
    !*** ./src/app/tomorrow/tomorrow.component.ts ***!
    \************************************************/

  /*! exports provided: TomorrowComponent */

  /***/
  function srcAppTomorrowTomorrowComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TomorrowComponent", function () {
      return TomorrowComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../player */
    "./src/app/player.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! date-fns */
    "./node_modules/date-fns/esm/index.js");

    var TomorrowComponent =
    /*#__PURE__*/
    function () {
      function TomorrowComponent(player, router) {
        _classCallCheck(this, TomorrowComponent);

        this.player = player;
        this.router = router;
      }

      _createClass(TomorrowComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var unformattedFocusDay = new Date();
          this.todaysDate = Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["format"])(unformattedFocusDay, 'yyyy-MM-dd');
          this.viewTodayTasks();
          var endDate = Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["addDays"])(unformattedFocusDay, 1);
          var money = Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["formatDistance"])(endDate, unformattedFocusDay);
          console.log(money);
        }
      }, {
        key: "viewTodayTasks",
        value: function viewTodayTasks() {
          this.tomorrowsTasks = this.player.getTomorrowTasks(); //this.todaysTasks = takshold;
        }
      }, {
        key: "toggleSetTask",
        value: function toggleSetTask(key, focusEleTask) {
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
      }, {
        key: "viewClickedTask",
        value: function viewClickedTask(focusTask) {
          //console.log(focusTask)
          this.player.setNavBackState("inbox", "empty");
          this.router.navigate(['/viewtask', JSON.stringify(focusTask)]);
        }
      }, {
        key: "taskDelete",
        value: function taskDelete(focusEleTask) {
          if (focusEleTask.task == null || focusEleTask.task == undefined) {
            this.player.deleteTask(focusEleTask); //console.log(focusEleTask);
          } else {
            this.player.deleteSubTask(focusEleTask);
          }

          this.viewTodayTasks(); //console.log(this.player.player.tasks);
        }
      }]);

      return TomorrowComponent;
    }();

    TomorrowComponent.ctorParameters = function () {
      return [{
        type: _player__WEBPACK_IMPORTED_MODULE_2__["Player"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    TomorrowComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tomorrow',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tomorrow.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tomorrow/tomorrow.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tomorrow.component.css */
      "./src/app/tomorrow/tomorrow.component.css")).default]
    })], TomorrowComponent);
    /***/
  },

  /***/
  "./src/app/topbar/topbar.component.css":
  /*!*********************************************!*\
    !*** ./src/app/topbar/topbar.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppTopbarTopbarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "div{\r\n    margin-right: 0px;\r\n    margin-left: 0px;\r\n    padding-left: 0;\r\n    padding-right: 0;\r\n    width: 100%;\r\n}\r\n.btn-black{\r\n    background-color: #EF7B45;\r\n    color: black;\r\n}\r\n@media (min-width: 576px){\r\n.container {\r\n    max-width: none;\r\n}}\r\n@media (min-width: 768px){\r\n.container {\r\n    max-width: none;\r\n}}\r\n@media (min-width: 992px){\r\n.container {\r\n    max-width: none;\r\n}}\r\n@media (min-width: 578px){\r\n.container {\r\n    max-width: none;\r\n}}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9wYmFyL3RvcGJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7QUFDQTtBQUNBO0lBQ0ksZUFBZTtBQUNuQixDQUFDO0FBRUQ7QUFDQTtJQUNJLGVBQWU7QUFDbkIsQ0FBQztBQUVEO0FBQ0E7SUFDSSxlQUFlO0FBQ25CLENBQUM7QUFFRDtBQUNBO0lBQ0ksZUFBZTtBQUNuQixDQUFDIiwiZmlsZSI6InNyYy9hcHAvdG9wYmFyL3RvcGJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2e1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgcGFkZGluZy1yaWdodDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5idG4tYmxhY2t7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUY3QjQ1O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCl7XHJcbi5jb250YWluZXIge1xyXG4gICAgbWF4LXdpZHRoOiBub25lO1xyXG59fVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KXtcclxuLmNvbnRhaW5lciB7XHJcbiAgICBtYXgtd2lkdGg6IG5vbmU7XHJcbn19XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpe1xyXG4uY29udGFpbmVyIHtcclxuICAgIG1heC13aWR0aDogbm9uZTtcclxufX1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA1NzhweCl7XHJcbi5jb250YWluZXIge1xyXG4gICAgbWF4LXdpZHRoOiBub25lO1xyXG59fSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/topbar/topbar.component.ts":
  /*!********************************************!*\
    !*** ./src/app/topbar/topbar.component.ts ***!
    \********************************************/

  /*! exports provided: TopbarComponent */

  /***/
  function srcAppTopbarTopbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TopbarComponent", function () {
      return TopbarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../player */
    "./src/app/player.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var TopbarComponent =
    /*#__PURE__*/
    function () {
      function TopbarComponent(router, http, player) {
        _classCallCheck(this, TopbarComponent);

        this.router = router;
        this.http = http;
        this.player = player;
      }

      _createClass(TopbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {//console.log("Top bar ngONInit called")
        }
      }, {
        key: "navigate2CreateTaskQuicky",
        value: function navigate2CreateTaskQuicky() {
          var info = {
            typeID: 0
          };
          this.router.navigate(['/createtask', JSON.stringify(info)]);
        }
      }, {
        key: "savePlayer",
        value: function savePlayer() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var url, userplayer, xhr, data;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    console.log(JSON.stringify(this.player.player));
                    url = "/taskit/save";
                    userplayer = JSON.stringify(this.player.player);
                    xhr = new XMLHttpRequest();
                    xhr.open("POST", url, true);
                    xhr.setRequestHeader("Content-Type", "application/json");

                    xhr.onreadystatechange = function () {
                      if (xhr.readyState === 4 && xhr.status === 200) {
                        var json = xhr.responseText; //console.log(json);
                      }
                    };

                    data = userplayer;
                    xhr.send(data);

                  case 9:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "goBackButton",
        value: function goBackButton() {
          var focusState = this.player.backState;

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
      }]);

      return TopbarComponent;
    }();

    TopbarComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _player__WEBPACK_IMPORTED_MODULE_3__["Player"]
      }];
    };

    TopbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-topbar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./topbar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/topbar/topbar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./topbar.component.css */
      "./src/app/topbar/topbar.component.css")).default]
    })], TopbarComponent);
    /***/
  },

  /***/
  "./src/app/week/week.component.css":
  /*!*****************************************!*\
    !*** ./src/app/week/week.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppWeekWeekComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlZWsvd2Vlay5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/week/week.component.ts":
  /*!****************************************!*\
    !*** ./src/app/week/week.component.ts ***!
    \****************************************/

  /*! exports provided: WeekComponent */

  /***/
  function srcAppWeekWeekComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WeekComponent", function () {
      return WeekComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../player */
    "./src/app/player.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var WeekComponent =
    /*#__PURE__*/
    function () {
      function WeekComponent(player, router) {
        _classCallCheck(this, WeekComponent);

        this.player = player;
        this.router = router;
      }

      _createClass(WeekComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var tempFullDate = new Date();
          var tempYear = tempFullDate.getFullYear();
          var tempMonth = tempFullDate.getMonth() + 1 + "";

          if (tempMonth.length == 1) {
            tempMonth = "0" + tempMonth;
          }

          var tempDate = tempFullDate.getDate();
          this.todaysDate = tempYear + "-" + tempMonth + "-" + tempDate; //console.log(this.todaysDate);

          this.viewWeeksTasks();
        }
      }, {
        key: "viewWeeksTasks",
        value: function viewWeeksTasks() {
          var tempFullDate = new Date();
          var tempYear = tempFullDate.getFullYear();
          var tempMonth = tempFullDate.getMonth() + "";

          if (tempMonth.length == 1) {
            tempMonth = "0" + tempMonth;
          }

          var tempDate = tempFullDate.getDate(); //this.weeksTasks = this.player.getWeeksTask(this.todaysDate,tempYear,tempMonth,tempDate);

          this.weeksTasks = this.player.getWeeksTask();
        }
      }, {
        key: "toggleSetTask",
        value: function toggleSetTask(key, focusEleTask) {
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
      }, {
        key: "viewClickedTask",
        value: function viewClickedTask(focusTask) {
          //console.log(focusTask)
          this.player.setNavBackState("inbox", "empty");
          this.router.navigate(['/viewtask', JSON.stringify(focusTask)]);
        }
      }, {
        key: "taskDelete",
        value: function taskDelete(focusEleTask) {
          if (focusEleTask.task == null || focusEleTask.task == undefined) {
            this.player.deleteTask(focusEleTask); // console.log(focusEleTask);
          } else {
            this.player.deleteSubTask(focusEleTask);
          }

          this.viewWeeksTasks(); //console.log(this.player.player.tasks);
        }
      }]);

      return WeekComponent;
    }();

    WeekComponent.ctorParameters = function () {
      return [{
        type: _player__WEBPACK_IMPORTED_MODULE_2__["Player"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    WeekComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-week',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./week.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/week/week.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./week.component.css */
      "./src/app/week/week.component.css")).default]
    })], WeekComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Apache24\htdocs\ngGatordone\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map