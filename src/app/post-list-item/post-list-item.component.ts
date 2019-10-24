import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../models/post';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
  @Input() post: Post;

  constructor() {}

  ngOnInit() {}

  getColor() {
    if (this.post.loveIts > 0) {
      return 'green';
    } else if (this.post.loveIts < 0) {
      return 'red';
    }
  }

  onLoveIt() {
    this.post.loveIts = this.post.loveIts + 1;
  }

  onDontLove() {
    this.post.loveIts = this.post.loveIts - 1;
  }
}
