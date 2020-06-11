// setSearchMethod() - is a method that sends the input value to the parent component
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.css']
})

export class SearchPanelComponent implements OnInit {

  @Output() setSearch = new EventEmitter<string>();
  search: string;
  setSearchMethod(search) {
    this.setSearch.emit(search);
  }
  constructor() { }

  ngOnInit() { }

}
