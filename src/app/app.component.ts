import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lenomir-ui';
  loggedin: boolean;
  constructor(){
    this.loggedin = false;
  }
}
