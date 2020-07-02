import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../../../services/user.service';
import {Post} from '../../../module/Post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input()
  post: Post;

  constructor(private userService: UserService) {

  }


  ngOnInit(): void {
  }

  showComments(id: number): void {
    this.userService.getCommentForSinglePost(id).subscribe(data => console.log(data));
  }
}
