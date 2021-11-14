import { Component } from '@angular/core';
import { AuthService } from '../../modules/auth/services/auth/auth.service';

@Component({
  selector: 'posts-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

  constructor(
    public authService: AuthService,
  ) {
  }

}
