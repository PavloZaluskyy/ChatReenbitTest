// SendEnter() this method sends the data entered from the textarea to the main chat component. Makes when you press Enter
// Send() this method sends the data entered from the textarea to the main chat component. Makes when you click on the icon
// validation() this method corresponds to the validation of textarea

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
    const valid = this.validation(text);
    if (event.key === 'Enter') {
      if (valid) {
        this.values.emit(text.trim());
      }
      event.target.value = '';
    }
  }
  validation(text) {
    if (text.trim() === '') {
      return false;
    }
    return true;
  }
  Send(text, event) {
    const valid = this.validation(text);
    if (valid) {
      this.values.emit(text.trim());
    }
    event.value = '';
  }

  ngOnInit() {
  }

}
