import { Component } from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../module/user';
import {Post} from '../../module/Post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'home-work2';
  users: User[];
  posts: Post[];

  constructor(private userService: UserService) {
    userService.users().subscribe(data => this.users = data);
    userService.getAllPosts().subscribe(data => this.posts = data);
  }
}
