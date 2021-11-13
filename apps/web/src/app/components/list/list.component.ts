import {
  Component,
} from '@angular/core';

import { Post } from '@posts/common';

@Component({
  selector: 'posts-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  public posts = [
    new Post(
      '129387123',
      Date.now(),
      'https://i.pinimg.com/originals/10/7a/97/107a97ca5bd4a571edcebec54a66fc32.jpg',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, ex recusandae voluptatibus temporibus, quisquam iusto laudantium expedita minima doloribus officiis corporis cum nobis aliquam eligendi beatae qui suscipit voluptas odio.',
      'Nome do usuario'
    ),
    new Post(
      '129387123',
      Date.now(),
      'https://i.pinimg.com/originals/10/7a/97/107a97ca5bd4a571edcebec54a66fc32.jpg',
      '',
      'teste'
    ),
    new Post(
      '129387123',
      Date.now(),
      '',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, ex recusandae voluptatibus temporibus, quisquam iusto laudantium expedita minima doloribus officiis corporis cum nobis aliquam eligendi beatae qui suscipit voluptas odio.',
      'teste'
    ),
    new Post(
      '129387123',
      Date.now(),
      'q',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, ex recusandae voluptatibus temporibus, quisquam iusto laudantium expedita minima doloribus officiis corporis cum nobis aliquam eligendi beatae qui suscipit voluptas odio.',
      'teste'
    ),
  ]

  /**
   * Remove imagem do post.
   * @param post
   */
  public removePostImage(post: Post): void {
    post.image = '';
  }

}
