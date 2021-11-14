import { HttpClient } from '@angular/common/http';
import {
  Inject,
  Injectable,
} from '@angular/core';
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

  public login$ = new ReplaySubject<string>(1);

  constructor(
    @Inject('API_BASE_URL') private apiBaseUrl: string,
    private httpClient: HttpClient,
  ) {
    const login = window.localStorage.getItem('login');
    this.login$.next(login ? login : '');
  }

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

  public logout(): void {
    window.localStorage.removeItem('jwt');
    window.localStorage.removeItem('login');
    this.login$.next('');
  }

}
