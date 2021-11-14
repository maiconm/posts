import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { of } from 'rxjs';
import { catchError, take } from 'rxjs/operators';

import { AuthResult, User } from '@posts/common';

import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'posts-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public hide = true;

  public loading = false;

  public formGroup = this.formBuilder.group({
    login: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(3),]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private snackBar: MatSnackBar,
  ) {
  }

  /**
   * Efetua login.
   */
  public signIn(): void {
    this.loading = true;
    const body: Pick<User, 'login' | 'password'> = this.formGroup.value;
    this.authService.login(body).pipe(
      take(1),
      catchError((err: HttpErrorResponse) => {
        this.loading = false;
        if (err.status === 401) {
          this.snackBar.open(
            'Usuário ou senha inválidos',
            'Ok',
            {
              duration: 3000,
            }
          );
          return of(undefined);
        }
        throw err;
      }),
    ).subscribe((result?: AuthResult) => {
      this.loading = false;
      if (result?.jwt) {
        setTimeout(() => {
          this.router.navigate([ '/' ]);
          this.snackBar.open(
            `Bem-vindo, ${result.user.login}`,
            'Ok',
            {
              duration: 3000,
            }
          );
        }, 1000);
      }
    });
  }
}
