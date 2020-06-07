import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main-chat',
  templateUrl: './main-chat.component.html',
  styleUrls: ['./main-chat.component.css']
})
export class MainChatComponent implements OnInit {
  @Input() selectContact:any;
  @Input() contacts:any[];
  
  default(){
    console.log(this.selectContact)
  }
  
  constructor() { setTimeout(()=>this.default(), 1000) }

  ngOnInit() {
  }

}
