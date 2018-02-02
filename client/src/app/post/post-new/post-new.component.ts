import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../post.service';
import { Post } from '../post';
import { UserService } from '../../user/user.service';
import { User } from '../../user/user'

@Component({
  selector: 'app-post-new',
  templateUrl: './post-new.component.html',
  styleUrls: ['./post-new.component.css']
})
export class PostNewComponent implements OnInit {
	post: Post;
  user: User;
  users: User[];

  constructor(
  	private _postService: PostService,
  	private _router: Router,
    private _userService: UserService
  	) { }

  ngOnInit() {
  	this.post = new Post();

    this._userService.retrieveUsers(
      (users) => {
        this.users = users;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  onSubmit(){
  		this._postService.createPost(this.post,
  			(post) => {
  				// this.post = new Post();  				
  				this._router.navigateByUrl('/dashboard');
  			},
  			(err) => {
  				console.log("error");
  			}
  		);
  }

  goHome() {
        this._router.navigateByUrl('/dashboard');
  }

}
