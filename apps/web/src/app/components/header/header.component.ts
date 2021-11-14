import {
  Component,
} from '@angular/core';
import { AuthService } from '../../modules/auth/services/auth/auth.service';

@Component({
  selector: 'posts-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(
    public authService: AuthService,
  ) {
  }
}
