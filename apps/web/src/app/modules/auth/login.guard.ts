import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import {
  map,
} from 'rxjs/operators';

import { AuthService } from './services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {
  }

  public canActivate(): Observable<boolean> {
    return this.authService.hasJwt$.pipe(
      map(hasJwt => {
        if (hasJwt) {
          this.router.navigate(['/posts']);
          return false;
        }
        return true;
      }),
    );
  }

}
