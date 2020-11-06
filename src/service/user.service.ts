import { Injectable } from '@angular/core';
import { User } from 'src/app/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User = {
    name: 'User',
    photoUrl: 'assets/img/myAvatar.png'
  };

  constructor() { }
}
