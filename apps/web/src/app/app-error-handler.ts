import { HttpErrorResponse } from '@angular/common/http';
import {
  ErrorHandler,
  Injectable,
  NgZone,
} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from './modules/auth/services/auth/auth.service';

@Injectable()
export class AppErrorHandler extends ErrorHandler {

  constructor(
    private ngZone: NgZone,
    private snackBar: MatSnackBar,
    private router: Router,
    private authService: AuthService,
  ) {
    super();
  }

  public handleError(err: any): void {
    if (err instanceof HttpErrorResponse) {
      this.handleHttpErrorResponse(err);
      return;
    }
    console.error(err);
    this.snackBar.open(
      'Esta aplicação encontrou um erro',
      'ok',
      {
        duration: 3000,
      },
    );
  }

  private handleHttpErrorResponse(err: HttpErrorResponse): void {
    this.ngZone.run(() => {
      if (err.status === 401) {

        this.snackBar.open(
          `Usuário não autenticado`,
          'ok',
          {
            duration: 3000,
          },
        );
        try {
          this.authService.logout();
          console.log('JWT antigo removido');
        } catch (error) {
          console.log('não tem JWT');
        }
        this.router.navigate(['/login']);
        return;
      }
      this.snackBar.open(
        `Erro de servidor: [${err.status}] ${err.statusText}`,
        'ok',
        {
          duration: 3000,
        }
      );
    });
  }
}
