import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Validators, AbstractControl, ReactiveFormsModule, FormGroup, FormControl, ValidationErrors, FormBuilder } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-register',
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit,OnDestroy  {
  isCallingAPI: boolean = false;
  apiError: string = '';
  sub: Subscription = new Subscription();
  passwordVisible: boolean = false;

  private _authService = inject(AuthService);
  private _router = inject(Router);

  registerForm!: FormGroup 

  ngOnInit(): void {
    this.initRegister()
  }
  initRegister() {
   this.registerForm = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(8)]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      phone: new FormControl(null, [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/), Validators.minLength(10), Validators.maxLength(12)]),
      password: new FormControl(null, [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/), Validators.maxLength(20)]),
      // password: new FormControl(null, [Validators.required,Validators.pattern(/^[A-Z]\w{5,}$/),  Validators.maxLength(20)]),
      rePassword: new FormControl(null, [Validators.required, Validators.maxLength(20)]),
    }, { validators: [this.validateRePassword] });

  }

  register() {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
    } else {
      this.apiError = '';
      this.isCallingAPI = true;
      if (this.sub) this.sub.unsubscribe();

      this.sub = this._authService.registerUser(this.registerForm.value).subscribe({
        next: (res) => {
          this.isCallingAPI = false;
          // this._router.navigate(['/home']);
          this._router.navigate(['/auth/login']);
        },
        error: (err) => {
          this.apiError = err.error?.message || 'Something went wrong';
          this.isCallingAPI = false;
        },
        complete: () => {
          console.log("done");
          this.isCallingAPI = false
        }
      });
    }
  }

  togglePassword() {
    this.passwordVisible = !this.passwordVisible;
  }
  
  validateRePassword(form: AbstractControl) {
    const password = form.get('password')?.value
    const rePassword = form.get('rePassword')?.value
    if (password == rePassword) {
      return null
    } else {
      return { misMatch: true }
    }
  }


  strength: 'Weak' | 'Medium' | 'Strong' = 'Weak';

  get password() {
    return this.registerForm.get('password')?.value || '';
  }

  get hasUpperCase(): boolean {
    return /[A-Z]/.test(this.password);
  }

  get hasLowerCase(): boolean {
    return /[a-z]/.test(this.password);
  }

  get hasNumber(): boolean {
    return /\d/.test(this.password);
  }

  get hasSpecialChar(): boolean {
    return /[@$!%*?&]/.test(this.password);
  }

  get hasMinLength(): boolean {
    return this.password.length >= 8;
  }

  checkPasswordStrength() {
    let passedRules = 0;
    if (this.hasUpperCase) passedRules++;
    if (this.hasLowerCase) passedRules++;
    if (this.hasNumber) passedRules++;
    if (this.hasSpecialChar) passedRules++;
    if (this.hasMinLength) passedRules++;

    if (passedRules <= 2) {
      this.strength = 'Weak';
    } else if (passedRules === 3 || passedRules === 4) {
      this.strength = 'Medium';
    } else {
      this.strength = 'Strong';
    }
  }



  ngOnDestroy(): void {
    if (this.sub) this.sub.unsubscribe();
  }
}








