import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/service/data.service';
//import { Data } from 'src/app/data';


@Component({
  selector: 'app-list-contacts',
  templateUrl: './list-contacts.component.html',
  styleUrls: ['./list-contacts.component.css']
})
export class ListContactsComponent implements OnInit {

  public contacts:any[];
  fun(item){
    console.log(1)
    console.log(item[0].name);
  }

  constructor(private DataService: DataService) {
    
  }

  ngOnInit() {
    this.DataService.getDate()
      .subscribe(data => {
        console.log(data)
        this.contacts=(data);
        return this.contacts;
      });
  }

}
