// generateAnswerMessage () - this is a method that gets answers from the API
// getNewMessage() - is a method that composes new messages.
//                    Accepts parameters:
//                        increased - The text of the message comes from the main-bottom.component.
//                        senderArg - Sender (two options or "me" or "his").
//                        screenScrollBottom - an element of "content" - which is required for automatic scrolling 
//                        to the bottom
// ngOnInit()  is a method that appeals to APIAnswerService to retrieve data for a response
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


  getNewMessage(increased: string, senderArg, screenScrollBottom) {
    this.generateAnswerMessage();
    let date = new Date();
    let sender: string = senderArg;
    let newMessages = {
      message: increased,
      sender: sender,
      date: date,
    }
    this.newMessage.emit(newMessages);
    setTimeout(() => { screenScrollBottom.scrollTop = screenScrollBottom.scrollHeight }, 100);
    if (senderArg == 'his' ) return true;
    this.selectContact.messagesHistory.push({message: `${this.selectContact.name} is typing ... `, sender: "his"})
    setTimeout(()=>{
      this.selectContact.messagesHistory.pop()
      const audio = new Audio('../assets/that-was-quick-606.mp3');
      this.getNewMessage(this.answer.value, "his", screenScrollBottom);
      audio.play()
    }, this.getRendom(10000, 15000))
  }

  generateAnswerMessage() {
    fetch(this._url)
      .then(data => {
        data.json()
          .then(data => this.answer = data)
      })
  }

  getRendom(min, max){return Math.floor(Math.random() * (max - min + 1) ) + min; }

  constructor(private APIAnswerService: APIAnswerService) { }

  ngOnInit() {
    this.APIAnswerService.getAnswer()
      .subscribe(data => {
        return this.answer = data;
      });
  }
}
