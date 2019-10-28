import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../models/post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
  @Input() post: Post;
  @Input() index: number;

  constructor(private postService: PostService) {}

  ngOnInit() {}

  onLoveIt() {
    this.postService.loveIt(this.index);
  }

  onDontLove() {
    this.postService.dontLove(this.index);
  }

  onDeletePost() {
    this.postService.delPost(this.index);
  }
}
