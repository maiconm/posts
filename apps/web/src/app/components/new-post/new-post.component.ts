import { Component, ViewChild, } from '@angular/core';
import { FormBuilder, FormGroupDirective, Validators } from '@angular/forms';

import { PostService } from '../../services/post.service';

@Component({
  selector: 'posts-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent {

  @ViewChild(FormGroupDirective)
  public formDirective?: FormGroupDirective;

  public loading = false;

  public formGroup = this.formBuilder.group({
    image: [
      '', [Validators.required, Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]
    ],
    message: [
      '', [Validators.required, Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]
    ],
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
      this.formDirective?.resetForm();
    });
  }

}
