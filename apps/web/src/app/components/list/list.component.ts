import {
  Component,
} from '@angular/core';

import { Post } from '@posts/common';
import { Observable } from 'rxjs';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'posts-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  public posts$: Observable<Post[]>;

  constructor(
    private postService: PostService
  ) {
    this.posts$ = this.postService.posts$.asObservable();
  }

}
