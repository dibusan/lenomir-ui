import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user/user.service';

@Component({
  selector: 'app-navigation-header',
  templateUrl: './navigation-header.component.html',
  styleUrls: ['./navigation-header.component.css']
})
export class NavigationHeaderComponent implements OnInit {

  loggedin: boolean;
  constructor(private userSerivice: UserService) {
    this.loggedin = false;
  }

  ngOnInit(): void {
    this.loggedin = this.userSerivice.isLoggedIn();
  }

}
