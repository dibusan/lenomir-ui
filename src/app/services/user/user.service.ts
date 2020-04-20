import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  loggedin: boolean;
  constructor() {
    this.loggedin = false;
  }

  isLoggedIn(): boolean {
    return this.loggedin;
  }
}
