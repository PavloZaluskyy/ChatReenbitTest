// setSearchMethod() - is a method that sends the input value to the parent component
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SocialAuthService } from 'angularx-social-login';
import { UserService } from 'src/service/user.service';

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.css']
})

export class SearchPanelComponent implements OnInit {

  @Output() setSearch = new EventEmitter<string>();
  user;
  search: string;
  setSearchMethod(search) {
    this.setSearch.emit(search);
  }
  constructor(private authService: SocialAuthService, private userService: UserService) { }

  signOut(){
    this.authService.signOut();
    this.userService.user.name = 'User';
    this.userService.user.photoUrl = 'assets/img/myAvatar.png'
  }

  ngOnInit() {
    this.user = this.userService;
   }

}
