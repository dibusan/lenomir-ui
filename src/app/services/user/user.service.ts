import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public loggedIn: boolean;
  public token: string;
  public username: string;
  constructor(private httpClient: HttpClient) {
    this.loggedIn = false;
  }

  login(username, password){
    const apiUrl = 'https://lenomir-core-dot-lenomir.appspot.com/authenticate';
    // tslint:disable-next-line:no-debugger
    debugger;
    this.httpClient.post(apiUrl, {username, password}).subscribe(
      (resp: any) => {
        console.log(`User '${username}' logged in.`);
        this.token = resp.auth_token;
        this.loggedIn = true;
        this.username = username;
      }
    );
  }

  logout(){
    this.loggedIn = false;
    this.token = null;
    console.log(`User ${this.username} logged out.`);
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }
}
