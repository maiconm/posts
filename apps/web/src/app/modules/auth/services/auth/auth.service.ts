import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { AuthResult, User } from '@posts/common';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    @Inject('API_BASE_URL') private apiBaseUrl: string,
    private httpClient: HttpClient,
  ) {
  }

  public login(iUsuario: Pick<User, 'login' | 'password'>): Observable<AuthResult> {
    return this.httpClient.post<AuthResult>(
      `${this.apiBaseUrl}/auth/login`,
      iUsuario,
    );
  }
}
