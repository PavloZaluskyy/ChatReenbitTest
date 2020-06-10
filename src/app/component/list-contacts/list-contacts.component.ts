import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-contacts',
  templateUrl: './list-contacts.component.html',
  styleUrls: ['./list-contacts.component.css']
})
export class ListContactsComponent implements OnInit {

  @Input() contacts: any[];
  @Output() selectCont = new EventEmitter<any>();
  viewContacts:any = false;

  constructor() {}
  setSearchMethod(event){
    this.viewContacts = []
    //this.viewContacts = this.contacts;
    for (const key of this.contacts) {
     // console.log(key.name)
      if (key.name.search(event) != -1 ) {
        this.viewContacts.push(key);
        console.log(this.viewContacts);
      }
      else{
       // this.viewContacts = this.contacts;
        console.log("None")
      }
    }
  }
  selectContact(increased:any, event) {
    let allActiveClassCss = document.querySelectorAll(".active");
    event.currentTarget.classList.add('active');
    if (allActiveClassCss[0] != undefined)
      allActiveClassCss[0].classList.remove('active');
    this.selectCont.emit(increased);
  }
  
  ngOnInit() {}

}
