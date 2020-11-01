// setSearchMethod() is a method that searches the contact list
// selectContact()   this is a method that selects a contact and sends it to the app.component
//                   and then to the main.chat.component
// 
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-contacts',
  templateUrl: './list-contacts.component.html',
  styleUrls: ['./list-contacts.component.css']
})

export class ListContactsComponent implements OnInit {

  @Input() contacts: any[];
  @Output() selectCont = new EventEmitter<any>();

  viewContacts: any = false;
  dontFoundContacts: boolean = false;
  searchEnter: string = "";

  constructor() { }

  setSearchMethod(event) {
    this.dontFoundContacts = true;
    this.viewContacts = []
    if (event == "") this.dontFoundContacts = false;
    for (const key of this.contacts) {
      if (key.name.toLowerCase().search(event.toLowerCase().trim()) != -1) {
        this.dontFoundContacts = false;
        this.viewContacts.push(key);
      }
      else {
        this.searchEnter = event;
      }
    }
  }
  selectContact(increased: any, event) {
    let allActiveClassCss = document.querySelectorAll(".active");
    event.currentTarget.classList.add('active');
    if (allActiveClassCss[0] != undefined)
      allActiveClassCss[0].classList.remove('active');
    this.selectCont.emit(increased);
  }

  ngOnInit() { }

}
