import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main-top',
  templateUrl: './main-top.component.html',
  styleUrls: ['./main-top.component.css']
})
export class MainTopComponent implements OnInit {
  @Input() selectContact:any;
  constructor() { }

  ngOnInit() {
  }

}
