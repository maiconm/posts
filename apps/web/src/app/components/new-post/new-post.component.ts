import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'posts-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent {

  public formGroup = this.formBuilder.group({
    image: ['', Validators.required],
    message: ['', Validators.required],
  });

  constructor(
    private formBuilder: FormBuilder,
  ) {
  }

}
