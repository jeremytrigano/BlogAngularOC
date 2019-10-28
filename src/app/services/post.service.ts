import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  postsSubject = new Subject<Post[]>();

  private posts = [
    new Post({ id: 1, title: 'Mon premier post', loveIts: 2 }),
    new Post({ id: 2, title: 'Mon deuxième post', loveIts: -1 }),
    new Post({ id: 3, title: 'Encore un post' })
  ];

  constructor() {}

  emitPostSubject() {
    this.postsSubject.next(this.posts.slice());
  }

  addPost(ptitle: string, pcontent: string) {
    const newId = this.posts[this.posts.length - 1].id + 1;
    const postObject = new Post({
      id: newId,
      title: ptitle,
      content: pcontent
    });
    this.posts.push(postObject);
    this.emitPostSubject();
  }

  delPost(index: number) {
    this.posts.splice(index, 1);
    this.emitPostSubject();
  }

  loveIt(index: number) {
    this.posts[index].loveIts = this.posts[index].loveIts + 1;
  }

  dontLove(index: number) {
    this.posts[index].loveIts = this.posts[index].loveIts - 1;
  }
}
