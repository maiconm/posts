import {
  Component, Input,
} from '@angular/core';
import { Post } from '@posts/common';

@Component({
  selector: 'posts-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  /**
   * Post.
   */
  @Input()
  public post!: Post;

  /**
   * Remove imagem do post.
   * @param post
   */
  public removePostImage(post: Post): void {
    post.image = '';
  }

}
