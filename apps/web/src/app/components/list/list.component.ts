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
      65465465,
      'https://i.pinimg.com/originals/10/7a/97/107a97ca5bd4a571edcebec54a66fc32.jpg',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, ex recusandae voluptatibus temporibus, quisquam iusto laudantium expedita minima doloribus officiis corporis cum nobis aliquam eligendi beatae qui suscipit voluptas odio.',
      'Nome do usuario'
    ),
    new Post(
      '129387123',
      57357375,
      'https://i.pinimg.com/originals/10/7a/97/107a97ca5bd4a571edcebec54a66fc32.jpg',
      '',
      'teste'
    ),
    new Post(
      '129387123',
      19519159519,
      '',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, ex recusandae voluptatibus temporibus, quisquam iusto laudantium expedita minima doloribus officiis corporis cum nobis aliquam eligendi beatae qui suscipit voluptas odio.',
      'teste'
    ),
    new Post(
      '129387123',
      687832159519,
      'q',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, ex recusandae voluptatibus temporibus, quisquam iusto laudantium expedita minima doloribus officiis corporis cum nobis aliquam eligendi beatae qui suscipit voluptas odio.',
      'teste'
    ),
  ]

}
