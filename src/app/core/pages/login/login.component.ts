import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { Subscription } from 'rxjs';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  isCallingAPI: boolean = false
  apiError!: string
  subscription: Subscription = new Subscription()
  passwordVisible: boolean = false;


  constructor() {}

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/), Validators.minLength(3), Validators.maxLength(8)]),
  })


  _authService = inject(AuthService)
  _router = inject(Router)

  login() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched()
    } else {
      this.apiError = ''
      this.isCallingAPI = true
      if (this.subscription) this.subscription.unsubscribe()
      this.subscription = this._authService.loginUser(this.loginForm.value).subscribe(
        {
          next: (res) => {
            this.isCallingAPI = false
            localStorage.setItem("userToken", res.token); // <-- ADD THIS LINE
            this._authService.saveUser(); // <-- ADD THIS LINE
            // this._authService.saveUser()
            this._router.navigate(['/home'])
          },
          error: (err) => {
            this.apiError = err.error.message
            this.isCallingAPI = false
          },
          complete: () => {

          }
        }
      )
    }

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  togglePassword() {
    this.passwordVisible = !this.passwordVisible;

    const passwordInput = document.getElementById('password') as HTMLInputElement;
    if (passwordInput) {
      passwordInput.type = this.passwordVisible ? 'text' : 'password';
    }
  }

}


// import { Component, inject, OnDestroy, OnInit } from '@angular/core';
// import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
// import { AuthService } from '../../services/auth/auth.service';
// import { Subscription } from 'rxjs';
// import { Router, RouterLink } from '@angular/router';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-login',
//   standalone: true,
//   imports: [CommonModule, ReactiveFormsModule, RouterLink],
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnDestroy,OnInit {

//   isCallingAPI: boolean = false;
//   apiError: string = '';
//   subscription: Subscription = new Subscription();
//   passwordVisible: boolean = false;

//   private _authService = inject(AuthService);
//   private _router = inject(Router);

//   loginForm!: FormGroup

// ngOnInit(): void {
//   this.initForm()
// }

//   initForm() {
//     this.loginForm = new FormGroup({
//       email: new FormControl('', [Validators.required, Validators.email]),
//       password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{3,8}$/)]),
//     });
//   }
 


//   login() {
//     if (this.loginForm.invalid) {
//       this.loginForm.markAllAsTouched();
//       return;
//     } else {
//       this.apiError = '';
//       this.isCallingAPI = true;
//       if (this.subscription) this.subscription.unsubscribe();

//       this.subscription = this._authService.loginUser(this.loginForm.value).subscribe({
//         next: (res) => {
//           this.isCallingAPI = false;
//           localStorage.setItem("userToken", res.token);
//           this._authService.saveUser()
//           this._router.navigate(['/home']);
//         },
//         error: (err) => {
//           this.apiError = err.error?.message || 'Something went wrong';
//           this.isCallingAPI = false;
//         }
//       });
//     }
//   }

//   togglePassword() {
//     this.passwordVisible = !this.passwordVisible;
//   }


//   ngOnDestroy(): void {
//     if (this.subscription) this.subscription.unsubscribe();
//   }
  
// }

