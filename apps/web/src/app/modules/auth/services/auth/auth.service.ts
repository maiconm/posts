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

  public hasJwt$ = new ReplaySubject<boolean>(1);

  constructor(
    @Inject('API_BASE_URL') private apiBaseUrl: string,
    private httpClient: HttpClient,
  ) {
    const hasJwt = window.localStorage.getItem('jwt');
    this.hasJwt$.next(!!hasJwt);
  }

  public login(user: Pick<User, 'login' | 'password'>): Observable<AuthResult> {
    return this.httpClient.post<AuthResult>(
      `${this.apiBaseUrl}/auth/login`,
      user,
    ).pipe(
      tap(user => {
        window.localStorage.setItem('jwt', user.jwt);
        this.hasJwt$.next(true);
      })
    );
  }

  public logout(): void {
    window.localStorage.removeItem('jwt');
    this.hasJwt$.next(false);
  }

}
