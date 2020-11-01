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

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_service_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/service/data.service */ "./src/service/data.service.ts");
/* harmony import */ var _component_list_contacts_list_contacts_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/list-contacts/list-contacts.component */ "./src/app/component/list-contacts/list-contacts.component.ts");
/* harmony import */ var _component_main_chat_main_chat_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/main-chat/main-chat.component */ "./src/app/component/main-chat/main-chat.component.ts");
// ngOnInit() this method reads data from DataService
// getNewMessage() this method adds new messages to JSON
// selectContact() this method sends the selected contact from the list.contacts.component to the main-chatcomponent
// sortForDate() this method makes sorting contacts by date





class AppComponent {
    constructor(DataService) {
        this.DataService = DataService;
    }
    selectContact(increased) {
        this.sentSelectContactToMainChatComponent = increased;
    }
    getNewMessage(event) {
        const currentId = this.sentSelectContactToMainChatComponent.id;
        for (const key of this.contacts) {
            if (key.id == currentId) {
                key.messagesHistory.push(event);
                this.sortForDate(this.contacts);
            }
        }
    }
    sortForDate(items) {
        items.sort((a, b) => {
            let dateA = new Date(a.messagesHistory[a.messagesHistory.length - 1].date), dateB = new Date(b.messagesHistory[b.messagesHistory.length - 1].date);
            return dateB - dateA;
        });
    }
    ngOnInit() {
        this.DataService.getDate()
            .subscribe(data => {
            this.sortForDate(data);
            console.log(data);
            this.contacts = data;
            this.sentSelectContactToMainChatComponent = this.contacts[0];
            return this.contacts;
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_service_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 3, consts: [[1, "wrapper"], [1, "container"], [1, "leftPanel", 3, "contacts", "selectCont"], [1, "rightPanel", 3, "contacts", "selectContact", "newMessage"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-list-contacts", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectCont", function AppComponent_Template_app_list_contacts_selectCont_2_listener($event) { return ctx.selectContact($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-main-chat", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("newMessage", function AppComponent_Template_app_main_chat_newMessage_3_listener($event) { return ctx.getNewMessage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("contacts", ctx.contacts);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("contacts", ctx.contacts)("selectContact", ctx.sentSelectContactToMainChatComponent);
    } }, directives: [_component_list_contacts_list_contacts_component__WEBPACK_IMPORTED_MODULE_2__["ListContactsComponent"], _component_main_chat_main_chat_component__WEBPACK_IMPORTED_MODULE_3__["MainChatComponent"]], styles: [".container[_ngcontent-%COMP%]{\r\n    width: 55%;\r\n    margin: auto;\r\n    height: auto;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: flex-start;\r\n}\r\n@media (min-width: 1240px) and (max-width: 1464px) {.container[_ngcontent-%COMP%]{\r\n\twidth: 65%;\r\n    }}\r\n@media (min-width: 1075px) and (max-width: 1239px) {.container[_ngcontent-%COMP%]{\r\n    width: 75%;\r\n}}\r\n@media (min-width: 948px) and (max-width: 1074px) {.container[_ngcontent-%COMP%]{\r\n    width: 85%;\r\n}}\r\n@media (max-width: 947px) {.container[_ngcontent-%COMP%]{\r\n    width: 95%;\r\n}}\r\n.leftPanel[_ngcontent-%COMP%]{\r\n    width: 35%;\r\n    height: auto;\r\n}\r\n.rightPanel[_ngcontent-%COMP%]{\r\n    width: 65%;\r\n    height: auto;\r\n}\r\n@media (max-width: 790px) {.leftPanel[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    order: 2;\r\n}\r\n.rightPanel[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    order: 1;\r\n}\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0lBQ2IsZUFBZTtJQUNmLDJCQUEyQjtBQUMvQjtBQUNBLG9EQUFvRDtDQUNuRCxVQUFVO0lBQ1AsQ0FBQztBQUNMLG9EQUFvRDtJQUNoRCxVQUFVO0FBQ2QsQ0FBQztBQUNELG1EQUFtRDtJQUMvQyxVQUFVO0FBQ2QsQ0FBQztBQUNELDJCQUEyQjtJQUN2QixVQUFVO0FBQ2QsQ0FBQztBQUNEO0lBQ0ksVUFBVTtJQUNWLFlBQVk7QUFDaEI7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0FBQ2hCO0FBQ0EsMkJBQTJCO0lBQ3ZCLFdBQVc7SUFDWCxRQUFRO0FBQ1o7QUFDQTtJQUNJLFdBQVc7SUFDWCxRQUFRO0FBQ1o7QUFDQSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICAgIHdpZHRoOiA1NSU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMjQwcHgpIGFuZCAobWF4LXdpZHRoOiAxNDY0cHgpIHsuY29udGFpbmVye1xyXG5cdHdpZHRoOiA2NSU7XHJcbiAgICB9fVxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTA3NXB4KSBhbmQgKG1heC13aWR0aDogMTIzOXB4KSB7LmNvbnRhaW5lcntcclxuICAgIHdpZHRoOiA3NSU7XHJcbn19XHJcbkBtZWRpYSAobWluLXdpZHRoOiA5NDhweCkgYW5kIChtYXgtd2lkdGg6IDEwNzRweCkgey5jb250YWluZXJ7XHJcbiAgICB3aWR0aDogODUlO1xyXG59fVxyXG5AbWVkaWEgKG1heC13aWR0aDogOTQ3cHgpIHsuY29udGFpbmVye1xyXG4gICAgd2lkdGg6IDk1JTtcclxufX1cclxuLmxlZnRQYW5lbHtcclxuICAgIHdpZHRoOiAzNSU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5yaWdodFBhbmVse1xyXG4gICAgd2lkdGg6IDY1JTtcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNzkwcHgpIHsubGVmdFBhbmVse1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvcmRlcjogMjtcclxufVxyXG4ucmlnaHRQYW5lbHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb3JkZXI6IDE7XHJcbn1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: src_service_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _component_list_contacts_list_contacts_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/list-contacts/list-contacts.component */ "./src/app/component/list-contacts/list-contacts.component.ts");
/* harmony import */ var _component_main_chat_main_chat_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/main-chat/main-chat.component */ "./src/app/component/main-chat/main-chat.component.ts");
/* harmony import */ var _component_list_contacts_search_panel_search_panel_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/list-contacts/search-panel/search-panel.component */ "./src/app/component/list-contacts/search-panel/search-panel.component.ts");
/* harmony import */ var _component_main_chat_main_top_main_top_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component/main-chat/main-top/main-top.component */ "./src/app/component/main-chat/main-top/main-top.component.ts");
/* harmony import */ var _component_main_chat_main_bottom_main_bottom_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component/main-chat/main-bottom/main-bottom.component */ "./src/app/component/main-chat/main-bottom/main-bottom.component.ts");
/* harmony import */ var _truncate_text_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./truncate-text.pipe */ "./src/app/truncate-text.pipe.ts");












class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _component_list_contacts_list_contacts_component__WEBPACK_IMPORTED_MODULE_5__["ListContactsComponent"],
        _component_main_chat_main_chat_component__WEBPACK_IMPORTED_MODULE_6__["MainChatComponent"],
        _component_list_contacts_search_panel_search_panel_component__WEBPACK_IMPORTED_MODULE_7__["SearchPanelComponent"],
        _component_main_chat_main_top_main_top_component__WEBPACK_IMPORTED_MODULE_8__["MainTopComponent"],
        _component_main_chat_main_bottom_main_bottom_component__WEBPACK_IMPORTED_MODULE_9__["MainBottomComponent"],
        _truncate_text_pipe__WEBPACK_IMPORTED_MODULE_10__["TruncateTextPipe"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _component_list_contacts_list_contacts_component__WEBPACK_IMPORTED_MODULE_5__["ListContactsComponent"],
                    _component_main_chat_main_chat_component__WEBPACK_IMPORTED_MODULE_6__["MainChatComponent"],
                    _component_list_contacts_search_panel_search_panel_component__WEBPACK_IMPORTED_MODULE_7__["SearchPanelComponent"],
                    _component_main_chat_main_top_main_top_component__WEBPACK_IMPORTED_MODULE_8__["MainTopComponent"],
                    _component_main_chat_main_bottom_main_bottom_component__WEBPACK_IMPORTED_MODULE_9__["MainBottomComponent"],
                    _truncate_text_pipe__WEBPACK_IMPORTED_MODULE_10__["TruncateTextPipe"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/component/list-contacts/list-contacts.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/component/list-contacts/list-contacts.component.ts ***!
  \********************************************************************/
/*! exports provided: ListContactsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListContactsComponent", function() { return ListContactsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _search_panel_search_panel_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search-panel/search-panel.component */ "./src/app/component/list-contacts/search-panel/search-panel.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _truncate_text_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../truncate-text.pipe */ "./src/app/truncate-text.pipe.ts");
// setSearchMethod() is a method that searches the contact list
// selectContact()   this is a method that selects a contact and sends it to the app.component
//                   and then to the main.chat.component
// 





function ListContactsComponent_div_6_div_1_div_1_i_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 13);
} }
function ListContactsComponent_div_6_div_1_div_1_i_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 14);
} }
function ListContactsComponent_div_6_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListContactsComponent_div_6_div_1_div_1_Template_div_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const item_r5 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r8.selectContact(item_r5, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ListContactsComponent_div_6_div_1_div_1_i_3_Template, 1, 0, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ListContactsComponent_div_6_div_1_div_1_i_4_Template, 1, 0, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "truncateText");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/", item_r5.avatar, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r5.status == "online");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r5.status == "offline");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 6, item_r5.messagesHistory[item_r5.messagesHistory.length - 1].message, 28));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](14, 9, item_r5.messagesHistory[item_r5.messagesHistory.length - 1].date, "mediumDate"));
} }
function ListContactsComponent_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListContactsComponent_div_6_div_1_div_1_Template, 15, 12, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.contacts);
} }
function ListContactsComponent_div_6_div_2_div_1_i_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 13);
} }
function ListContactsComponent_div_6_div_2_div_1_i_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 14);
} }
function ListContactsComponent_div_6_div_2_div_1_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "truncateText");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, item_r11.messagesHistory[item_r11.messagesHistory.length - 1].message, 28));
} }
function ListContactsComponent_div_6_div_2_div_1_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, item_r11.messagesHistory[item_r11.messagesHistory.length - 1].date, "mediumDate"));
} }
function ListContactsComponent_div_6_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListContactsComponent_div_6_div_2_div_1_Template_div_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const item_r11 = ctx.$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r18.selectContact(item_r11, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ListContactsComponent_div_6_div_2_div_1_i_3_Template, 1, 0, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ListContactsComponent_div_6_div_2_div_1_i_4_Template, 1, 0, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ListContactsComponent_div_6_div_2_div_1_span_8_Template, 3, 4, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ListContactsComponent_div_6_div_2_div_1_span_10_Template, 3, 4, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/", item_r11.avatar, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r11.status == "online");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r11.status == "offline");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r11.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r11.messagesHistory[0] != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r11.messagesHistory[0] != "");
} }
function ListContactsComponent_div_6_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListContactsComponent_div_6_div_2_div_1_Template, 11, 6, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.viewContacts);
} }
function ListContactsComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListContactsComponent_div_6_div_1_Template, 2, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ListContactsComponent_div_6_div_2_Template, 2, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.viewContacts);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.viewContacts);
} }
function ListContactsComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Sorry, no contact was found! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Check spelling - ", ctx_r1.searchEnter, "");
} }
class ListContactsComponent {
    constructor() {
        this.selectCont = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.viewContacts = false;
        this.dontFoundContacts = false;
        this.searchEnter = "";
    }
    setSearchMethod(event) {
        this.dontFoundContacts = true;
        this.viewContacts = [];
        if (event == "")
            this.dontFoundContacts = false;
        for (const key of this.contacts) {
            if (key.name.search(event) != -1) {
                this.dontFoundContacts = false;
                this.viewContacts.push(key);
            }
            else {
                this.searchEnter = event;
            }
        }
    }
    selectContact(increased, event) {
        let allActiveClassCss = document.querySelectorAll(".active");
        event.currentTarget.classList.add('active');
        if (allActiveClassCss[0] != undefined)
            allActiveClassCss[0].classList.remove('active');
        this.selectCont.emit(increased);
    }
    ngOnInit() { }
}
ListContactsComponent.ɵfac = function ListContactsComponent_Factory(t) { return new (t || ListContactsComponent)(); };
ListContactsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListContactsComponent, selectors: [["app-list-contacts"]], inputs: { contacts: "contacts" }, outputs: { selectCont: "selectCont" }, decls: 8, vars: 2, consts: [[3, "setSearch"], [1, "contacts"], [1, "listContacts"], [4, "ngIf"], ["class", "person", 3, "click", 4, "ngFor", "ngForOf"], [1, "person", 3, "click"], [1, "avatar"], ["alt", "avatar", 3, "src"], ["class", "far fa-check-circle status online", 4, "ngIf"], ["class", "fas fa-times-circle status offline", 4, "ngIf"], [1, "info"], [1, "message"], [1, "date"], [1, "far", "fa-check-circle", "status", "online"], [1, "fas", "fa-times-circle", "status", "offline"], ["class", "message", 4, "ngIf"], [1, "dontFoundContacts"]], template: function ListContactsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-search-panel", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("setSearch", function ListContactsComponent_Template_app_search_panel_setSearch_1_listener($event) { return ctx.setSearchMethod($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Chats");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ListContactsComponent_div_6_Template, 3, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ListContactsComponent_div_7_Template, 5, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.dontFoundContacts);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dontFoundContacts);
    } }, directives: [_search_panel_search_panel_component__WEBPACK_IMPORTED_MODULE_1__["SearchPanelComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], pipes: [_truncate_text_pipe__WEBPACK_IMPORTED_MODULE_3__["TruncateTextPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]], styles: ["section[_ngcontent-%COMP%]{\r\n    height: 100%;\r\n    border-left: 1px solid #dedede;\r\n}\r\nh2[_ngcontent-%COMP%]{\r\n    margin: 27px 10px;\r\n    font-family: sans-serif;\r\n    font-weight: 300;\r\n    font-size: 20px;\r\n    color: #5ca4be;\r\n}\r\n.listContacts[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    overflow: auto;\r\n    max-height: 356px;\r\n}\r\n.listContacts[_ngcontent-%COMP%]::-webkit-scrollbar{width: 5px; height: 5px;}\r\n.listContacts[_ngcontent-%COMP%]::-webkit-scrollbar-button {  background-color: #e0e0e0; }\r\n.listContacts[_ngcontent-%COMP%]::-webkit-scrollbar-track {  background-color: #e0e0e0;}\r\n.listContacts[_ngcontent-%COMP%]::-webkit-scrollbar-thumb { height: 50px; background-color: #3c4252; border-radius: 3px;}\r\n.listContacts[_ngcontent-%COMP%]   .person[_ngcontent-%COMP%]{\r\n    height: auto;\r\n    cursor: pointer;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    padding: 18px 10px;\r\n    border-bottom: 1px solid #dedede;\r\n}\r\n.listContacts[_ngcontent-%COMP%]   .person[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width: 48px;\r\n    height: 48px;\r\n}\r\n@media (min-width: 750px) and (max-width: 847px) {.listContacts[_ngcontent-%COMP%]   .person[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]{\r\n\tmargin-right: 5px;\r\n\t}}\r\n.avatar[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%]{\r\n    font-size: 20px;\r\n    position: relative;\r\n    font-weight: 600;\r\n    margin-left: -18px;\r\n    top: -2px;\r\n}\r\n.online[_ngcontent-%COMP%]{color: green;}\r\n.offline[_ngcontent-%COMP%]{color: red;}\r\n.listContacts[_ngcontent-%COMP%]   .person[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{\r\n    width: auto;\r\n    margin: 0 12px;\r\n}\r\n@media (min-width: 750px) and (max-width: 847px) {.listContacts[_ngcontent-%COMP%]   .person[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{\r\n\tmargin: 0;\r\n\t}}\r\n.listContacts[_ngcontent-%COMP%]   .person[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%], h3[_ngcontent-%COMP%]{\r\n    color: #8d8d8d;\r\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n    font-weight: 300;\r\n}\r\n.listContacts[_ngcontent-%COMP%]   .person[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%], .message[_ngcontent-%COMP%]{\r\n    color: #acacac;\r\n}\r\n.listContacts[_ngcontent-%COMP%]   .person[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]{\r\n     flex: auto;\r\n     align-self: flex-start;\r\n     text-align: right;\r\n}\r\n.listContacts[_ngcontent-%COMP%]   .person[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    color: #676767;\r\n    position: relative;\r\n    font-size: 12px;\r\n    top: 7px;\r\n}\r\n.active[_ngcontent-%COMP%], .active[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .active[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%], .active[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    background: #3C4252;\r\n    color: #fff!important;\r\n}\r\n.dontFoundContacts[_ngcontent-%COMP%]{\r\n    font-size: 23px;\r\n    margin: 0 10px;\r\n    word-break: break-all;\r\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n    color: #8d8d8d;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2xpc3QtY29udGFjdHMvbGlzdC1jb250YWN0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLDhCQUE4QjtBQUNsQztBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGNBQWM7QUFDbEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2QsaUJBQWlCO0FBQ3JCO0FBQ0EsaUNBQWlDLFVBQVUsRUFBRSxXQUFXLENBQUM7QUFDekQsMkNBQTJDLHlCQUF5QixFQUFFO0FBQ3RFLDBDQUEwQyx5QkFBeUIsQ0FBQztBQUNwRSx5Q0FBeUMsWUFBWSxFQUFFLHlCQUF5QixFQUFFLGtCQUFrQixDQUFDO0FBQ3JHO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixhQUFhO0lBQ2IsZUFBZTtJQUNmLDJCQUEyQjtJQUMzQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGdDQUFnQztBQUNwQztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7QUFDQSxrREFBa0Q7Q0FDakQsaUJBQWlCO0NBQ2pCLENBQUM7QUFDRDtJQUNHLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixTQUFTO0FBQ2I7QUFDQSxRQUFRLFlBQVksQ0FBQztBQUNyQixTQUFTLFVBQVUsQ0FBQztBQUNwQjtJQUNJLFdBQVc7SUFDWCxjQUFjO0FBQ2xCO0FBQ0Esa0RBQWtEO0NBQ2pELFNBQVM7Q0FDVCxDQUFDO0FBQ0Y7SUFDSSxjQUFjO0lBQ2QsNkVBQTZFO0lBQzdFLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0tBQ0ssVUFBVTtLQUNWLHNCQUFzQjtLQUN0QixpQkFBaUI7QUFDdEI7QUFDQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFFBQVE7QUFDWjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxxQkFBcUI7SUFDckIsNkVBQTZFO0lBQzdFLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvbGlzdC1jb250YWN0cy9saXN0LWNvbnRhY3RzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9ue1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZGVkZWRlO1xyXG59XHJcbmgye1xyXG4gICAgbWFyZ2luOiAyN3B4IDEwcHg7XHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjogIzVjYTRiZTtcclxufVxyXG4ubGlzdENvbnRhY3Rze1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIG1heC1oZWlnaHQ6IDM1NnB4O1xyXG59XHJcbi5saXN0Q29udGFjdHM6Oi13ZWJraXQtc2Nyb2xsYmFye3dpZHRoOiA1cHg7IGhlaWdodDogNXB4O31cclxuLmxpc3RDb250YWN0czo6LXdlYmtpdC1zY3JvbGxiYXItYnV0dG9uIHsgIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7IH1cclxuLmxpc3RDb250YWN0czo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sgeyAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDt9XHJcbi5saXN0Q29udGFjdHM6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHsgaGVpZ2h0OiA1MHB4OyBiYWNrZ3JvdW5kLWNvbG9yOiAjM2M0MjUyOyBib3JkZXItcmFkaXVzOiAzcHg7fVxyXG4ubGlzdENvbnRhY3RzIC5wZXJzb257XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDE4cHggMTBweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVkZWRlO1xyXG59XHJcblxyXG4ubGlzdENvbnRhY3RzIC5wZXJzb24gLmF2YXRhciBpbWd7XHJcbiAgICB3aWR0aDogNDhweDtcclxuICAgIGhlaWdodDogNDhweDtcclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzUwcHgpIGFuZCAobWF4LXdpZHRoOiA4NDdweCkgey5saXN0Q29udGFjdHMgLnBlcnNvbiAuYXZhdGFye1xyXG5cdG1hcmdpbi1yaWdodDogNXB4O1xyXG5cdH19XHJcbiAuYXZhdGFyIC5zdGF0dXN7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xOHB4O1xyXG4gICAgdG9wOiAtMnB4O1xyXG59XHJcbi5vbmxpbmV7Y29sb3I6IGdyZWVuO31cclxuLm9mZmxpbmV7Y29sb3I6IHJlZDt9XHJcbi5saXN0Q29udGFjdHMgLnBlcnNvbiAuaW5mb3tcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgbWFyZ2luOiAwIDEycHg7XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDc1MHB4KSBhbmQgKG1heC13aWR0aDogODQ3cHgpIHsubGlzdENvbnRhY3RzIC5wZXJzb24gLmluZm97XHJcblx0bWFyZ2luOiAwO1xyXG5cdH19XHJcbi5saXN0Q29udGFjdHMgLnBlcnNvbiAuaW5mbywgaDN7XHJcbiAgICBjb2xvcjogIzhkOGQ4ZDtcclxuICAgIGZvbnQtZmFtaWx5OiAnR2lsbCBTYW5zJywgJ0dpbGwgU2FucyBNVCcsIENhbGlicmksICdUcmVidWNoZXQgTVMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxufVxyXG4ubGlzdENvbnRhY3RzIC5wZXJzb24gLmluZm8sIC5tZXNzYWdle1xyXG4gICAgY29sb3I6ICNhY2FjYWM7XHJcbn1cclxuLmxpc3RDb250YWN0cyAucGVyc29uIC5kYXRle1xyXG4gICAgIGZsZXg6IGF1dG87XHJcbiAgICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcclxuICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG4ubGlzdENvbnRhY3RzIC5wZXJzb24gLmRhdGUgc3BhbntcclxuICAgIGNvbG9yOiAjNjc2NzY3O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgdG9wOiA3cHg7XHJcbn1cclxuLmFjdGl2ZSwgLmFjdGl2ZSAuaW5mbyBoMywgLmFjdGl2ZSAuaW5mbyAubWVzc2FnZSwgLmFjdGl2ZSAuZGF0ZSBzcGFue1xyXG4gICAgYmFja2dyb3VuZDogIzNDNDI1MjtcclxuICAgIGNvbG9yOiAjZmZmIWltcG9ydGFudDtcclxufVxyXG4uZG9udEZvdW5kQ29udGFjdHN7XHJcbiAgICBmb250LXNpemU6IDIzcHg7XHJcbiAgICBtYXJnaW46IDAgMTBweDtcclxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcclxuICAgIGZvbnQtZmFtaWx5OiAnR2lsbCBTYW5zJywgJ0dpbGwgU2FucyBNVCcsIENhbGlicmksICdUcmVidWNoZXQgTVMnLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6ICM4ZDhkOGQ7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListContactsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-list-contacts',
                templateUrl: './list-contacts.component.html',
                styleUrls: ['./list-contacts.component.css']
            }]
    }], function () { return []; }, { contacts: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selectCont: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/component/list-contacts/search-panel/search-panel.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/component/list-contacts/search-panel/search-panel.component.ts ***!
  \********************************************************************************/
/*! exports provided: SearchPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPanelComponent", function() { return SearchPanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
// setSearchMethod() - is a method that sends the input value to the parent component



class SearchPanelComponent {
    constructor() {
        this.setSearch = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    setSearchMethod(search) {
        this.setSearch.emit(search);
    }
    ngOnInit() { }
}
SearchPanelComponent.ɵfac = function SearchPanelComponent_Factory(t) { return new (t || SearchPanelComponent)(); };
SearchPanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchPanelComponent, selectors: [["app-search-panel"]], outputs: { setSearch: "setSearch" }, decls: 8, vars: 1, consts: [[1, "searchPane"], [1, "container"], [1, "aboutUser"], ["src", "assets/img/myAvatar.png", "alt", "User Avatar", 1, "userAvatar"], [1, "far", "fa-check-circle", "status"], [1, "search"], [1, "fas", "fa-search"], ["type", "search", "name", "search", "placeholder", "Search or start new chat", 3, "ngModel", "ngModelChange"]], template: function SearchPanelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SearchPanelComponent_Template_input_ngModelChange_7_listener($event) { return ctx.search = $event; })("ngModelChange", function SearchPanelComponent_Template_input_ngModelChange_7_listener() { return ctx.setSearchMethod(ctx.search); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.search);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]], styles: [".searchPane[_ngcontent-%COMP%]{\r\n    height: auto;\r\n    background: #f5f5f5;\r\n    border-bottom: 1px solid #dedede;\r\n}\r\n.container[_ngcontent-%COMP%]{\r\n    padding: 15px;\r\n}\r\n.aboutUser[_ngcontent-%COMP%]{\r\n    padding-bottom: 16px;\r\n}\r\n.aboutUser[_ngcontent-%COMP%]   .userAvatar[_ngcontent-%COMP%]{\r\n    width: 48px;\r\n    height: 48px;\r\n    border-radius: 50%;\r\n    background-color: #ebecf0;\r\n}\r\n.aboutUser[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%]{\r\n    font-size: 20px;\r\n    position: relative;\r\n    color: green;\r\n    font-weight: 600;\r\n    margin-left: -18px;\r\n    top: -2px;\r\n}\r\n.search[_ngcontent-%COMP%]{\r\n    border: 1px solid #e2e2e2;\r\n    border-radius: 50px;\r\n    display: flex;\r\n    align-items: center;  \r\n}\r\n.search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n   width: 85%;\r\n   border: none;\r\n   height: 30px;\r\n   background: #f5f5f5;\r\n   color: #989898;\r\n   font-family: sans-serif;\r\n   padding: 10px 0px;\r\n}\r\n.search[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\r\n    padding: 10px 7px;\r\n    color: #989898;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2xpc3QtY29udGFjdHMvc2VhcmNoLXBhbmVsL3NlYXJjaC1wYW5lbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixnQ0FBZ0M7QUFDcEM7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFNBQVM7QUFDYjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCO0FBQ0E7R0FDRyxVQUFVO0dBQ1YsWUFBWTtHQUNaLFlBQVk7R0FDWixtQkFBbUI7R0FDbkIsY0FBYztHQUNkLHVCQUF1QjtHQUN2QixpQkFBaUI7QUFDcEI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L2xpc3QtY29udGFjdHMvc2VhcmNoLXBhbmVsL3NlYXJjaC1wYW5lbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlYXJjaFBhbmV7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWRlZGU7XHJcbn1cclxuLmNvbnRhaW5lcntcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbn1cclxuLmFib3V0VXNlcntcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xyXG59XHJcbi5hYm91dFVzZXIgLnVzZXJBdmF0YXJ7XHJcbiAgICB3aWR0aDogNDhweDtcclxuICAgIGhlaWdodDogNDhweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlYmVjZjA7XHJcbn1cclxuLmFib3V0VXNlciAuc3RhdHVze1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgY29sb3I6IGdyZWVuO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMThweDtcclxuICAgIHRvcDogLTJweDtcclxufVxyXG4uc2VhcmNoe1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2UyZTJlMjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgIFxyXG59XHJcbi5zZWFyY2ggaW5wdXR7XHJcbiAgIHdpZHRoOiA4NSU7XHJcbiAgIGJvcmRlcjogbm9uZTtcclxuICAgaGVpZ2h0OiAzMHB4O1xyXG4gICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xyXG4gICBjb2xvcjogIzk4OTg5ODtcclxuICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgIHBhZGRpbmc6IDEwcHggMHB4O1xyXG59XHJcbi5zZWFyY2ggaXtcclxuICAgIHBhZGRpbmc6IDEwcHggN3B4O1xyXG4gICAgY29sb3I6ICM5ODk4OTg7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchPanelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-search-panel',
                templateUrl: './search-panel.component.html',
                styleUrls: ['./search-panel.component.css']
            }]
    }], function () { return []; }, { setSearch: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/component/main-chat/main-bottom/main-bottom.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/component/main-chat/main-bottom/main-bottom.component.ts ***!
  \**************************************************************************/
/*! exports provided: MainBottomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainBottomComponent", function() { return MainBottomComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
//SendEnter() this method sends the data entered from the textarea to the main chat component. Makes when you press Enter
// Send() this method sends the data entered from the textarea to the main chat component. Makes when you click on the icon
// validation() this method corresponds to the validation of textarea


class MainBottomComponent {
    constructor() {
        this.values = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    SendEnter(text, event) {
        let valid = this.validation(text);
        if (event.key == "Enter") {
            if (valid) {
                this.values.emit(text.trim());
            }
            event.target.value = "";
        }
    }
    validation(text) {
        if (text.trim() == "") {
            return false;
        }
        else {
            return true;
        }
    }
    Send(text, event) {
        let valid = this.validation(text);
        if (valid) {
            this.values.emit(text.trim());
        }
        event.value = "";
    }
    ngOnInit() {
    }
}
MainBottomComponent.ɵfac = function MainBottomComponent_Factory(t) { return new (t || MainBottomComponent)(); };
MainBottomComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainBottomComponent, selectors: [["app-main-bottom"]], outputs: { values: "values" }, decls: 4, vars: 0, consts: [[1, "mainBottom"], ["placeholder", "Type your message", 3, "keyup.enter"], ["textarea", ""], [1, "far", "fa-paper-plane", 3, "click"]], template: function MainBottomComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "textarea", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function MainBottomComponent_Template_textarea_keyup_enter_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return ctx.SendEnter(_r0.value, $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainBottomComponent_Template_i_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return ctx.Send(_r0.value, _r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".mainBottom[_ngcontent-%COMP%]{\r\n    background: #f5f5f5;    \r\n    border-top: 2px solid #e1e1e1;\r\n    padding: 18px;\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n.mainBottom[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{\r\n    flex: auto;\r\n    resize: none;\r\n    padding: 10px 15px;\r\n    font-size: 16px;\r\n    padding-top: 25px;\r\n    border-radius: 30px;\r\n    border: 2px solid #e1e1e1;\r\n}\r\n.mainBottom[_ngcontent-%COMP%]   .far[_ngcontent-%COMP%]{\r\n    font-size: 30px;\r\n    color: #797979;\r\n    position: relative;\r\n    top: 25px;\r\n    z-index: 40000;\r\n    left: -50px;\r\n}\r\n.mainBottom[_ngcontent-%COMP%]   .far[_ngcontent-%COMP%]::before{cursor: pointer;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L21haW4tY2hhdC9tYWluLWJvdHRvbS9tYWluLWJvdHRvbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixhQUFhO0lBQ2IsYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsY0FBYztJQUNkLFdBQVc7QUFDZjtBQUNBLHlCQUF5QixlQUFlLENBQUMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvbWFpbi1jaGF0L21haW4tYm90dG9tL21haW4tYm90dG9tLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbkJvdHRvbXtcclxuICAgIGJhY2tncm91bmQ6ICNmNWY1ZjU7ICAgIFxyXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNlMWUxZTE7XHJcbiAgICBwYWRkaW5nOiAxOHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5tYWluQm90dG9tIHRleHRhcmVhe1xyXG4gICAgZmxleDogYXV0bztcclxuICAgIHJlc2l6ZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIHBhZGRpbmctdG9wOiAyNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNlMWUxZTE7XHJcbn1cclxuLm1haW5Cb3R0b20gLmZhcntcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGNvbG9yOiAjNzk3OTc5O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAyNXB4O1xyXG4gICAgei1pbmRleDogNDAwMDA7XHJcbiAgICBsZWZ0OiAtNTBweDtcclxufVxyXG4ubWFpbkJvdHRvbSAuZmFyOjpiZWZvcmV7Y3Vyc29yOiBwb2ludGVyO31cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainBottomComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main-bottom',
                templateUrl: './main-bottom.component.html',
                styleUrls: ['./main-bottom.component.css']
            }]
    }], function () { return []; }, { values: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/component/main-chat/main-chat.component.ts":
/*!************************************************************!*\
  !*** ./src/app/component/main-chat/main-chat.component.ts ***!
  \************************************************************/
/*! exports provided: MainChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainChatComponent", function() { return MainChatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_service_apianswer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/service/apianswer.service */ "./src/service/apianswer.service.ts");
/* harmony import */ var _main_top_main_top_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-top/main-top.component */ "./src/app/component/main-chat/main-top/main-top.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _main_bottom_main_bottom_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main-bottom/main-bottom.component */ "./src/app/component/main-chat/main-bottom/main-bottom.component.ts");
// generateAnswerMessage () - this is a method that gets answers from the API
// getNewMessage() - is a method that composes new messages.
//                    Accepts parameters:
//                        increased - The text of the message comes from the main-bottom.component.
//                        senderArg - Sender (two options or "me" or "his").
//                        screenScrollBottom - an element of "content" - which is required for automatic scrolling 
//                        to the bottom
// ngOnInit()  is a method that appeals to APIAnswerService to retrieve data for a response






