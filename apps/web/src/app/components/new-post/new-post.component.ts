import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Post } from '@posts/common';
import { take } from 'rxjs/operators';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'posts-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent {

  public loading = false;

  public formGroup = this.formBuilder.group({
    image: ['', Validators.required],
    message: ['', Validators.required],
  });

  constructor(
    private formBuilder: FormBuilder,
    private postService: PostService,
  ) {
  }

  public submitPost(): void {
    this.loading = true;
    this.postService.post(this.formGroup.value).pipe(
    ).subscribe(() => {
      this.loading = false;
      this.formGroup.reset();
    });
  }

}
