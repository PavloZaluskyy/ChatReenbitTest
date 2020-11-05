// ngOnInit() this method reads data from DataService
// getNewMessage() this method adds new messages to JSON
// selectContact() this method sends the selected contact from the list.contacts.component to the main-chat.component
// sortForDate() this method makes sorting contacts by date
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  public contacts: any[];

  sentSelectContactToMainChatComponent: any;

  constructor(private dataService: DataService) { }
  selectContact(increased: any) {
    this.sentSelectContactToMainChatComponent = increased;
  }
  getNewMessage(event) {
    const currentId = this.sentSelectContactToMainChatComponent.id;
    for (const key of this.contacts) {
      if (key.id === currentId) {
          key.messagesHistory.push(event);
          this.sortForDate(this.contacts);
        }
        }
    this.setLocalStorage(this.contacts);
  }
  sortForDate(items) {
    items.sort((a, b) => {
      const dateA: any = new Date(a.messagesHistory[a.messagesHistory.length - 1].date);
      const dateB: any = new Date(b.messagesHistory[b.messagesHistory.length - 1].date);
      return dateB - dateA;
    });
  }
  setLocalStorage(data){
    localStorage.setItem('data', JSON.stringify(data));
  }
  getLocalStorage(){
    return localStorage.getItem('data');
  }
  ngOnInit() {
    this.dataService.getDate()
      .subscribe(data => {
        this.sortForDate(data);
        if ( localStorage.getItem( 'data' ) ) {
          this.contacts = JSON.parse( this.getLocalStorage() );
        }
        else{
          this.contacts = data;
        }
        this.sentSelectContactToMainChatComponent = this.contacts[0];
        return this.contacts;
      });
  }
}