function MainChatComponent_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Write him something");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MainChatComponent_div_4_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/", ctx_r5.selectContact.avatar, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 3, item_r2.date, "short"));
} }
function MainChatComponent_div_4_div_2_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 2, item_r2.date, "short"));
} }
function MainChatComponent_div_4_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MainChatComponent_div_4_div_2_div_1_Template, 9, 6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MainChatComponent_div_4_div_2_div_2_Template, 8, 5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r2.sender == "his");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r2.sender == "me");
} }
function MainChatComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MainChatComponent_div_4_div_1_Template, 3, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MainChatComponent_div_4_div_2_Template, 3, 2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r2.message == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r2.message != "");
} }
class MainChatComponent {
    constructor(APIAnswerService) {
        this.APIAnswerService = APIAnswerService;
        this.newMessage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._url = 'https://api.chucknorris.io/jokes/random';
    }
    getNewMessage(increased, senderArg, screenScrollBottom) {
        this.generateAnswerMessage();
        let date = new Date();
        let sender = senderArg;
        let newMessages = {
            message: increased,
            sender: sender,
            date: date,
        };
        this.newMessage.emit(newMessages);
        if (senderArg == 'his') {
            setTimeout(() => { screenScrollBottom.scrollTop = screenScrollBottom.scrollHeight; }, 100);
            return true;
        }
        else {
            this.getNewMessage(this.answer.value, "his", screenScrollBottom);
        }
    }
    generateAnswerMessage() {
        fetch(this._url)
            .then(data => {
            data.json()
                .then(data => this.answer = data);
        });
    }
    ngOnInit() {
        this.APIAnswerService.getAnswer()
            .subscribe(data => {
            return this.answer = data;
        });
    }
}
MainChatComponent.ɵfac = function MainChatComponent_Factory(t) { return new (t || MainChatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_service_apianswer_service__WEBPACK_IMPORTED_MODULE_1__["APIAnswerService"])); };
MainChatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainChatComponent, selectors: [["app-main-chat"]], inputs: { selectContact: "selectContact", contacts: "contacts" }, outputs: { newMessage: "newMessage" }, decls: 6, vars: 2, consts: [[1, "mainContant"], [3, "selectContact"], [1, "contant"], ["contant", ""], [4, "ngFor", "ngForOf"], [3, "values"], [4, "ngIf"], [1, "withoutTalking"], ["class", "message his", 4, "ngIf"], ["class", "message my", 4, "ngIf"], [1, "message", "his"], [1, "flexContainer"], ["alt", "avatar", 1, "avatar", 3, "src"], [1, "text"], [1, "dateTime"], [1, "date"], [1, "message", "my"]], template: function MainChatComponent_Template(rf, ctx) { if (rf & 1) {
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-main-top", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MainChatComponent_div_4_Template, 3, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "app-main-bottom", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("values", function MainChatComponent_Template_app_main_bottom_values_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return ctx.getNewMessage($event, "me", _r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectContact", ctx.selectContact);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.selectContact.messagesHistory);
    } }, directives: [_main_top_main_top_component__WEBPACK_IMPORTED_MODULE_2__["MainTopComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _main_bottom_main_bottom_component__WEBPACK_IMPORTED_MODULE_4__["MainBottomComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]], styles: [".mainContant[_ngcontent-%COMP%]{\r\n    height: 100%;\r\n    border: 1px solid #dedede;\r\n    border-top: none;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.contant[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: auto;\r\n    max-height: 380px;\r\n    flex: auto;\r\n    overflow: auto;\r\n}\r\n\r\n.contant[_ngcontent-%COMP%]::-webkit-scrollbar{width: 5px; height: 5px;}\r\n\r\n.contant[_ngcontent-%COMP%]::-webkit-scrollbar-button {  background-color: #e0e0e0; }\r\n\r\n.contant[_ngcontent-%COMP%]::-webkit-scrollbar-track {  background-color: #e0e0e0;}\r\n\r\n.contant[_ngcontent-%COMP%]::-webkit-scrollbar-thumb { height: 50px; background-color: #3c4252; border-radius: 3px;}\r\n\r\n.message[_ngcontent-%COMP%]{\r\n    width: 75%;\r\n    padding: 6px 0;\r\n}\r\n\r\n.his[_ngcontent-%COMP%]{float: left;}\r\n\r\n.my[_ngcontent-%COMP%]{float: right; text-align: right; padding-right: 10px;}\r\n\r\n.his[_ngcontent-%COMP%]   .flexContainer[_ngcontent-%COMP%]{display: flex; align-items: center;}\r\n\r\n.my[_ngcontent-%COMP%]   .flexContainer[_ngcontent-%COMP%]{display: flex; justify-content: flex-end; align-items: center;}\r\n\r\n.his[_ngcontent-%COMP%]   .flexContainer[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]{\r\n    width: 48px;\r\n    height: 48px;\r\n    margin: 14px 10px;\r\n}\r\n\r\n.his[_ngcontent-%COMP%]   .flexContainer[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{\r\n    background: #3c4252;\r\n    color: #fff;\r\n}\r\n\r\n.message[_ngcontent-%COMP%]   .flexContainer[_ngcontent-%COMP%]{\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.message[_ngcontent-%COMP%]   .flexContainer[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{\r\n    padding: 13px 30px;\r\n    border-radius: 60px;\r\n}\r\n\r\n.my[_ngcontent-%COMP%]   .flexContainer[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{background: #e0e0e0; text-align: right; margin: 14px 0;}\r\n\r\n.message[_ngcontent-%COMP%]   .dateTime[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    margin-left: 80px;\r\n    font-size: 15px;\r\n    color: #c1c1c1;\r\n    top: -5px;\r\n}\r\n\r\n.withoutTalking[_ngcontent-%COMP%]{\r\n    font-size: 23px;\r\n    margin: 30px 0;\r\n    text-align: center;\r\n    word-break: break-all;\r\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n    color: #8d8d8d;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L21haW4tY2hhdC9tYWluLWNoYXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsY0FBYztBQUNsQjs7QUFDQSw0QkFBNEIsVUFBVSxFQUFFLFdBQVcsQ0FBQzs7QUFDcEQsc0NBQXNDLHlCQUF5QixFQUFFOztBQUNqRSxxQ0FBcUMseUJBQXlCLENBQUM7O0FBQy9ELG9DQUFvQyxZQUFZLEVBQUUseUJBQXlCLEVBQUUsa0JBQWtCLENBQUM7O0FBQ2hHO0lBQ0ksVUFBVTtJQUNWLGNBQWM7QUFDbEI7O0FBQ0EsS0FBSyxXQUFXLENBQUM7O0FBQ2pCLElBQUksWUFBWSxFQUFFLGlCQUFpQixFQUFFLG1CQUFtQixDQUFDOztBQUN6RCxvQkFBb0IsYUFBYSxFQUFFLG1CQUFtQixDQUFDOztBQUN2RCxtQkFBbUIsYUFBYSxFQUFFLHlCQUF5QixFQUFFLG1CQUFtQixDQUFDOztBQUNqRjtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjs7QUFDQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBQ0EseUJBQXlCLG1CQUFtQixFQUFFLGlCQUFpQixFQUFFLGNBQWMsQ0FBQzs7QUFDaEY7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixjQUFjO0lBQ2QsU0FBUztBQUNiOztBQUNBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLDZFQUE2RTtJQUM3RSxjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L21haW4tY2hhdC9tYWluLWNoYXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluQ29udGFudHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZWRlZGU7XHJcbiAgICBib3JkZXItdG9wOiBub25lO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5jb250YW50e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXgtaGVpZ2h0OiAzODBweDtcclxuICAgIGZsZXg6IGF1dG87XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxufVxyXG4uY29udGFudDo6LXdlYmtpdC1zY3JvbGxiYXJ7d2lkdGg6IDVweDsgaGVpZ2h0OiA1cHg7fVxyXG4uY29udGFudDo6LXdlYmtpdC1zY3JvbGxiYXItYnV0dG9uIHsgIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7IH1cclxuLmNvbnRhbnQ6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHsgIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7fVxyXG4uY29udGFudDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIgeyBoZWlnaHQ6IDUwcHg7IGJhY2tncm91bmQtY29sb3I6ICMzYzQyNTI7IGJvcmRlci1yYWRpdXM6IDNweDt9XHJcbi5tZXNzYWdle1xyXG4gICAgd2lkdGg6IDc1JTtcclxuICAgIHBhZGRpbmc6IDZweCAwO1xyXG59XHJcbi5oaXN7ZmxvYXQ6IGxlZnQ7fVxyXG4ubXl7ZmxvYXQ6IHJpZ2h0OyB0ZXh0LWFsaWduOiByaWdodDsgcGFkZGluZy1yaWdodDogMTBweDt9XHJcbi5oaXMgLmZsZXhDb250YWluZXJ7ZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjt9XHJcbi5teSAuZmxleENvbnRhaW5lcntkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kOyBhbGlnbi1pdGVtczogY2VudGVyO31cclxuLmhpcyAuZmxleENvbnRhaW5lciAuYXZhdGFye1xyXG4gICAgd2lkdGg6IDQ4cHg7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICBtYXJnaW46IDE0cHggMTBweDtcclxufVxyXG4uaGlzIC5mbGV4Q29udGFpbmVyIC50ZXh0e1xyXG4gICAgYmFja2dyb3VuZDogIzNjNDI1MjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcbi5tZXNzYWdlIC5mbGV4Q29udGFpbmVye1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG4ubWVzc2FnZSAuZmxleENvbnRhaW5lciAudGV4dHtcclxuICAgIHBhZGRpbmc6IDEzcHggMzBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDYwcHg7XHJcbn1cclxuLm15IC5mbGV4Q29udGFpbmVyIC50ZXh0e2JhY2tncm91bmQ6ICNlMGUwZTA7IHRleHQtYWxpZ246IHJpZ2h0OyBtYXJnaW46IDE0cHggMDt9XHJcbi5tZXNzYWdlIC5kYXRlVGltZXtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi1sZWZ0OiA4MHB4O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgY29sb3I6ICNjMWMxYzE7XHJcbiAgICB0b3A6IC01cHg7XHJcbn1cclxuLndpdGhvdXRUYWxraW5ne1xyXG4gICAgZm9udC1zaXplOiAyM3B4O1xyXG4gICAgbWFyZ2luOiAzMHB4IDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbiAgICBmb250LWZhbWlseTogJ0dpbGwgU2FucycsICdHaWxsIFNhbnMgTVQnLCBDYWxpYnJpLCAnVHJlYnVjaGV0IE1TJywgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiAjOGQ4ZDhkO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainChatComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main-chat',
                templateUrl: './main-chat.component.html',
                styleUrls: ['./main-chat.component.css']
            }]
    }], function () { return [{ type: src_service_apianswer_service__WEBPACK_IMPORTED_MODULE_1__["APIAnswerService"] }]; }, { selectContact: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], contacts: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], newMessage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/component/main-chat/main-top/main-top.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/component/main-chat/main-top/main-top.component.ts ***!
  \********************************************************************/
