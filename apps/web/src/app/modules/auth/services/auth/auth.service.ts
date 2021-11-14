import { HttpClient } from '@angular/common/http';
import {
  Inject,
  Injectable,
} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  AuthResult,
  User,
} from '@posts/common';
import {
  Observable,
  ReplaySubject,
} from 'rxjs';
import {
  tap,
} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  /**
   * Gerencia o estado do Login.
   */
  public login$ = new ReplaySubject<string>(1);

  constructor(
    private snackBar: MatSnackBar,
    @Inject('API_BASE_URL') private apiBaseUrl: string,
    private httpClient: HttpClient,
  ) {
    const login = window.localStorage.getItem('login');
    this.login$.next(login ? login : '');
  }

  /**
   * Autentica usuário.
   * @param user Login e senha
   * @returns Login e JWT.
   */
  public login(user: Pick<User, 'login' | 'password'>): Observable<AuthResult> {
    return this.httpClient.post<AuthResult>(
      `${this.apiBaseUrl}/auth/login`,
      user,
    ).pipe(
      tap(user => {
        window.localStorage.setItem('jwt', user.jwt);
        window.localStorage.setItem('login', user.user.login);
        this.login$.next(user.user.login);
      })
    );
  }

  /**
   * Remove as credenciais do usuário.
   */
  public logout(): void {
    window.localStorage.removeItem('jwt');
    window.localStorage.removeItem('login');
    this.login$.next('');
    this.snackBar.open(
      'Deslogado',
      'ok',
      {
        duration: 3000,
      },
    );
  }

}
