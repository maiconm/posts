import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'posts-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  hide = true;

  public formGroup = this.formBuilder.group({
    login: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(3),]],
  });

  constructor(
    private formBuilder: FormBuilder,
  ) {
  }

  public signIn(): void {
    console.log(this.formGroup.value)
  }
}
