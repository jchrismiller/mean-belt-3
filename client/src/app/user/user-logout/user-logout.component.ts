import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-logout',
  templateUrl: './user-logout.component.html',
  styleUrls: ['./user-logout.component.css']
})
export class UserLogoutComponent implements OnInit {
  name: String;

  constructor(
  	private _route: Router,
  	private _userService: UserService
  	) { }

  ngOnInit() {

  }

  logout() {
  	this._userService.logout(
  		(res) => {
  			console.log("TEST LOGOUT");
  			console.log(res);
  			this._route.navigateByUrl('/');
  		},
  		console.log("ok")
  	)

  }
}
