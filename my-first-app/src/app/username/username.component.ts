import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {
  userNameStatus = 'No UserName is set!';
  userNameField = '';
  currentUserName = '';

  constructor() { }

  ngOnInit() {
  }

  onSubmitUserName() {
    this.currentUserName = this.userNameField;
    this.userNameField = '';
    this.userNameStatus = 'UserName set to ' + this.currentUserName;
  }

  onClearUserName(event: Event) {
    this.userNameField = '';
    this.currentUserName = '';
    this.userNameStatus = 'UserName Cleared!';
  }

}
