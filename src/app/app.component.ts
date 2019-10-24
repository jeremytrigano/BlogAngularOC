import { Component } from '@angular/core';
import { Post } from './models/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  listPosts = [
    new Post({ title: 'Mon premier post', loveIts: 2 }),
    new Post({ title: 'Mon deuxième post', loveIts: -1 }),
    new Post({ title: 'Encore un post' })
  ];
}
