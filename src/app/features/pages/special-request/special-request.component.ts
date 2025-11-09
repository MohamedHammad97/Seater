import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth/auth.service';

@Component({
  selector: 'app-special-request',
  imports: [RouterLink],
  templateUrl: './special-request.component.html',
  styleUrl: './special-request.component.css'
})
export class SpecialRequestComponent {
  
  private _authService = inject(AuthService);
  private _router = inject(Router);

  // goToSignin() {
  //   if (this._authService.isLoggedinUser()) {
  //     this._router.navigate(['/special-request-booking']); //هضيف هنا الspecialRequestForm
  //   } else {
  //     this._router.navigate(['/auth/login']);
  //   }
  // }
}
