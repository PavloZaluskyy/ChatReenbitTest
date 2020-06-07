import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public contacts: any[];
  
  sentSelectContactToMainChatComponent:any;
  
  constructor(private DataService: DataService) {}
  selectContact(increased:any){
    this.sentSelectContactToMainChatComponent = increased
    console.log(this.sentSelectContactToMainChatComponent);
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
        console.log(data);
        this.contacts = (data);
        this.sentSelectContactToMainChatComponent = this.contacts[0];
        return this.contacts;
      });
  }
}
