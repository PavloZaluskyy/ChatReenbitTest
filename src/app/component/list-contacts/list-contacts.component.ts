import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
//import { DataService } from 'src/service/data.service';
//import { Data } from 'src/app/data';


@Component({
  selector: 'app-list-contacts',
  templateUrl: './list-contacts.component.html',
  styleUrls: ['./list-contacts.component.css']
})
export class ListContactsComponent implements OnInit {

  @Input() contacts: any[];
  @Output() selectCont = new EventEmitter<any>();

  constructor() {}
  selectContact(increased:any, event) {
    let allActiveClassCss = document.querySelectorAll(".active");
    event.currentTarget.classList.add('active');
    if (allActiveClassCss[0] != undefined)
      allActiveClassCss[0].classList.remove('active');
    this.selectCont.emit(increased);
  }
  
  ngOnInit() {}

}
