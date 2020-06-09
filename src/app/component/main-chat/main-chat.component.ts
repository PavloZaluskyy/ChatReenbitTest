import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { APIAnswerService } from 'src/service/apianswer.service';

@Component({
  selector: 'app-main-chat',
  templateUrl: './main-chat.component.html',
  styleUrls: ['./main-chat.component.css']
})
export class MainChatComponent implements OnInit {
  @Input() selectContact: any;
  @Input() contacts: any[];
  @Output() newMessage = new EventEmitter<object>();
  private _url = 'https://api.chucknorris.io/jokes/random';
  public answer: any;

  getNewMessage(increased: string, senderArg) {
    this.generateAnswerMessage();
    let date = new Date();
    let sender: string = senderArg;
    let newMessages = {
      message: increased,
      sender: sender,
      date: date,
    }
    this.newMessage.emit(newMessages);
    if (senderArg == 'his') {
      return true;
    }
    else {
      this.getNewMessage(this.answer.value, "his");
    }
  }

  generateAnswerMessage() {
    fetch(this._url)
      .then(data => {
        data.json()
          .then(data => this.answer = data)
      })
  }

  constructor(private APIAnswerService: APIAnswerService) { }

  ngOnInit() {
    this.APIAnswerService.getAnswer()
      .subscribe(data => {
        return this.answer = data;
      });
  }
}