/*! exports provided: MainTopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainTopComponent", function() { return MainTopComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function MainTopComponent_i_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 5);
} }
function MainTopComponent_i_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 6);
} }
class MainTopComponent {
    constructor() { }
    ngOnInit() {
    }
}
MainTopComponent.ɵfac = function MainTopComponent_Factory(t) { return new (t || MainTopComponent)(); };
MainTopComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainTopComponent, selectors: [["app-main-top"]], inputs: { selectContact: "selectContact" }, decls: 7, vars: 4, consts: [[1, "mainTop"], [1, "avatar"], ["alt", "avatar", 3, "src"], ["class", "far fa-check-circle status online", 4, "ngIf"], ["class", "fas fa-times-circle status offline", 4, "ngIf"], [1, "far", "fa-check-circle", "status", "online"], [1, "fas", "fa-times-circle", "status", "offline"]], template: function MainTopComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MainTopComponent_i_3_Template, 1, 0, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MainTopComponent_i_4_Template, 1, 0, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/", ctx.selectContact.avatar, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectContact.status == "online");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectContact.status == "offline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.selectContact.name);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".mainTop[_ngcontent-%COMP%]{\r\n    padding: 10px 15px;\r\n    background: #f5f5f5;\r\n    border-bottom: 2px solid #dedede;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    align-items: center;\r\n}\r\n\r\n.mainTop[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width: 48px;\r\n    height: 48px;\r\n}\r\n\r\n.avatar[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%]{\r\n    font-size: 20px;\r\n    position: relative;\r\n    font-weight: 600;\r\n    margin-left: -18px;\r\n    top: -2px;\r\n}\r\n\r\nh2[_ngcontent-%COMP%]{\r\n    padding: 0 15px;\r\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n    font-weight: 400;\r\n    color: #565656;\r\n}\r\n\r\n.online[_ngcontent-%COMP%]{color: green;}\r\n\r\n.offline[_ngcontent-%COMP%]{color: red;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L21haW4tY2hhdC9tYWluLXRvcC9tYWluLXRvcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixnQ0FBZ0M7SUFDaEMsYUFBYTtJQUNiLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFDQztJQUNHLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixTQUFTO0FBQ2I7O0FBQ0E7SUFDSSxlQUFlO0lBQ2YsNkVBQTZFO0lBQzdFLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCOztBQUNBLFFBQVEsWUFBWSxDQUFDOztBQUNyQixTQUFTLFVBQVUsQ0FBQyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9tYWluLWNoYXQvbWFpbi10b3AvbWFpbi10b3AuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluVG9we1xyXG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZGVkZWRlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tYWluVG9wIC5hdmF0YXIgaW1ne1xyXG4gICAgd2lkdGg6IDQ4cHg7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbn1cclxuIC5hdmF0YXIgLnN0YXR1c3tcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBtYXJnaW4tbGVmdDogLTE4cHg7XHJcbiAgICB0b3A6IC0ycHg7XHJcbn1cclxuaDJ7XHJcbiAgICBwYWRkaW5nOiAwIDE1cHg7XHJcbiAgICBmb250LWZhbWlseTogJ0dpbGwgU2FucycsICdHaWxsIFNhbnMgTVQnLCBDYWxpYnJpLCAnVHJlYnVjaGV0IE1TJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogIzU2NTY1NjtcclxufVxyXG4ub25saW5le2NvbG9yOiBncmVlbjt9XHJcbi5vZmZsaW5le2NvbG9yOiByZWQ7fSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainTopComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main-top',
                templateUrl: './main-top.component.html',
                styleUrls: ['./main-top.component.css']
            }]
    }], function () { return []; }, { selectContact: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/truncate-text.pipe.ts":
/*!***************************************!*\
  !*** ./src/app/truncate-text.pipe.ts ***!
  \***************************************/
