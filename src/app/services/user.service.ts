import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../module/user';
import {Observable} from 'rxjs';
import {Post} from '../module/Post';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // usersArr: User[];

  constructor(private http: HttpClient) {
  }

  users(): Observable<User[]> {
    return  this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }

  getPostForSingleUser(id): Observable<Post[]> {
    return this.http.get<Post[]>(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
  }

  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }

  getCommentForSinglePost(id): Observable<Post[]> {
    return this.http.get<Post[]>(`https://jsonplaceholder.typicode.com/comments?postId=${id}`);
  }
}
