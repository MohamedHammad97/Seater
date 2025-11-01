import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth/auth.service';

@Component({
  selector: 'app-special-request',
  imports: [],
  templateUrl: './special-request.component.html',
  styleUrl: './special-request.component.css'
})
export class SpecialRequestComponent {
  // constructor(private _authService: AuthService, private _router: Router) { }
  private _authService = inject(AuthService);
  private _router = inject(Router);

  goToSignin() {
    if (this._authService.isLoggedinUser()) {
      this._router.navigate(['/about']);
    } else {
      this._router.navigate(['/home']);
    }
  }
}
