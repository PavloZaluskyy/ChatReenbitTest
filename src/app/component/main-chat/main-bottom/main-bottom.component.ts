import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-main-bottom',
  templateUrl: './main-bottom.component.html',
  styleUrls: ['./main-bottom.component.css']
})
export class MainBottomComponent implements OnInit {
  @Output() values = new EventEmitter<string>();
  constructor() { }
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
    } else {
      return true
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
