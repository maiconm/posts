import {
  Component,
} from '@angular/core';

import { PostService } from '../../services/post.service';

@Component({
  selector: 'posts-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  constructor(
    public postService: PostService,
  ) {
  }

}