/*! exports provided: TruncateTextPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruncateTextPipe", function() { return TruncateTextPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class TruncateTextPipe {
    transform(value, length) {
        const biggestWord = 50;
        const elipses = "...";
        if (typeof value === "undefined")
            return value;
        if (value.length <= length)
            return value;
        //.. truncate to about correct lenght
        let truncatedText = value.slice(0, length + biggestWord);
        //.. now nibble ends till correct length
        while (truncatedText.length > length - elipses.length) {
            let lastSpace = truncatedText.lastIndexOf(" ");
            if (lastSpace === -1)
                break;
            truncatedText = truncatedText.slice(0, lastSpace).replace(/[!,.?;:]$/, '');
        }
        ;
        return truncatedText + elipses;
    }
}
TruncateTextPipe.ɵfac = function TruncateTextPipe_Factory(t) { return new (t || TruncateTextPipe)(); };
TruncateTextPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "truncateText", type: TruncateTextPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TruncateTextPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'truncateText'
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "./src/service/apianswer.service.ts":
/*!******************************************!*\
  !*** ./src/service/apianswer.service.ts ***!
  \******************************************/
/*! exports provided: APIAnswerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APIAnswerService", function() { return APIAnswerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class APIAnswerService {
    constructor(http) {
        this.http = http;
        this._url = 'https://api.chucknorris.io/jokes/random';
    }
    getAnswer() {
        return this.http.get(this._url);
    }
}
APIAnswerService.ɵfac = function APIAnswerService_Factory(t) { return new (t || APIAnswerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
APIAnswerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: APIAnswerService, factory: APIAnswerService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](APIAnswerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/service/data.service.ts":
/*!*************************************!*\
  !*** ./src/service/data.service.ts ***!
  \*************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class DataService {
    constructor(http) {
        this.http = http;
        this._url = "assets/data.json";
    }
    getDate() {
        return this.http.get(this._url);
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Coding\TestReenbitSimpleChat\ChatReenditTest\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map