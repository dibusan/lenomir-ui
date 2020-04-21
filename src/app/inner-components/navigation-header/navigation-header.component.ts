import {Component, Inject, OnInit} from '@angular/core';
import {UserService} from '../../services/user/user.service';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {LoginDialogData} from '../../interfaces/LoginDialogData';

@Component({
  selector: 'app-navigation-header',
  templateUrl: './navigation-header.component.html',
  styleUrls: ['./navigation-header.component.css']
})
export class NavigationHeaderComponent implements OnInit {

  username: string;
  constructor(public userService: UserService, public loginDialog: MatDialog) {}
  ngOnInit(): void {}

  login(){
    this.userService.login('demo', '2791n66ave');
  }

  logout(){
    this.userService.logout();
  }

  openLoginDialog(): void {
    const dialogRef = this.loginDialog.open(LoginDialogComponent, {
      width: '250px',
      data: {username: '', animal: ''}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === undefined){
        console.warn('Login canceled');
      } else {
        this.userService.login(result.username, result.password);
      }
    });
  }
}

@Component({
  selector: 'app-login-dialog',
  templateUrl: 'login-dialog.html',
})
export class LoginDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<LoginDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: LoginDialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
