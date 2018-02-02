import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post';
import { UserService } from '../../user/user.service';
import { User } from '../../user/user'
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
	posts: Post[];
  user: User;
  users: User[];
  loggedIn = true;

  constructor(
    private _route: Router,
    private _postService: PostService,
    private _userService: UserService) { }

  ngOnInit() {
    this.user = new User();

  	this._postService.retrievePosts(
  		(posts) => {
  			this.posts = posts;
        this.user = this._userService.currentUser;
      },
      (err) => {
        console.log(err);
      }
    );

    this._userService.retrieveUsers(
      (users) => {
        this.users = users;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  delete(id) {
    this._postService.deletePost(id,
      (post) => {

        this._postService.retrievePosts(
          (posts) => {
            this.posts = posts;

          },

          (err) => {
            console.log(err);
          });

      },
      (err) => {
        console.log(err);
      }
    )
  }

  addRoute() {
        this._route.navigateByUrl('/post/new');
  }
}
