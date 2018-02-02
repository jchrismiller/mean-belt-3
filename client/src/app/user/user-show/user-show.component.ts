import { Component, OnInit } from '@angular/core';
import { Post } from '../../post/post';
import { PostService } from '../../post/post.service';
import { User } from '../user';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-show',
  templateUrl: './user-show.component.html',
  styleUrls: ['./user-show.component.css']
})
export class UserShowComponent implements OnInit {
	id: string;
	post: Post;
	user: User;
	users: User[] = [];

  constructor(
  	private _postService: PostService,
  	private _activatedRoute: ActivatedRoute,
  	private _userService: UserService
  	) { 
  		this._activatedRoute.paramMap.subscribe(
  			(params) => {
  				this.id = params.get('id');
  				console.log('params_id', this.id);
  			}
  		);
  }

  ngOnInit() {
  	this.user = new User();

  	this._userService.getCurrentUser(
  		(user) => {
  			this.user = user;
  			console.log(user.name);
  		},
  		(err) => {
  			console.log(err.json())
  		}
  	);
  }

}
