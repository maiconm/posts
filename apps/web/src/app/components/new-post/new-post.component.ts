import {
  Component,
  ViewChild,
} from '@angular/core';
import {
  FormBuilder,
  FormGroupDirective,
  Validators
} from '@angular/forms';

import { PostService } from '../../services/post.service';

@Component({
  selector: 'posts-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent {
  /**
   * Regex para espaços em branco.
   */
  private whiteSpaceRegex = /^(\s+\S+\s*)*(?!\s).*$/;
  /**
   * Diretiva do form.
   */
  @ViewChild(FormGroupDirective)
  public formDirective?: FormGroupDirective;

  /**
   * Estado do carregamento.
   */
  public loading = false;

  /**
   * formulário.
   */
  public formGroup = this.formBuilder.group({
    image: [
      '', [
        Validators.required,
        Validators.pattern(this.whiteSpaceRegex),
      ]
    ],
    message: [
      '', [
        Validators.required,
        Validators.pattern(this.whiteSpaceRegex),
      ]
    ],
  });


  constructor(
    private formBuilder: FormBuilder,
    private postService: PostService,
  ) {
  }

  /**
   * Envia os valores do `formGroup` e reseta o form.
   */
  public submitPost(): void {
    this.loading = true;
    this.postService.post(this.formGroup.value).pipe(
    ).subscribe(() => {
      this.loading = false;
      this.formDirective?.resetForm();
    });
  }

}
