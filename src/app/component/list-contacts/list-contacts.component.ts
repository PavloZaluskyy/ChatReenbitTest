import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/service/data.service';
//import { Data } from 'src/app/data';


@Component({
  selector: 'app-list-contacts',
  templateUrl: './list-contacts.component.html',
  styleUrls: ['./list-contacts.component.css']
})
export class ListContactsComponent implements OnInit {

  public contacts: any[];

  constructor(private DataService: DataService) {

  }
  selectContact(item, event) {
    let allActiveClassCss = document.querySelectorAll(".active");
    event.currentTarget.classList.add('active');
    if (allActiveClassCss[0] != undefined)
      allActiveClassCss[0].classList.remove('active');

  }
  sortForDate(items) {
    items.sort((a, b) => {
      let dateA: any = new Date(a.messagesHistory[a.messagesHistory.length - 1].date),
        dateB: any = new Date(b.messagesHistory[b.messagesHistory.length - 1].date);
      return dateB - dateA
    })
  }
  ngOnInit() {
    this.DataService.getDate()
      .subscribe(data => {
        this.sortForDate(data);
        this.contacts = (data);
        return this.contacts;
      });
  }

}
