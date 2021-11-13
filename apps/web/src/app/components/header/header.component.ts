import {
  Component,
} from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'posts-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public hasToken = false;

  constructor(
    private router: Router,
  ) {
    this.router.events.pipe(
      filter((event) => event instanceof RouterEvent)
    ).subscribe(() => {
      this.hasToken = !!window.localStorage.getItem('jwt');
    });
  }

  public logout(): void {
    window.localStorage.removeItem('jwt');
    this.hasToken = false;
  }
}
